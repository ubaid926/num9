import fs from 'fs';
import path from 'path';

const srcDir = 'src';
const codeFiles = [];

function walk(dir) {
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      walk(full);
    } else if (/\.(jsx?|tsx?)$/.test(item)) {
      codeFiles.push({ path: full, content: fs.readFileSync(full, 'utf-8') });
    }
  }
}

walk(srcDir);

function findUsages(imageBasename) {
  const matches = [];
  for (const f of codeFiles) {
    if (f.content.includes(imageBasename)) {
      matches.push(f.path);
    }
  }
  return matches;
}

const keyImages = [
  'andras.jpg',
  'workCar.png',
  'Paper-Cut Web Design Workspace.png',
  'aboutHeroImage.webp',
  'digital-experience.jpg',
  'interactive-tech.jpg',
  'bussinesAcltImage.webp',
  'trade-show-activation.jpg',
  'web-design.jpg',
  'aboutus3rdSect.webp',
  'fifthSection.png',
  'lexusHeroImg.webp',
  'Metallic Blue Lexus in a Warehouse 1.webp',
  'Overlapping Circles Office Collaboration Cutout.webp'
];

for (const img of keyImages) {
  const usages = findUsages(img);
  console.log(`${img} -> used in:`);
  usages.forEach(u => console.log(`   ${u}`));
  if (usages.length === 0) console.log(`   (Not directly referenced)`);
}
