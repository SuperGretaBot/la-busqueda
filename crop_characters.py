#!/usr/bin/env python3
"""Crop individual characters from the group photo."""

from PIL import Image
import os

img = Image.open('/Users/davidyerobot/.claude/image-cache/fedb889c-c52b-40ba-a2bc-adfe5980dfe1/1.png')
W, H = img.size  # 960 x 1280

BASE = '/Users/davidyerobot/Workspace/SideProjects/treasure-hunt/public/characters'
os.makedirs(f'{BASE}/mario', exist_ok=True)
os.makedirs(f'{BASE}/hp', exist_ok=True)

# Each entry: (name, (left, top, right, bottom))

# ─── MARIO ROW 1 (y: 20-235) ─────────────────────
mario_row1 = [
    ('fire-mario',   (15,  20, 165, 235)),
    ('luigi',        (165, 20, 320, 235)),
    ('wario',        (320, 20, 480, 235)),
    ('yoshi',        (480, 20, 625, 235)),
    ('donkey-kong',  (625, 20, 790, 235)),
    ('fire-luigi',   (790, 20, 955, 235)),
]

# ─── MARIO ROW 2 (y: 235-500) ────────────────────
mario_row2 = [
    ('bowser',        (10,  235, 175, 500)),
    ('paragoomba',    (175, 235, 340, 500)),
    ('peach',         (340, 255, 510, 500)),
    ('toad',          (510, 255, 640, 500)),
    ('mario',         (640, 235, 800, 500)),
    ('luigi-classic', (800, 235, 955, 500)),
]

# ─── HEDWIG (small, center) ──────────────────────
hp_special = [
    ('hedwig', (410, 500, 560, 605)),
]

# ─── HP ROW 1 (y: 600-870) ───────────────────────
hp_row1 = [
    ('harry',        (25,  600, 145, 870)),
    ('trelawney',    (145, 600, 265, 870)),
    ('neville',      (265, 600, 380, 870)),
    ('dean-thomas',  (380, 600, 495, 870)),
    ('fred-weasley', (495, 600, 615, 870)),
    ('mcgonagall',   (615, 600, 725, 870)),
    ('luna',         (725, 600, 835, 870)),
    ('draco',        (835, 600, 955, 870)),
]

# ─── HP ROW 2 (y: 870-1150) ──────────────────────
hp_row2 = [
    ('sybill',       (5,   870, 140, 1150)),
    ('bellatrix',    (140, 870, 270, 1150)),
    ('hermione',     (270, 870, 410, 1150)),
    ('ron',          (410, 870, 535, 1150)),
    ('snape',        (535, 870, 660, 1150)),
    ('dumbledore',   (660, 870, 800, 1150)),
    ('hagrid',       (800, 870, 955, 1150)),
]

def crop_and_save(entries, category):
    for name, box in entries:
        left, top, right, bottom = box
        cropped = img.crop((left, top, right, bottom))

        # Make it square with transparent padding
        w, h = cropped.size
        size = max(w, h)
        square = Image.new('RGBA', (size, size), (255, 255, 255, 0))
        offset_x = (size - w) // 2
        offset_y = (size - h) // 2
        square.paste(cropped, (offset_x, offset_y))

        # Resize to consistent size
        square = square.resize((400, 400), Image.LANCZOS)

        path = f'{BASE}/{category}/{name}.png'
        square.save(path, 'PNG')
        print(f'  ✓ {category}/{name}.png')

print('Cropping Mario characters...')
crop_and_save(mario_row1, 'mario')
crop_and_save(mario_row2, 'mario')

print('\nCropping Harry Potter characters...')
crop_and_save(hp_special, 'hp')
crop_and_save(hp_row1, 'hp')
crop_and_save(hp_row2, 'hp')

# Count
mario_count = len(mario_row1) + len(mario_row2)
hp_count = len(hp_special) + len(hp_row1) + len(hp_row2)
print(f'\nTotal: {mario_count} Mario + {hp_count} HP = {mario_count + hp_count} characters')
