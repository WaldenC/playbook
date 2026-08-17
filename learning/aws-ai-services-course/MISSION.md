# Mission: AWS Bedrock, SageMaker & UltraServers

## Why
When AWS announcements, docs, or job posts mention Bedrock, SageMaker AI, or UltraServers, the user wants to understand exactly what is being said and why it matters — no more skim-confusion. The concrete goal: read any AWS AI-infrastructure material and place it correctly, with real mechanics behind the marketing words.

## Success looks like
- Explain in 2-3 sentences what each of the three services sells to customers
- Trace one Bedrock request end to end (router → guardrail → cache → model → stream)
- Explain why a SageMaker request is slow when it's cold, and the fixes AWS built
- Describe what's inside an UltraServer and why it has no CUDA
- Map any SDE daily problem on these teams to one of the five ghosts (cold start, scale, packing, crash, scarcity)
- Pick the right service for a given scenario in one breath

## Constraints
- Lessons are small HTML files, opened locally in a browser
- Light theme only; vermillion accent (#D94F30) to match the ai-infra-layers page
- English language
- Facts must trace to sources in RESOURCES.md — never invented

## Out of scope
- Interview prep and talking points (deliberately dropped 2026-08-16)
- Hands-on AWS console usage, building real apps on these services
- CUDA/NVIDIA internals and ML theory
