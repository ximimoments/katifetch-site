import os, json, pathlib, datetime
dir_path = pathlib.Path('public/files')
dir_path.mkdir(parents=True, exist_ok=True)
files = [f for f in os.listdir(dir_path) if f not in ('index.html','files.json')]
rows = ""
for f in files:
    stat = (dir_path / f).stat()
    date = datetime.datetime.fromtimestamp(stat.st_mtime).strftime('%Y-%m-%d')
    size = f"{stat.st_size/1024:.1f}K"
    rows += f'<tr><td><a href="./{f}">📄 {f}</a></td><td>{date}</td><td>{size}</td></tr>\n'

html = f"""<!DOCTYPE html><html><head><meta charset="utf-8"><title>Index of /files/</title><style>body{{background:#000;color:#00ff41;font-family:monospace;padding:40px}}a{{color:#00ff41}}table{{width:100%;border-collapse:collapse}}th{{border-bottom:1px solid #00ff41;text-align:left;padding:8px}}td{{padding:8px;border-bottom:1px solid #111}}</style></head><body><h1>Index of /files/</h1><table><tr><th>Name</th><th>Last modified</th><th>Size</th></tr>{rows}</table></body></html>"""

(dir_path / 'index.html').write_text(html)
(dir_path / 'files.json').write_text(json.dumps(files, indent=2))
print(f"Generated with {len(files)} files")
