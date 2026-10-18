import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const SVG_FAVICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 47 47" fill="none">
  <defs>
    <linearGradient id="lira-fav-grad" x1="0" y1="0" x2="42.7563" y2="42.964" gradientUnits="userSpaceOnUse">
      <stop stop-color="#22D3EE" />
      <stop offset="1" stop-color="#A855F7" />
    </linearGradient>
  </defs>
  <path d="M19.7445 0C20.1308 3.37692e-08 20.444 0.313187 20.444 0.699454V11.0171C20.444 13.052 20.3128 15.1601 19.1831 16.8921C18.3742 18.1333 17.292 19.196 16.0103 20.0075C14.7285 20.8189 13.2768 21.36 11.7541 21.5949L11.3422 21.6585C11.1723 21.7133 11.0245 21.8169 10.9201 21.9549C10.8158 22.0928 10.7596 22.2581 10.7596 22.4276C10.7596 22.5972 10.8157 22.763 10.9201 22.901C11.0245 23.0389 11.1724 23.1426 11.3422 23.1974L11.7541 23.2603C13.9791 23.6036 16.0336 24.5986 17.6277 26.1045C19.2219 27.6104 20.2752 29.5512 20.6387 31.653L20.7056 32.0424C20.7636 32.2027 20.8732 32.3419 21.0191 32.4406C21.1651 32.5392 21.3403 32.5922 21.5198 32.5922C21.6994 32.5922 21.8744 32.5392 22.0205 32.4406C22.1666 32.3419 22.2766 32.2029 22.3347 32.0424L22.401 31.653C22.6496 30.2145 23.223 28.8433 24.082 27.6325C24.941 26.4217 26.0658 25.3993 27.3798 24.6353C29.2132 23.568 31.4449 23.444 33.5991 23.444H42.2773C42.6779 23.4441 42.9979 23.7813 42.9618 24.1803C42.0191 34.5872 32.7796 42.7568 21.5198 42.7568C9.6344 42.7567 -9.81563e-07 33.6554 0 22.4276V1.39891C3.69681e-05 0.626345 0.626336 5.10547e-07 1.39891 0H19.7445Z" fill="url(#lira-fav-grad)" />
  <path d="M30.3771 -6.67051e-07C26.9004 -6.67051e-07 24.082 2.81841 24.082 6.29508L24.1004 17.8361C24.1004 18.6087 24.7267 19.235 25.4993 19.235H36.39C39.8667 19.235 42.6851 16.4166 42.6851 12.9399L42.6667 1.39891C42.6667 0.626312 42.0404 0 41.2678 0L30.3771 -6.67051e-07Z" fill="url(#lira-fav-grad)" />
</svg>`

function createIco(images: { width: number; height: number; buffer: Buffer }[]): Buffer {
  const count = images.length
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0) // reserved
  header.writeUInt16LE(1, 2) // type 1 = ICO
  header.writeUInt16LE(count, 4) // image count

  let offset = 6 + count * 16
  const entries: Buffer[] = []

  for (const img of images) {
    const entry = Buffer.alloc(16)
    entry.writeUInt8(img.width === 256 ? 0 : img.width, 0)
    entry.writeUInt8(img.height === 256 ? 0 : img.height, 1)
    entry.writeUInt8(0, 2) // palette color count
    entry.writeUInt8(0, 3) // reserved
    entry.writeUInt16LE(1, 4) // color planes
    entry.writeUInt16LE(32, 6) // bits per pixel
    entry.writeUInt32LE(img.buffer.length, 8) // size of image data
    entry.writeUInt32LE(offset, 12) // offset of image data
    entries.push(entry)
    offset += img.buffer.length
  }

  return Buffer.concat([header, ...entries, ...images.map((i) => i.buffer)])
}

async function main() {
  const root = process.cwd()
  const publicDir = path.join(root, 'public')
  const svgBuffer = Buffer.from(SVG_FAVICON.trim(), 'utf-8')

  // 1. Write public/favicon.svg
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgBuffer)
  console.log('✓ Created public/favicon.svg')

  // 2. Generate PNG frames for ICO (16x16, 32x32, 48x48)
  const sizes = [16, 32, 48]
  const images = await Promise.all(
    sizes.map(async (size) => {
      const buffer = await sharp(svgBuffer)
        .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toBuffer()
      return { width: size, height: size, buffer }
    })
  )

  const icoBuffer = createIco(images)
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer)
  console.log('✓ Created public/favicon.ico with sizes [16, 32, 48]')

  // 3. Mirror into src/app/(frontend) if needed
  const frontendApp = path.join(root, 'src/app/(frontend)')
  if (fs.existsSync(frontendApp)) {
    fs.writeFileSync(path.join(frontendApp, 'favicon.ico'), icoBuffer)
    fs.writeFileSync(path.join(frontendApp, 'icon.svg'), svgBuffer)
    console.log('✓ Mirrored into src/app/(frontend)/')
  }

  // 4. Mirror into src/app/(payload) if needed
  const payloadApp = path.join(root, 'src/app/(payload)')
  if (fs.existsSync(payloadApp)) {
    fs.writeFileSync(path.join(payloadApp, 'favicon.ico'), icoBuffer)
    fs.writeFileSync(path.join(payloadApp, 'icon.svg'), svgBuffer)
    console.log('✓ Mirrored into src/app/(payload)/')
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
