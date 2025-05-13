import matplotlib.pyplot as plt
from collections import defaultdict

# Data
data = [42, 40, 40, 35, 50, 32, 50, 36, 50, 40, 45, 70, 43, 45, 32, 40, 35, 61, 48, 35]

# Urutkan dan kelompokkan
data.sort()
stem_leaf = defaultdict(list)
for number in data:
    stem = number // 10
    leaf = number % 10
    stem_leaf[stem].append(leaf)

# Persiapkan data untuk tampilan
stems = sorted(stem_leaf.keys())
leaves = [' '.join(str(leaf) for leaf in stem_leaf[stem]) for stem in stems]

# Gambar
fig, ax = plt.subplots(figsize=(8, 5))
ax.axis('off')  # Sembunyikan sumbu

# Tampilkan teks batang dan daun
ax.text(0.5, 1.05, 'Stem-and-Leaf Plot', fontsize=14, ha='center', color='white',
        bbox=dict(facecolor='#5271ff', boxstyle='round,pad=0.5'))

for i, (stem, leaf_str) in enumerate(zip(stems, leaves)):
    ax.text(0.1, 1 - 0.08*i, f'{stem} |', fontsize=12, va='top', fontweight='bold')
    ax.text(0.2, 1 - 0.08*i, leaf_str, fontsize=12, va='top')

plt.tight_layout()
plt.show()
