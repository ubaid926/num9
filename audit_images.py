import os
import re

code_dir = 'src'
imported_images = set()

extensions = ('.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif', '.avif')
require_pattern = re.compile(r'[\'\"]([^\'\"\n\r]+\.(?:png|jpg|jpeg|webp|svg|gif|avif))[\'\"]', re.IGNORECASE)

for root, _, files in os.walk(code_dir):
    for f in files:
        if f.endswith(('.jsx', '.js', '.tsx', '.ts')):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8', errors='ignore') as file:
                content = file.read()
                for match in require_pattern.findall(content):
                    norm = os.path.normpath(os.path.join(root, match))
                    if os.path.exists(norm):
                        imported_images.add(norm)

print(f"Imported/used image files in code: {len(imported_images)}")
used_files = [(p, os.path.getsize(p)) for p in imported_images]
used_files.sort(key=lambda x: x[1], reverse=True)
total_used = sum(s for _, s in used_files)
print(f"Total size of imported images: {total_used / (1024*1024):.2f} MB\n")
print("Top 35 used images by size:")
for p, s in used_files[:35]:
    print(f"{s/1024:8.1f} KB  {p}")
