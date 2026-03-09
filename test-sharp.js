const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function test() {
    const width = 1080;
    const height = 1350;

    const imageBuffer = await sharp({
        create: { width, height, channels: 4, background: { r: 100, g: 150, b: 200, alpha: 1 } }
    }).png().toBuffer();

    const overlayText = "Treda Städ - Bäst i test";
    const composites = [];

    const logoPath = path.join(__dirname, "Treda logo black.svg");
    if (fs.existsSync(logoPath)) {
        const logoWidth = Math.floor(width * 0.25);
        const logoBuffer = await sharp(logoPath).resize({ width: logoWidth }).toBuffer();
        composites.push({
            input: logoBuffer,
            top: Math.floor(height * 0.05),
            left: Math.floor(width * 0.05),
        });
    } else {
        console.log("Logo not found at", logoPath);
    }

    if (overlayText) {
        const fontSize = Math.floor(width * 0.08);
        const safeText = overlayText.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

        const textSvg = `
            <svg width="${width}" height="${height}">
                <style>
                    .title { fill: white; font-size: ${fontSize}px; font-weight: bold; font-family: sans-serif; text-shadow: 3px 3px 10px rgba(0,0,0,0.8); }
                </style>
                <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" class="title">${safeText}</text>
            </svg>
        `;
        composites.push({
            input: Buffer.from(textSvg),
            top: 0,
            left: 0,
        });
    }

    let finalImage = sharp(imageBuffer);
    if (composites.length > 0) {
        finalImage = finalImage.composite(composites);
    }
    await finalImage.toFile("test-output.png");
    console.log("done");
}
test().catch(console.error);
