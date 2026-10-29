import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesToOptimize = [
  { path: 'src/assets/andras.jpg', maxWidth: 1400, format: 'jpeg', quality: 82 },
  { path: 'src/assets/aboutHeroImage.webp', maxWidth: 1920, format: 'webp', quality: 82 },
  { path: 'src/assets/Paper-Cut Web Design Workspace.png', maxWidth: 1254, format: 'png', quality: 85 },
  { path: 'src/assets/bussinesAcltImage.webp', maxWidth: 1400, format: 'webp', quality: 82 },
  { path: 'src/assets/digital-experience.jpg', maxWidth: 1024, format: 'jpeg', quality: 82 },
  { path: 'src/assets/interactive-tech.jpg', maxWidth: 1024, format: 'jpeg', quality: 82 },
  { path: 'src/assets/trade-show-activation.jpg', maxWidth: 1024, format: 'jpeg', quality: 82 },
  { path: 'src/assets/web-design.jpg', maxWidth: 1024, format: 'jpeg', quality: 82 },
  { path: 'src/assets/aboutus3rdSect.webp', maxWidth: 1024, format: 'webp', quality: 82 },
  { path: 'src/assets/Neon Geometric Stage Star.webp', maxWidth: 1200, format: 'webp', quality: 82 },
  { path: 'src/assets/laptopImage.png', maxWidth: 1200, format: 'png', quality: 85 },
  { path: 'src/assets/Overlapping Circles Corporate Meeting-Photoroom.png', maxWidth: 1448, format: 'png', quality: 85 },

  // Heavy client logos
  { path: 'src/assets/Logos/ClientsGrid_Logos/Logos/Almaza Gem Crest Logo_trimmed.png', maxWidth: 1200, format: 'png', quality: 85 },
  { path: 'src/assets/Logos/ClientsGrid_Logos/Logos/Almaza Gem Crest Logo.png', maxWidth: 1200, format: 'png', quality: 85 },
  { path: 'src/assets/Logos/ClientsGrid_Logos/Logos/Sentral Education Ribbon Logo.png', maxWidth: 1200, format: 'png', quality: 85 },
  { path: 'src/assets/Logos/ClientsGrid_Logos/Logos/Sentral Education Ribbon Logo_trimmed.png', maxWidth: 1000, format: 'png', quality: 85 },
  { path: 'src/assets/Logos/ClientsGrid_Logos/Logos/Sentral Education Ribbon Logo_White.png', maxWidth: 1000, format: 'png', quality: 85 },
  { path: 'src/assets/Logos/ClientsGrid_Logos/Logos/LifeGive Oval Leaf Logo.png', maxWidth: 1200, format: 'png', quality: 85 },
  { path: 'src/assets/Logos/ClientsGrid_Logos/Logos/LifeGive Oval Leaf Logo_trimmed.png', maxWidth: 1200, format: 'png', quality: 85 },
  { path: 'src/assets/Logos/ClientsGrid_Logos/Logos/Empire Cinemas Crown Emblem_trimmed.png', maxWidth: 1000, format: 'png', quality: 85 },
  { path: 'src/assets/Logos/ClientsGrid_Logos/Logos/Empire Cinemas Crown Emblem.png', maxWidth: 1000, format: 'png', quality: 85 },
  { path: 'src/assets/Logos/ClientsGrid_Logos/Logos/Fairview Geometric Architecture Logo.png', maxWidth: 1200, format: 'png', quality: 85 },
  { path: 'src/assets/Logos/ClientsGrid_Logos/Logos/Fairview Geometric Architecture Logo_trimmed.png', maxWidth: 1000, format: 'png', quality: 85 },
  { path: 'src/assets/Logos/ClientsGrid_Logos/Logos/PwC Logo with Layered Warm Blocks.png', maxWidth: 1200, format: 'png', quality: 85 },
  { path: 'src/assets/Logos/ClientsGrid_Logos/Logos/PwC Logo with Layered Warm Blocks_trimmed.png', maxWidth: 1000, format: 'png', quality: 85 },
  { path: 'src/assets/Logos/ClientsGrid_Logos/Logos/New_YMCA_of_the_USA_logo.png', maxWidth: 1200, format: 'png', quality: 85 },
  { path: 'src/assets/Logos/ClientsGrid_Logos/Logos/ZEE5-Logo (1).png', maxWidth: 1000, format: 'png', quality: 85 },
];

async function run() {
  let totalSaved = 0;
  console.log('Optimizing large assets...\n');

  for (const item of imagesToOptimize) {
    if (!fs.existsSync(item.path)) {
      console.log(`Skipping (not found): ${item.path}`);
      continue;
    }

    const origSize = fs.statSync(item.path).size;
    let pipeline = sharp(item.path);

    if (item.maxWidth) {
      pipeline = pipeline.resize({ width: item.maxWidth, withoutEnlargement: true });
    }

    if (item.format === 'jpeg') {
      pipeline = pipeline.jpeg({ quality: item.quality || 82, mozjpeg: true });
    } else if (item.format === 'webp') {
      pipeline = pipeline.webp({ quality: item.quality || 82, effort: 6 });
    } else if (item.format === 'png') {
      pipeline = pipeline.png({ quality: item.quality || 85, compressionLevel: 9, palette: true });
    }

    const buffer = await pipeline.toBuffer();
    const newSize = buffer.length;

    if (newSize < origSize) {
      fs.writeFileSync(item.path, buffer);
      const saved = origSize - newSize;
      totalSaved += saved;
      console.log(`✓ ${item.path}`);
      console.log(`   ${(origSize/1024).toFixed(1)} KB -> ${(newSize/1024).toFixed(1)} KB (-${((saved/origSize)*100).toFixed(0)}%)`);
    } else {
      console.log(`= ${item.path} (already optimal)`);
    }
  }

  console.log(`\n🎉 Total source savings: ${(totalSaved / (1024*1024)).toFixed(2)} MB`);
}

run();
