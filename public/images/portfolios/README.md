# Service portfolio images

Each service has its own folder. Drop **8 image files** per folder using these exact base names.

**Format:** `.jpg` or `.png` (lowercase). Example: `cover.jpg` or `cover.png`.

## Folders

| Folder | Service |
|--------|---------|
| `pre-wedding/` | Pre-wedding Shoots |
| `birthday/` | Birthday Photography |
| `maternity/` | Maternity Shoots |
| `baby/` | Baby Shoots |
| `corporate/` | Corporate Events |
| `fashion/` | Fashion Portfolio Shoots |
| `product/` | Product Photography |
| `influencer/` | Influencer Content Creation |
| `college-universities/` | College & Universities |

## Files per folder (8 total)

| Base name | Used for | Ratio | Recommended size |
|-----------|----------|-------|------------------|
| `cover` | Services card + portfolio hero background | **16 : 9** | 1920 × 1080 px |
| `01-featured` | Featured tile (top-left) | **16 : 9** | 1600 × 900 px |
| `02-wide` | Wide strip under featured | **21 : 9** | 2100 × 900 px |
| `03-tall` | Tall tile (right side) | **4 : 5** | 1000 × 1250 px |
| `04-normal` | Small grid cell | **3 : 2** | 1200 × 800 px |
| `05-normal` | Small grid cell | **3 : 2** | 1200 × 800 px |
| `06-wide` | Bottom wide strip | **2 : 1** | 1600 × 800 px |
| `07-accent` | Bottom-right gallery tile + **All Services card thumbnail** | **3 : 2** | 1200 × 800 px |

## Grid layout

```
┌──────────────────────┬──────────┐
│                      │          │
│  01 · Featured       │ 03 · Tall│
│  (16:9)              │  (4:5)   │
│                      │          │
├──────────────────────┼──────────┤
│  02 · Wide (21:9)    │ 04 · 3:2 │
├──────────┬───────────┤          │
│ 05 · 3:2 │ 06 · 2:1  │          │
│          │           │ 07 · 3:2 │
└──────────┴───────────┴──────────┘
```

## Example

```
portfolios/
  pre-wedding/
    cover.png
    01-featured.jpg
    02-wide.jpg
    03-tall.png
    04-normal.jpg
    05-normal.jpg
    06-wide.jpg
    07-accent.png
  birthday/
    cover.jpg
    …
```

Missing files show a placeholder until you add them. Each service folder contains its own `README.md` with the same file list.
