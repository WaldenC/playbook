# Playbook

A collection of agent skills — reusable playbooks that teach any coding agent how to perform specific tasks. Agent-agnostic, model-agnostic, framework-agnostic.

Each skill is a self-contained markdown file that an agent reads as its operating manual: what to do, what to preserve, what never to touch.

## Skills

| Skill | Description |
|---|---|
| [slide-deck](skills/slide-deck/SKILL.md) | Build styled single-page HTML slide decks from 34 pre-built templates |
| [follow-builders-custom](skills/follow-builders-custom/SKILL.md) | HTML email pipeline on top of [zarazhangrui/follow-builders](https://github.com/zarazhangrui/follow-builders): styled digests, tagged tweets, builder cards |
| [human-review](skills/human-review/SKILL.md) | Browser review loop for HTML/Markdown — upstream: [petergyang/human-review](https://github.com/petergyang/human-review) |

## Also in this repo

| Path | What |
|---|---|
| [output-styles/ELI5.md](output-styles/ELI5.md) | Output style: fried-brain mode — small words, short sentences, 2 options max |
| [learning/ai-infra-layers.html](learning/ai-infra-layers.html) | Learning page: AI infrastructure stack — where AWS engineers work vs. what SGLang solves |

## How it works

A skill is just a markdown file with:
- A **catalog** of options the agent can match against your brief
- **Rules** for what to preserve vs. replace
- An **output contract** the agent must follow

No SDK, no API keys, no runtime. The agent reads the skill and executes.

## Usage

1. Drop a `SKILL.md` into your agent's skills directory (Claude Code: `~/.claude/skills/<name>/`)
2. The agent discovers it automatically and invokes it when your prompt matches the skill's trigger
3. Or invoke explicitly: `/slide-deck "build me a quarterly review deck"`

## Contributing

Each skill lives in `skills/<name>/SKILL.md`. To add one:

1. Write it as a self-contained markdown file — no external dependencies, no hardcoded local paths
2. If the skill wraps an external library, document how the agent fetches it at runtime, and record its upstream in the frontmatter (`source:`, plus `cli-version-checked:` as the drift baseline — see [human-review](skills/human-review/SKILL.md))
3. Use the [writing-for-agents](https://github.com/mattpocock/agent-skills) principles: clear completion criteria, leading words, progressive disclosure
