# Landing Page Images

This directory contains all images for the Rheti landing page.

## Required Images

### Hero Section
- `hero-bg.jpg` - Background image for hero section

### Content Sections (scrolling narrative)
- `content-section-1.jpg` - First narrative section background
- `content-section-2.jpg` - Second narrative section background
- `content-section-3.jpg` - Third narrative section background

### Three Pillars Section
- `pillar-personalized.jpg` - Background for "Personalized" card
- `pillar-social.jpg` - Background for "Social" card
- `pillar-community.jpg` - Background for "Community" card
- `pillars-bg.jpg` - Optional background for the section

### CTA Section
- `cta-sunset-beach.jpg` - Sunset beach background image (referenced as "0_Sunset_Beach_1920x1080" in Figma)

### Icons/Graphics
- `logo.svg` or `logo.png` - Rheti logo/icon if needed

## Extracting from Figma

1. Open the Figma design: https://www.figma.com/design/UGAt8agCCDPOprpqlyKwsZ/the-fourth-space?node-id=22-198
2. Select each image layer
3. Export as JPG (quality 90%) for photos or PNG for graphics
4. Name according to the list above
5. Place in this directory

## Image Specifications

- Hero & Content Sections: Minimum 1920px wide
- Pillar Cards: 395px × 425px
- CTA Background: 1440px × 768px (or larger)

## Temporary Placeholders

Until real images are added, the components will display:
- Colored background gradients
- Placeholder text indicating where images should go

## Security Note

These images are stored in `/public/images/` which is served directly by Next.js. This is the standard and secure approach for public-facing static assets.
