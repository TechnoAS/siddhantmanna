// scripts/optimize-images.mjs
// Run: node scripts/optimize-images.mjs
// Converts all JPG/PNG in public/images → WebP (1920px max, 80 quality)

import sharp from "sharp";
import { readdir, mkdir, stat } from "fs/promises";
import { join, parse } from "path";

const INPUT_DIR = "./public/images";
const OUTPUT_DIR = "./public/images/optimized";
const MAX_WIDTH = 1920;
const QUALITY = 80;

async function run() {
    await mkdir(OUTPUT_DIR, { recursive: true });

    const files = await readdir(INPUT_DIR);
    const images = files.filter((f) =>
        /\.(jpg|jpeg|png)$/i.test(f)
    );

    console.log(`Found ${images.length} images to optimize...\n`);

    let totalBefore = 0;
    let totalAfter = 0;

    for (const file of images) {
        const inputPath = join(INPUT_DIR, file);
        const { name } = parse(file);
        // Sanitize filename: lowercase, replace spaces with hyphens
        const safeName = name.toLowerCase().replace(/[\s,]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
        const outputPath = join(OUTPUT_DIR, `${safeName}.webp`);

        const before = (await stat(inputPath)).size;
        totalBefore += before;

        await sharp(inputPath)
            .resize(MAX_WIDTH, null, { withoutEnlargement: true })
            .webp({ quality: QUALITY })
            .toFile(outputPath);

        const after = (await stat(outputPath)).size;
        totalAfter += after;

        const savings = ((1 - after / before) * 100).toFixed(1);
        console.log(
            `✓ ${file} → ${safeName}.webp (${(before / 1024 / 1024).toFixed(1)}MB → ${(after / 1024).toFixed(0)}KB, -${savings}%)`
        );
    }

    console.log(
        `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(1)}MB → ${(totalAfter / 1024 / 1024).toFixed(1)}MB (${((1 - totalAfter / totalBefore) * 100).toFixed(1)}% savings)`
    );
    console.log(
        `\nDone! Optimized images are in ${OUTPUT_DIR}`
    );
    console.log(`\nNext step: Update Experiments.tsx image paths to use /images/optimized/*.webp`);
}

run().catch(console.error);
