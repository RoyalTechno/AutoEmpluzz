import fs from 'fs';
import path from 'path';

const filesToCopy = [
  { from: 'manifest.json', to: 'dist/manifest.json' },
  { from: 'public/Autoply Logo (16x16).png', to: 'dist/Autoply Logo (16x16).png' },
  { from: 'public/Autoply Logo (48x48).png', to: 'dist/Autoply Logo (48x48).png' },
  { from: 'public/Autoply Logo (128x128).png', to: 'dist/Autoply Logo (128x128).png' },
];

filesToCopy.forEach(({ from, to }) => {
  const srcPath = path.resolve(from);
  const destPath = path.resolve(to);
  const destDir = path.dirname(destPath);

  fs.mkdirSync(destDir, { recursive: true });

  fs.copyFile(srcPath, destPath, (err) => {
    if (err) {
      console.error(`❌ Failed to copy ${from} to ${to}:`, err);
    } else {
      console.log(`✅ Copied ${from} to ${to}`);
    }
  });
});