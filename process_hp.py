#!/usr/bin/env python3
from PIL import Image
import os

cache = '/Users/davidyerobot/.claude/image-cache/fedb889c-c52b-40ba-a2bc-adfe5980dfe1'
out = '/Users/davidyerobot/Workspace/SideProjects/treasure-hunt/public/characters/hp'

# Mapping based on the images:
# 16.png = Hedwig (owl, grey wings)
# 17.png = Harry Potter (black hair, glasses, black robes)
# 18.png = Prof. Trelawney (brown hat, patterned robes)
# 19.png = Neville Longbottom (dark hair, black robes, badge)
# 20.png = Dean Thomas (dark skin, black robes)
# 21.png = Fred Weasley (brown/orange sweater)
# 22.png = McGonagall (witch hat, green robes)
# 23.png = Draco Malfoy (green/Slytherin robes)
# 24.png = Luna Lovegood (blonde, brown outfit)
# 25.png = Sybill Trelawney (glasses, red hair, shawl)
# 26.png = Bellatrix (dark curly hair) -- wait, this looks like Hermione
# 27.png = Hermione (bushy brown hair, Gryffindor robes)
# 28.png = Ron Weasley (red hair, black robes)
# 29.png = Luna/Draco variant (blonde, black robes) -- could be another character
# 30.png = Bellatrix Lestrange (black curly hair, black dress)
# 31.png = Dumbledore Gay (pink robes, white hair)
# 32.png = Hagrid (brown robes, large)

mapping = {
    '16.png': 'hedwig.png',
    '17.png': 'harry.png',
    '18.png': 'trelawney.png',
    '19.png': 'neville.png',
    '20.png': 'dean-thomas.png',
    '21.png': 'fred-weasley.png',
    '22.png': 'mcgonagall.png',
    '23.png': 'draco.png',
    '24.png': 'luna.png',
    '25.png': 'sybill.png',
    '26.png': 'hermione.png',
    '27.png': 'hermione2.png',
    '28.png': 'ron.png',
    '29.png': 'luna2.png',
    '30.png': 'bellatrix.png',
    '31.png': 'dumbledore.png',
    '32.png': 'hagrid.png',
}

for src, dst in mapping.items():
    img = Image.open(f'{cache}/{src}').convert('RGBA')
    w, h = img.size
    size = max(w, h)
    square = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    square.paste(img, ((size - w) // 2, (size - h) // 2))
    square = square.resize((400, 400), Image.LANCZOS)
    square.save(f'{out}/{dst}', 'PNG')
    print(f'  ✓ {dst}')

print(f'\nDone! {len(mapping)} HP characters processed.')
