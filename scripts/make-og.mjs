// One-off: builds public/og.png (1200x630) from the flattened logo.
// The handoff logo-full.png has a stray mark left of the cat; og.png is now built from logo-ring + the cleaned logo-face.
import sharp from 'sharp';
const logo = await sharp(process.argv[2]).resize(520, 520).toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#fcfbf1' } })
  .composite([{ input: logo, left: 340, top: 55 }])
  .png({ compressionLevel: 9 })
  .toFile('public/og.png');
