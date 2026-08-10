# Playbook

A collection of agent skills — reusable playbooks that teach any coding agent how to perform specific tasks. Agent-agnostic, model-agnostic, framework-agnostic.

Each skill is a self-contained markdown file that an agent reads as its operating manual: what to do, what to preserve, what never to touch.

## Skills

| Skill | Description |
|---|---|
| [slide-deck](skills/slide-deck/SKILL.md) | Build styled single-page HTML slide decks from 34 pre-built templates |

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
2. If the skill wraps an external library, document how the agent fetches it at runtime
3. Use the [writing-for-agents](https://github.com/mattpocock/agent-skills) principles: clear completion criteria, leading words, progressive disclosure
