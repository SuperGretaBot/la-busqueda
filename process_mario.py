#!/usr/bin/env python3
from PIL import Image
import os

cache = '/Users/davidyerobot/.claude/image-cache/fedb889c-c52b-40ba-a2bc-adfe5980dfe1'
out = '/Users/davidyerobot/Workspace/SideProjects/treasure-hunt/public/characters/mario'

# Mapping: image number -> character filename
# Based on the order shown:
# 2.png  = Fire Mario (white outfit)
# 5.png  = Luigi
# 6.png  = Wario (yellow outfit)
# 7.png  = Yoshi (green)
# 8.png  = Donkey Kong
# 9.png  = Fire Luigi (red outfit, M cap) -- actually Fire Mario variant
# 10.png = Bowser
# 11.png = Paragoomba (goomba with wings)
# 12.png = Princess Peach
# 13.png = Toad
# 14.png = Mario (classic)
# 15.png = Luigi classic

mapping = {
    '2.png':  'fire-mario.png',
    '5.png':  'luigi.png',
    '6.png':  'wario.png',
    '7.png':  'yoshi.png',
    '8.png':  'donkey-kong.png',
    '9.png':  'fire-luigi.png',
    '10.png': 'bowser.png',
    '11.png': 'paragoomba.png',
    '12.png': 'peach.png',
    '13.png': 'toad.png',
    '14.png': 'mario.png',
    '15.png': 'luigi-classic.png',
}

for src, dst in mapping.items():
    img = Image.open(f'{cache}/{src}').convert('RGBA')

    # Make square
    w, h = img.size
    size = max(w, h)
    square = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    square.paste(img, ((size - w) // 2, (size - h) // 2))

    # Resize to 400x400
    square = square.resize((400, 400), Image.LANCZOS)

    path = f'{out}/{dst}'
    square.save(path, 'PNG')
    print(f'  ✓ {dst}')

print(f'\nDone! {len(mapping)} Mario characters processed.')
