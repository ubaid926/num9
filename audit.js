import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function audit() {
  const assetsDir = 'src/assets';
  const files = [];

  function walk(dir) {
    for (const item of fs.readdirSync(dir)) {
      const full = path.join(dir, item);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        walk(full);
      } else if (/\.(png|jpe?g|webp|svg|gif|avif)$/i.test(item)) {
        files.push({ path: full, size: stat.size });
      }
    }
  }

  walk(assetsDir);
  files.sort((a, b) => b.size - a.size);

  console.log('Total images:', files.length);
  const totalMB = (files.reduce((acc, f) => acc + f.size, 0) / 1024 / 1024).toFixed(2);
  console.log('Total size:', totalMB, 'MB');

  console.log('\nTop 30 largest images:');
  console.log('Size (KB) | Dimensions   | Format | File Path');
  console.log('----------|--------------|--------|------------------------------------');
  for (const f of files.slice(0, 30)) {
    try {
      const meta = await sharp(f.path).metadata();
      const dim = `${meta.width}x${meta.height}`.padEnd(12);
      const fmt = (meta.format || '').padEnd(6);
      const sz = (f.size / 1024).toFixed(1).padStart(9);
      console.log(`${sz} | ${dim} | ${fmt} | ${f.path}`);
    } catch (e) {
      const sz = (f.size / 1024).toFixed(1).padStart(9);
      console.log(`${sz} | ?x?          | ?      | ${f.path}`);
    }
  }
}

audit();
