const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(process.cwd(), 'public', 'images', 'Företagssida images');
const outputDir = path.join(process.cwd(), 'public', 'images', 'foretag');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Map input filenames to cleaner output filenames
const imageMap = {
    'businesswoman-drinking-coffee-while-short-break (1).jpg': 'businesswoman.webp',
    'close-up-seller-car-dealership.jpg': 'seller.webp',
    'interior-kitchen-area-modern-office-with-long-wooden-table-chairs.jpg': 'office-kitchen.webp',
    'professional-cleaning-service-people-working-together-office.jpg': 'cleaning-service.webp',
    'view-empty-waiting-room.jpg': 'waiting-room.webp'
};

async function optimizeImages() {
    console.log('Starting image optimization...');

    for (const [inputFile, outputFile] of Object.entries(imageMap)) {
        const inputPath = path.join(inputDir, inputFile);
        const outputPath = path.join(outputDir, outputFile);

        if (fs.existsSync(inputPath)) {
            try {
                await sharp(inputPath)
                    .resize(1200, null, { // Resize to 1200px width, auto height
                        withoutEnlargement: true
                    })
                    .webp({ quality: 80 })
                    .toFile(outputPath);

                console.log(`Optimized: ${inputFile} -> ${outputFile}`);
            } catch (error) {
                console.error(`Error processing ${inputFile}:`, error);
            }
        } else {
            console.warn(`Input file not found: ${inputFile}`);
        }
    }

    console.log('Optimization complete!');
}

optimizeImages();
