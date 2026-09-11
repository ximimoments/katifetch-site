import fs from 'fs'
import path from 'path'

const dir = 'public/files'
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

const files = fs.readdirSync(dir).filter(f => !['index.html', 'files.json'].includes(f))

const rows = files.map(f => {
  const stat = fs.statSync(path.join(dir, f))
  return `<tr><td><a href="./${f}">📄 ${f}</a></td><td>${stat.mtime.toLocaleDateString()}</td><td>${(stat.size/1024).toFixed(1)}K</td></tr>`
}).join('\n')

const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Index of /files/</title><style>body{background:#000;color:#00ff41;font-family:monospace;padding:40px}a{color:#00ff41}table{width:100%;border-collapse:collapse}th{border-bottom:1px solid #00ff41;text-align:left;padding:8px}td{padding:8px;border-bottom:1px solid #111}</style></head><body><h1>Index of /files/</h1><table><tr><th>Name</th><th>Last modified</th><th>Size</th></tr>${rows}</table></body></html>`

fs.writeFileSync(path.join(dir, 'index.html'), html)
fs.writeFileSync(path.join(dir, 'files.json'), JSON.stringify(files, null, 2))
console.log(`Generated with ${files.length} files`)
