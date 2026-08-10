---
name: slide-deck
description: Reference for building a styled single-page HTML slide deck from the beautiful-html-templates library. Use when the user asks for an HTML report, presentation page, slide deck, keynote-style page, or visual explainer — any time they want content styled as slides rather than a plain document.
license: MIT
metadata:
  argument-hint: <what the deck should cover>
---

# Slide Deck

Build a single-file HTML slide deck by matching the user's brief to one of 34 pre-built templates, then adapting the content. Each template is a self-contained folder (`template.html`, `deck-stage.js`, `template.json`, `design.md`).

## Trigger

Invoke when the user asks for: a slide deck, an HTML report, a presentation page, keynote-style output, a visual explainer, a pitch deck, or any HTML output described as "slides" or "deck." Also invoke when the user says "make it look like a presentation" or similar.

## Matching algorithm

Match the user's brief against the catalog below by **tone and mood first**, not by industry. The `best_for` field describes how a template _feels_, not what sector it belongs to — a confident editorial template can carry a tech talk if the user wants design-led. The `avoid_for` field is a soft warning, not a veto; user taste wins.

**Process:**

1. **Clarify occasion + mood** if the user hasn't stated both. Ask: _What's the occasion? What mood / vibe?_
2. **Scan the catalog** for templates whose `mood` and `tone` overlap with the user's stated feel.
3. **Shortlist 2–3** that are genuinely different from each other (different families, different schemes) — preview as title slides with the user's real content, open in browser, let them pick.
4. **When the user already knows the vibe**, skip previews — pick the best match directly and build.

**Sanity checks:** Use `formality` and `density` as guardrails — low-formality for a board deck is worth flagging.

## Catalog (34 templates)

### Editorial / serif / literary (19)

| # | Slug | Tagline | Mood | Tone | Formality | Density | Scheme | Slides |
|---|------|---------|------|------|-----------|---------|--------|--------|
| 1 | `soft-editorial` | Cormorant Garamond serif on warm paper, sage/blush/lemon accents | literary, elegant, quiet, warm-classical | literary, considered, warm, magazine | high | low | light | 12 |
| 2 | `editorial-forest` | Forest green, dusty pink, warm cream, Source Serif 4 | editorial, quiet, considered, warm, intentional | literary, thoughtful, warm, low-pressure | medium | medium | mixed | 8 |
| 3 | `vellum` | Deep navy canvas, warm-yellow Cormorant serifs, dusty teal accent | scholarly, literary, considered, quiet, intellectual | literary, considered, patient, intelligent | high | low | dark | 9 |
| 4 | `emerald-editorial` | Magazine-cover: emerald + navy + paper, double-rule masthead, Bodoni-style display | editorial, considered, confident, magazine-cover | literary, authoritative, warm, designed | medium-high | medium | mixed | 8 |
| 5 | `editorial-tri-tone` | Dusty pink, mustard cream, deep burgundy; Bricolage + Instrument Serif | editorial, warm, intentional, moody | literary, warm, considered, stylish | medium-high | medium | mixed | 8 |
| 6 | `creative-mode` | Cream paper, multi-color accents (green/pink/orange/yellow), Archivo Black display | creative, confident, playful, design-led | graphic, expressive, modern | medium | medium-high | light | 8 |
| 7 | `monochrome` | Ivory ledger paper, all-black type, Lora serif + Jost body — no color | restrained, literary, archival, ledger | literary, considered, neutral, honest | high | high | light | 18 |
| 8 | `pin-and-paper` | Yellow paper, safety-pin illustrations, ink-blue handwritten Caveat, paper-grain texture | crafted, handmade, warm, thoughtful, literary | literary, intimate, warm, grounded | medium | medium | light | 11 |
| 9 | `sakura-chroma` | Vintage Japanese cassette-package: cream paper, diagonal rainbow ribbons, condensed bold type | retro, playful, kawaii-tech, warm, tactile, product-catalogue | playful, confident, warm, tactile | low | medium | light | 8 |
| 10 | `stencil-tablet` | Bone paper, stencil-cut headlines, six-color earth palette — archaeology meets brand | archival, earthy, tactile, considered, graphic | weighty, considered, tactile, literary | medium-high | medium | light | 11 |
| 11 | `cobalt-grid` | Electric cobalt serifs, graph-paper canvas, pixel-glitch decorations, hairline rules | editorial, design-research, studious, modernist, tech-print, monochrome | considered, literary, studious, quietly-modern | high | medium | light | 8 |
| 12 | `pink-script` | Black canvas, hot pink accent, pearl-cream paper, Instrument Serif — late-night editorial luxury | nocturnal, moody, intentional, luxe, expressive | literary, sultry, considered, magazine | medium-high | low | dark | 9 |
| 13 | `broadside` | Dark editorial canvas, fire orange accent, bilingual Latin/Chinese type stack | editorial, dramatic, loud, newspaper | graphic, punchy, literary, considered | medium-high | medium | dark | 20 |
| 14 | `cartesian` | Quiet warm-neutral palette, classical Playfair serifs — tasteful and unhurried | quiet, considered, elegant, warm-minimal | classical, literary, restrained, confident-quiet | high | low | light | 10 |
| 15 | `grove` | Forest-green canvas, cream type, Playfair serifs, single rust accent | organic, considered, warm, literary, natural | classical, warm, considered, patient | medium-high | medium | mixed | 12 |
| 16 | `mat` | Dark sage canvas, bone paper, burnt-orange accent — mid-century modern, wood undertones | warm-modern, considered, tactile, mid-century | warm, design-led, intentional, considered | medium | medium | mixed | 9 |
| 17 | `long-table` | Warm cream + rust-red supper-club aesthetic, bold uppercase grotesk + Fraunces serifs | warm, intimate, modern, friendly, small-batch, social, hospitality | warm, playful, considered, social, magazine-friendly | medium | medium | light | 8 |
| 18 | `signal` | Deep navy canvas, bone paper, muted-gold accent — institutional with quiet weight | institutional, trustworthy, considered, weighty | sober, polished, established, literary | high | high | mixed | 18 |
| 19 | `biennale-yellow` | Solar yellow on warm parchment, deep indigo serif, atmospheric sun-glow gradients | editorial, atmospheric, warm, cultural-institution, poster-like | literary, considered, contemplative, warm-modern | high | medium | light | 8 |

### Bold / neo-brutalist / poster (8)

| # | Slug | Tagline | Mood | Tone | Formality | Density | Scheme | Slides |
|---|------|---------|------|------|-----------|---------|--------|--------|
| 20 | `neo-grid-bold` | Editorial neo-brutalism, single neon yellow accent on off-white paper | confident, punchy, editorial, modern | bold, minimal, design-led, graphic | medium | high | light | 13 |
| 21 | `block-frame` | Neobrutalist, pastel-neon color blocks, chunky black borders | bold, playful, graphic, fresh | confident, graphic, pop, design-led | medium-low | high | light | 10 |
| 22 | `bold-poster` | Magazine-cover poster, massive Shrikhand display, single fire-engine red accent | bold, editorial, loud, confident | dramatic, graphic, sharp, intentional | medium | low | light | 10 |
| 23 | `raw-grid` | Neo-brutalist, thick borders, offset shadows, pink/sage/ink palette | raw, punchy, energetic, confident | direct, modern, no-nonsense, graphic | medium-low | high | light | 10 |
| 24 | `peoples-platform` | Activist poster energy: blue/orange/red on cream, Alfa Slab + Caveat Brush | activist, loud, graphic, honest | punchy, direct, expressive, warm-bold | medium-low | medium-high | light | 10 |
| 25 | `studio` | Black canvas, electric-yellow type — high-voltage design studio aesthetic | electric, bold, graphic, design-led, high-contrast | graphic, loud, modern, intentional | medium | medium | dark | 12 |
| 26 | `coral` | Cream + coral on near-black, oversized Bebas Neue | bold, warm, modern, confident | graphic, punchy, magazine | medium | medium | mixed | 10 |
| 27 | `playful` | Sun-warm peach background, Syne display — friendly indie launch | warm, approachable, indie, friendly | upbeat, informal, welcoming | low | medium | light | 10 |

### Retro / pixel / zine (3)

| # | Slug | Tagline | Mood | Tone | Formality | Density | Scheme | Slides |
|---|------|---------|------|------|-----------|---------|--------|--------|
| 28 | `8-bit-orbit` | Pixel-art neon arcade on deep navy void | retro-tech, playful, cyberpunk, energetic | geeky, neon, rebellious, sci-fi | low | medium | dark | 10 |
| 29 | `retro-windows` | Windows 95 chrome: gray title bars, MS Sans Serif, pixel typography | nostalgic, retro, geeky, playful | winking, nostalgic, geeky, fun | low | medium | light | 10 |
| 30 | `retro-zine` | Beige paper, green accent, Bebas Neue + Caveat — riso-printed zine in HTML | crafted, lo-fi, underground, warm-retro | scrappy, warm, intentional, DIY | medium-low | medium | light | 10 |

### Pastel / friendly / casual (3)

| # | Slug | Tagline | Mood | Tone | Formality | Density | Scheme | Slides |
|---|------|---------|------|------|-----------|---------|--------|--------|
| 31 | `daisy-days` | Cheerful pastel, hand-drawn daisies, stars, rainbows — friendly, soft, warm | cheerful, playful, warm, sunny, wholesome | friendly, soft, encouraging, approachable | low | medium | light | 10 |
| 32 | `capsule` | Modular pill-shaped cards on warm bone, full pastel-pop palette | playful, modern, warm, fresh, fun | upbeat, graphic, approachable, cool | medium-low | medium | light | 10 |
| 33 | `scatterbrain` | Post-it inspired: pastel sticky notes, Caveat handwriting, Shrikhand + Zilla Slab | playful, creative, warm, messy-on-purpose, workshop | informal, warm, expressive, human | low | high | light | 10 |

### Professional (1)

| # | Slug | Tagline | Mood | Tone | Formality | Density | Scheme | Slides |
|---|------|---------|------|------|-----------|---------|--------|--------|
| 34 | `blue-professional` | Cream paper, electric cobalt blue accents — clean modern professional | professional, modern, calm, trustworthy | clean, considered, polished, neutral | medium-high | medium | light | 10 |

### Quick cross-reference by scheme

- **Light only**: soft-editorial, creative-mode, monochrome, pin-and-paper, sakura-chroma, stencil-tablet, cobalt-grid, cartesian, long-table, biennale-yellow, neo-grid-bold, block-frame, bold-poster, raw-grid, peoples-platform, playful, retro-windows, retro-zine, daisy-days, capsule, scatterbrain, blue-professional
- **Dark only**: vellum, pink-script, broadside, 8-bit-orbit, studio
- **Mixed (light + dark slides)**: editorial-forest, emerald-editorial, editorial-tri-tone, grove, mat, coral, signal

## Building rules

### Preserve (these ARE the design system — never touch)

- **Fonts**: Google Fonts imports + `font-family` declarations. Never substitute ("Inter is similar enough" → wrong)
- **Color palette**: All `:root` CSS variables and hex values. Never recolor
- **Layout grid**: Columns, flex hierarchies, absolute positioning. Don't restructure
- **Slide-level CSS classes**: `.s-toc`, `.slide--quote`, `.layout-cover` — they carry visual identity
- **Decorative elements**: Corner brackets, paper grain, SVG ornaments, hand-drawn doodles — not optional
- **Navigation runtime**: `deck-stage.js` or inline keyboard handler — keep as-is

### Replace (this is the user's content)

Headlines, body copy, stats, names/dates, section labels (`[Topic]`, `[Year]`), image placeholders (at same dimensions).

### Add or remove slides

- **More slides**: Duplicate the most appropriate existing layout, replace content, update page numbers (`NN / TT`)
- **Fewer slides**: Drop from the bottom, update page numbers
- **Missing layout**: Design from scratch using the template's **own design system** — same fonts, palette, decorations, spacing rhythm, component grammar, chrome. The new slide must look like it _belongs_ when viewed between two existing slides. Never import from another template and never bail to another template

### Never

- Combine layouts from different templates (**closed visual system** — each template is one complete system; extending it is fine, mashing two is not)
- Strip "extra" decoration (it's identity, not noise)
- "Modernize" old templates — pick a different one instead
- Substitute fonts or recolor

## Output contract

For every artifact (previews, final deck):
1. **Open in browser** with `open <absolute-path>`
2. **Send the absolute path** on its own line, clickable
3. Keep narration minimal: artifact + path + one-line rationale, not a transcript

## Template files

This skill contains the full catalog — matching needs no external lookups. Template source files (HTML/CSS/JS) are fetched from the [beautiful-html-templates](https://github.com/zarazhangrui/beautiful-html-templates) repo on first use:

```bash
# Clone if missing — one-time, ~1.6 MB
CACHE="${BEAUTIFUL_HTML_TEMPLATES:-$HOME/.cache/beautiful-html-templates}"
[ -d "$CACHE" ] || git clone --depth 1 https://github.com/zarazhangrui/beautiful-html-templates.git "$CACHE"
```

After that, every template is at `$CACHE/templates/<slug>/` — instant local reads, no network. If the cache is ever deleted, it re-clones on the next use. Override the default path by setting `BEAUTIFUL_HTML_TEMPLATES` in your environment.

**Per-template folder structure:**
```
templates/<slug>/
├── template.html      # the deck — single HTML file with inline <style> + <script>
├── deck-stage.js      # keyboard navigation runtime
├── template.json      # per-template metadata
└── design.md          # design notes for this template
```

## Output location

Output is a single HTML file. The default convention is:

```
./<topic>.html
```

To customize, configure your agent's CLAUDE.md or project rules with your preferred output directory (e.g., `~/html/<topic>.html`).
