---
name: follow-builders-custom
description: Custom HTML email pipeline on top of zarazhangrui/follow-builders. Replaces the default plain-text delivery with styled HTML emails, engagement-tagged tweets, and builder cards. Install this after setting up the original follow-builders skill.
license: MIT
metadata:
  requires: zarazhangrui/follow-builders
---

# Follow Builders — Custom Pipeline

Custom delivery pipeline for [zarazhangrui/follow-builders](https://github.com/zarazhangrui/follow-builders). Sends a styled HTML email digest instead of plain text or raw JSON.

## What We Changed

| File | Original | Custom |
|---|---|---|
| `scripts/format-digest.js` | _did not exist_ | HTML formatter — converts raw feed JSON to styled HTML email |
| `scripts/deliver.js` | `text: text` (plain text email) | `html: text` (HTML email via Resend) |

### Design Decisions

- **HTML emails** — plain text was unreadable; HTML = scannable builder cards, engagement tags, clickable links
- **Top 3 tweets per builder** — sorted by engagement (likes + retweets), skip noise
- **250-char truncation** — long tweet threads are excerpted; full content at link
- **Engagement tags** — `trending` (500+), `popular` (100+) for at-a-glance scanning
- **DM Sans font** — clean geometric typeface via Google Fonts, falls back to system-ui
- **Card layout** — each builder in a white card with subtle border; tweets indented with a left bar
- **Warm palette** — cream background (#f7f5f2), vermillion accent, dark navy header
- **Role extraction** — first meaningful line from bio (e.g. "head of product @linear"), not the full bio dump
- **Config-driven** — reads `~/.follow-builders/config.json` for delivery preferences

## Setup

### 1. Install the original

```bash
git clone https://github.com/zarazhangrui/follow-builders.git ~/.claude/skills/follow-builders
cd ~/.claude/skills/follow-builders/scripts && npm install
```

### 2. Overlay custom scripts

```bash
cp skills/follow-builders-custom/scripts/format-digest.js ~/.claude/skills/follow-builders/scripts/
cp skills/follow-builders-custom/scripts/deliver.js      ~/.claude/skills/follow-builders/scripts/
```

### 3. Run onboarding in Claude Code

Type `/follow-builders` and follow the prompts. Choose:
- Frequency: daily
- Delivery: email (Resend API key required)

### 4. Set up cron (optional)

For auto-delivery at 8am Pacific:

```bash
(crontab -l 2>/dev/null; echo "0 8 * * * cd ~/.claude/skills/follow-builders/scripts && node prepare-digest.js 2>/dev/null | node format-digest.js | node deliver.js 2>/dev/null") | crontab -
```

## Delivery Channels

| Method | Claude remixing | Format | Cron capable | Quality |
|---|---|---|---|---|
| `/follow-builders` in Claude Code | Yes | Claude-styled in chat | No | Best — AI summaries |
| Cron (format-digest.js) | No | HTML email | Yes | Good — structural formatting |
| Raw cron (no formatter) | No | Raw JSON email | Yes | Unreadable — don't use |

## Config

All preferences stored in `~/.follow-builders/config.json`:

```json
{
  "platform": "other",
  "language": "bilingual",
  "timezone": "America/Los_Angeles",
  "frequency": "daily",
  "deliveryTime": "08:00",
  "delivery": {
    "method": "email",
    "email": "your@email.com"
  },
  "onboardingComplete": true
}
```

## Delivery Keys

Stored in `~/.follow-builders/.env`:

```
RESEND_API_KEY=re_xxxx
```
