#!/usr/bin/env node
/**
 * generate-image.js
 * Calls Gemini 2.0 Flash image generation API and saves the result as a PNG.
 *
 * Usage:
 *   node generate-image.js "<prompt>" <output-path>
 *
 * Example:
 *   node generate-image.js "Bright Scandinavian living room" "./content/image.png"
 */

const fs = require("fs");
const path = require("path");
const https = require("https");
const sharp = require("sharp");

const API_KEY = process.env.GEMINI_API_KEY || "AIzaSyBgGsMX6H3tItc-wk0dAVLSOQp1SOm2Fv0";
const MODEL = "gemini-2.5-flash-image";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

const prompt = process.argv[2];
const outputPath = process.argv[3] || "./content/generated-image.png";
const overlayText = process.argv[4] || null;

if (!prompt) {
    console.error("Error: No prompt provided.");
    console.error('Usage: node generate-image.js "<prompt>" <output-path> "<optional-text>"');
    process.exit(1);
}

const body = JSON.stringify({
    contents: [
        {
            role: "user",
            parts: [{ text: prompt + " Respond with only the image, no text." }]
        }
    ],
    generationConfig: {
        responseModalities: ["IMAGE", "TEXT"]
    }
});

console.log("Generating image...");
console.log("Prompt:", prompt.slice(0, 100) + (prompt.length > 100 ? "..." : ""));
console.log("Output:", outputPath);

const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(body)
    }
};

const req = https.request(API_URL, options, (res) => {
    let data = "";
    res.on("data", (chunk) => (data += chunk));
    res.on("end", () => {
        if (res.statusCode !== 200) {
            console.error(`API Error ${res.statusCode}:`, data);
            process.exit(1);
        }

        try {
            const json = JSON.parse(data);
            const parts = json?.candidates?.[0]?.content?.parts || [];
            const imgPart = parts.find(p => p.inlineData?.data || p.inlineData?.bytesBase64Encoded);

            if (!imgPart) {
                console.error("No image in response. Full response:");
                console.error(JSON.stringify(json, null, 2));
                process.exit(1);
            }

            const base64 = imgPart.inlineData.data || imgPart.inlineData.bytesBase64Encoded;
            const finalPath = outputPath;

            const dir = path.dirname(finalPath);
            if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

            const imageBuffer = Buffer.from(base64, "base64");

            async function processImage() {
                try {
                    const metadata = await sharp(imageBuffer).metadata();
                    const width = metadata.width;
                    const height = metadata.height;
                    const composites = [];

                    // 1. Logo overlay
                    const logoPath = path.join(__dirname, "../Treda logo black.svg");
                    if (fs.existsSync(logoPath)) {
                        const logoWidth = Math.floor(width * 0.25); // 25% of image width
                        const logoBuffer = await sharp(logoPath).resize({ width: logoWidth }).toBuffer();
                        composites.push({
                            input: logoBuffer,
                            top: Math.floor(height * 0.05), // 5% from top
                            left: Math.floor(width * 0.05), // 5% from left
                        });
                    }

                    // 2. Text overlay
                    if (overlayText) {
                        const fontSize = Math.floor(width * 0.08); // 8% of width for font size
                        // Escaping text for SVG
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

                    await finalImage.toFile(finalPath);
                    console.log("SUCCESS: Image saved to:", finalPath);
                } catch (err) {
                    console.error("Error processing image:", err);
                }
            }

            processImage();
        } catch (err) {
            console.error("Failed to parse response:", err.message);
            process.exit(1);
        }
    });
});

req.on("error", (err) => {
    console.error("Request failed:", err.message);
    process.exit(1);
});

req.write(body);
req.end();
