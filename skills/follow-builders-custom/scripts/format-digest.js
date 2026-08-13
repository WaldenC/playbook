#!/usr/bin/env node

// ============================================================================
// Follow Builders — Format Digest Script (v3 — HTML output)
// ============================================================================
// Reads prepare-digest.js JSON from stdin, outputs a clean HTML digest.
// Email-friendly: inline styles, no external dependencies.
//
// Usage:
//   node prepare-digest.js | node format-digest.js | node deliver.js
// ============================================================================

import { homedir } from 'os';
import { join } from 'path';
import { readFile } from 'fs/promises';
import { existsSync } from 'fs';

const USER_DIR = join(homedir(), '.follow-builders');
const CONFIG_PATH = join(USER_DIR, 'config.json');

// -- Config -------------------------------------------------------------------

const TWEET_MAX_LEN = 250;
const MAX_TWEETS_PER_BUILDER = 3;

// -- CSS ----------------------------------------------------------------------

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

body {
  margin: 0; padding: 0;
  background: #f7f5f2;
  font-family: 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #1c1c1c; line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
.container { max-width: 580px; margin: 0 auto; padding: 32px 24px; }
.header {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #fff; padding: 40px 24px 36px; text-align: center;
}
.header h1 { margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.3px; }
.header p { margin: 8px 0 0; font-size: 14px; opacity: 0.7; font-weight: 400; }
.stats {
  text-align: center; color: #8b8b8b; font-size: 12px; padding: 20px 0 8px;
  font-weight: 500; letter-spacing: 0.3px;
}
.section-title {
  font-size: 10px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase;
  color: #d45d4c; margin: 32px 0 16px; padding-bottom: 8px;
  border-bottom: 1px solid #e8e2db;
}
.builder {
  background: #fff; border-radius: 8px; padding: 18px 20px; margin-bottom: 14px;
  border: 1px solid #ebe5de;
}
.builder-name { font-size: 15px; font-weight: 600; color: #1a1a2e; margin: 0 0 2px; }
.builder-role {
  font-size: 11px; color: #a0a0a0; margin: 0 0 12px; font-weight: 500;
}
.tweet {
  font-size: 13px; color: #3d3d3d; margin: 0 0 2px; line-height: 1.6;
  padding-left: 12px; border-left: 2px solid #f0ebe3;
}
.tweet-meta { font-size: 10px; color: #b0b0b0; margin: 4px 0 12px 12px; }
.tweet-meta a { color: #d45d4c; text-decoration: none; font-weight: 500; }
.tag {
  display: inline-block; font-size: 9px; font-weight: 700; letter-spacing: 0.5px;
  padding: 2px 6px; border-radius: 3px; margin-left: 6px; vertical-align: middle;
}
.tag-trending { background: #fef1e7; color: #d45d4c; }
.tag-popular { background: #f0f0f0; color: #888; }
.blog {
  background: #fff; border-radius: 8px; padding: 18px 20px; margin-bottom: 14px;
  border: 1px solid #ebe5de;
}
.blog-title { font-size: 15px; font-weight: 600; color: #1a1a2e; margin: 0 0 4px; }
.blog-excerpt { font-size: 13px; color: #555; margin: 0 0 6px; line-height: 1.6; }
.blog-link { font-size: 10px; }
.blog-link a { color: #d45d4c; text-decoration: none; font-weight: 500; }
.podcast {
  background: #fff; border-radius: 8px; padding: 18px 20px; margin-bottom: 14px;
  border: 1px solid #ebe5de;
}
.podcast-name { font-size: 15px; font-weight: 600; color: #1a1a2e; margin: 0 0 2px; }
.podcast-title {
  font-size: 13px; color: #666; font-style: italic; margin: 0 0 6px;
  padding-left: 12px; border-left: 2px solid #f0ebe3;
}
.podcast-link { font-size: 10px; }
.podcast-link a { color: #d45d4c; text-decoration: none; font-weight: 500; }
.footer {
  text-align: center; font-size: 10px; color: #c0c0c0; padding: 24px 0 8px;
  border-top: 1px solid #e8e2db; margin-top: 36px; line-height: 1.8;
}
.footer a { color: #c0c0c0; text-decoration: underline; }
`;

// -- Helpers ------------------------------------------------------------------

function stripHtml(str) {
  return str.replace(/<[^>]*>/g, '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function hesc(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function roleFromBio(bio) {
  if (!bio) return '';
  const lines = bio.split('\n').filter(l => l.trim());
  for (const line of lines) {
    const cleaned = line.replace(/^[-–•\s]+/, '').trim();
    if (/^(affiliations|prev|previous|also|love|DM|opinions|tweets|building|working|investing)/i.test(cleaned)) continue;
    if (cleaned.length < 5) continue;
    if (cleaned.length <= 90) return cleaned;
    return cleaned.slice(0, 87) + '...';
  }
  return '';
}

function engagement(t) {
  return (t.likes || 0) + (t.retweets || 0) * 2;
}

function tweetExcerpt(text) {
  let t = text.replace(/\s+/g, ' ').trim();
  if (t.length <= TWEET_MAX_LEN) return t;
  return t.slice(0, TWEET_MAX_LEN) + '...';
}

function hasSubstance(text) {
  const t = text.trim();
  if (!t) return false;
  if (/^https?:\/\/t\.co\/\S+$/.test(t)) return false;
  if (/^cc @\S+$/i.test(t)) return false;
  if (t.length < 15 && !/[a-z]{3,}/i.test(t)) return false;
  return true;
}

function tagHtml(eng) {
  if (eng >= 500) return '<span class="tag tag-trending">trending</span>';
  if (eng >= 100) return '<span class="tag tag-popular">popular</span>';
  return '';
}

// -- Formatting (HTML) ---------------------------------------------------------

function formatTweets(data) {
  const builders = data.x;
  if (!builders || builders.length === 0) return '';
  let h = '<p class="section-title">X / Twitter</p>\n';

  for (const b of builders) {
    const name = hesc(b.name || b.handle);
    const role = hesc(roleFromBio(b.bio));
    let tweets = (b.tweets || []).filter(t => hasSubstance(t.text));
    if (tweets.length === 0) continue;

    tweets.sort((a, b) => engagement(b) - engagement(a));
    const show = tweets.slice(0, MAX_TWEETS_PER_BUILDER);

    h += '<div class="builder">\n';
    h += `<p class="builder-name">${name}</p>\n`;
    if (role) h += `<p class="builder-role">${role}</p>\n`;

    for (const t of show) {
      const excerpt = hesc(tweetExcerpt(t.text));
      const eng = engagement(t);
      const url = hesc(t.url || '');
      h += `<p class="tweet">${excerpt}${tagHtml(eng)}</p>\n`;
      h += `<p class="tweet-meta"><a href="${url}">view on X &rarr;</a></p>\n`;
    }
    h += '</div>\n';
  }
  return h;
}

function formatBlogs(data) {
  const blogs = data.blogs;
  if (!blogs || blogs.length === 0) return '';
  let h = '<p class="section-title">Official Blogs</p>\n';

  for (const b of blogs) {
    const name = hesc(b.name || b.source_name || '');
    const title = hesc(stripHtml(b.title || 'Untitled'));
    const excerpt = hesc(stripHtml(b.summary || b.description || '').replace(/\s+/g, ' ').trim().slice(0, 250));
    const url = hesc(b.url || '');
    h += '<div class="blog">\n';
    h += `<p class="blog-title">${name}: ${title}</p>\n`;
    if (excerpt) h += `<p class="blog-excerpt">${excerpt}</p>\n`;
    if (url) h += `<p class="blog-link"><a href="${url}">read article &rarr;</a></p>\n`;
    h += '</div>\n';
  }
  return h;
}

function formatPodcasts(data) {
  const podcasts = data.podcasts;
  if (!podcasts || podcasts.length === 0) return '';
  let h = '<p class="section-title">Podcasts</p>\n';

  for (const p of podcasts) {
    const name = hesc(p.name || '');
    const title = hesc(stripHtml(p.title || 'Untitled'));
    const url = hesc(p.url || '');
    h += '<div class="podcast">\n';
    h += `<p class="podcast-name">${name}</p>\n`;
    h += `<p class="podcast-title">&ldquo;${title}&rdquo;</p>\n`;
    if (url) h += `<p class="podcast-link"><a href="${url}">watch on YouTube &rarr;</a></p>\n`;
    h += '</div>\n';
  }
  return h;
}

// -- Main --------------------------------------------------------------------

async function main() {
  const chunks = [];
  for await (const chunk of process.stdin) {
    chunks.push(chunk);
  }
  const raw = Buffer.concat(chunks).toString('utf-8');

  let data;
  try { data = JSON.parse(raw); } catch {
    process.stderr.write('format-digest: invalid JSON on stdin\n');
    process.exit(1);
  }

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  const stats = data.stats || {};

  let html = '<!doctype html>\n<html>\n<head>\n<meta charset="utf-8">\n';
  html += '<meta name="viewport" content="width=device-width,initial-scale=1">\n';
  html += `<style>${CSS}</style>\n</head>\n<body>\n`;

  // Header
  html += '<div class="header">\n';
  html += '<h1>AI Builders Digest</h1>\n';
  html += `<p>${today}</p>\n`;
  html += '</div>\n';

  html += '<div class="container">\n';

  // Stats
  html += `<p class="stats">${stats.xBuilders || 0} builders &middot; ${stats.podcastEpisodes || 0} podcasts &middot; ${stats.blogPosts || 0} blogs</p>\n`;

  html += formatTweets(data);
  html += formatBlogs(data);
  html += formatPodcasts(data);

  // Footer
  html += '<div class="footer">\n';
  html += '<p>Follow Builders &middot; <a href="https://github.com/zarazhangrui/follow-builders">github.com/zarazhangrui/follow-builders</a></p>\n';
  html += '<p>For AI-remixed summaries: type /follow-builders in Claude Code</p>\n';
  html += '</div>\n';

  html += '</div>\n</body>\n</html>\n';

  process.stdout.write(html);
}

main();
