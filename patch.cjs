const fs = require('fs');
const file = 'node_modules/@payloadcms/next/dist/layouts/Root/index.js';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/_jsx(?:s)?\("body",\s*\{/g, '_jsxs("body", { suppressHydrationWarning: true,');
fs.writeFileSync(file, content);
