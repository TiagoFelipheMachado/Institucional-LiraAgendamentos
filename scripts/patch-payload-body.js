import fs from 'node:fs';
import path from 'node:path';

const targetPaths = [
  'node_modules/@payloadcms/next/dist/layouts/Root/index.js',
  'node_modules/.pnpm/@payloadcms+next@3.90.2_@ty_0af0476bbe99296909facc7ce480e6d0/node_modules/@payloadcms/next/dist/layouts/Root/index.js'
];

for (const relPath of targetPaths) {
  const fullPath = path.resolve(process.cwd(), relPath);
  if (!fs.existsSync(fullPath)) continue;

  let content = fs.readFileSync(fullPath, 'utf8');

  // Add suppressHydrationWarning to body element if not already present
  if (content.includes('_jsxs("body", {') && !content.includes('_jsxs("body", { suppressHydrationWarning')) {
    content = content.replace(
      '_jsxs("body", {',
      '_jsxs("body", { suppressHydrationWarning: true,'
    );
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`[patch-payload-body] Successfully patched body suppressHydrationWarning in ${relPath}`);
  } else if (content.includes('_jsxs("body", { suppressHydrationWarning: true,')) {
    console.log(`[patch-payload-body] Already patched in ${relPath}`);
  }
}
