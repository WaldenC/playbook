# AWS AI Services Resources

## Knowledge — Bedrock

- [AWS Bedrock docs — model cards](https://docs.aws.amazon.com/bedrock/latest/userguide/model-cards-anthropic.html)
  Official model inventory (Claude, Nova, Llama, OpenAI, more). Use for: catalog facts, context windows, per-model capabilities.
- [AWS ML blog — prompt caching best practices](https://aws.amazon.com/blogs/machine-learning/effectively-use-prompt-caching-on-amazon-bedrock/)
  How cachePoint works and when it pays. Use for: the prompt-journey lesson, cache economics.
- [AWS Bedrock docs — runtime metrics](https://docs.aws.amazon.com/bedrock/latest/userguide/monitoring-runtime-metrics.md)
  TTFT and invocation latency as first-class metrics. Use for: the two numbers SDEs guard.
- [AWS ML blog — latency-optimized inference guide](https://aws.amazon.com/blogs/machine-learning/optimizing-ai-responsiveness-a-practical-guide-to-amazon-bedrock-latency-optimized-inference/)
  Per-request fast path. Use for: performanceConfig mechanics.
- [AWS ML blog — OpenAI models GA on Bedrock](https://aws.amazon.com/blogs/machine-learning/openai-models-and-codex-on-amazon-bedrock-are-now-generally-available/)
  The June 2026 GA. Use for: catalog-up-to-date facts.
- [AWS ML blog — GraphRAG GA](https://aws.amazon.com/blogs/machine-learning/announcing-general-availability-of-amazon-bedrock-knowledge-bases-graphrag-with-amazon-neptune-analytics/)
  Knowledge Bases beyond vector search. Use for: the RAG/Agents lesson.
- [AWS decision guide — Bedrock or SageMaker?](https://docs.aws.amazon.com/decision-guides/latest/bedrock-or-sagemaker/bedrock-or-sagemaker.pdf)
  AWS's own selection guidance. Use for: the decision-rules lesson.
- [Amazon news — AWS AI Q1 2026 earnings](https://aboutamazon.com/news/company-news/amazon-ceo-andy-jassy-aws-ai-q1-2026-earnings)
  Run-rate and token-volume claims. Use for: scale facts.
- [Amazon Jobs — SDE, AWS Mantle](https://www.amazon.jobs/en/jobs/10489921/senior-software-development-engineer-aws-mantle)
  What Bedrock's inference-engine SDEs are hired to do. Use for: SDE-daily-problems framing.
- [cloudlooking.glass — AWS outage Oct 20 2025](https://cloudlooking.glass/outages/aws-20251020.html)
  The DNS cascade that took Converse down ~2.5 h. Use for: fault-tolerance lessons.

## Knowledge — SageMaker

- [AWS docs — what is SageMaker AI](https://docs.aws.amazon.com/next-generation-sagemaker/latest/userguide/what-is-sagemaker.html)
  The platform definition post-rename. Use for: the platform-map lesson.
- [AWS ML blog — Fast Model Loader part 1](https://aws.amazon.com/cn/blogs/machine-learning/introducing-fast-model-loader-in-sagemaker-inference-accelerate-autoscaling-for-your-large-language-models-llms-part-1/)
  8 MB shards, DMA, the 15x claim. Use for: the cold-start lesson.
- [AWS what's new — container image caching](https://aws.amazon.com/cn/about-aws/whats-new/2026/06/sagemakerai-inf-scale-out-time/)
  June 2026 image-cache scale-out speedup. Use for: cold-start mitigations.
- [AWS docs — Managed Spot Training](https://docs.aws.amazon.com/sagemaker/latest/dg/model-managed-spot-training.html)
  Spot semantics, 2-minute warning, MaxWaitTimeInSeconds. Use for: the spot lesson.
- [AWS ML blog — Cinnamon AI spot savings](https://aws.amazon.com/cn/blogs/machine-learning/cinnamon-ai-saves-70-on-ml-model-training-costs-with-amazon-sagemaker-managed-spot-training/)
  Real-world spot outcomes. Use for: spot economics.
- [AWS blog — checkpointless + elastic training](https://aws.amazon.com/blogs/china/introducing-checkpointless-and-elastic-training-on-amazon-sagemaker-hyperpod/)
  Dec 2025 HyperPod features. Use for: fault-tolerance lesson.
- [AWS ML blog — tiered KV cache + intelligent routing](https://aihub.hkuspace.hku.hk/2025/11/27/managed-tiered-kv-cache-and-intelligent-routing-for-amazon-sagemaker-hyperpod/)
  Packing-layer optimizations. Use for: the packing lesson.
- [AWS SageMaker pricing](https://aws.amazon.com/sagemaker/pricing/)
  Current list prices. Use for: any pricing statement.

## Knowledge — UltraServers

- [AWS EC2 UltraServers product page](https://aws.amazon.com/ec2/ultraservers/)
  What the product is, in AWS's words. Use for: the box lesson.
- [AWS what's new — Trn3 UltraServers GA](https://aws.amazon.com/about-aws/whats-new/2025/12/amazon-ec2-trn3-ultraservers/)
  Dec 2, 2025 GA. Use for: Trn3 specs.
- [Amazon news — Trainium3 UltraServers](https://www.aboutamazon.com/news/aws/trainium-3-ultraserver-faster-ai-training-lower-cost)
  Performance-per-watt and tokens-per-megawatt claims. Use for: efficiency metrics.
- [Neuron docs — Trn2 architecture](https://awsdocs-neuron.readthedocs-hosted.com/en/v2.31.0/about-neuron/arch/neuron-hardware/trn2-arch.html)
  Chip layout, NeuronLink-v3 numbers, instance specs. Use for: hardware facts.
- [Neuron docs — collective communications](https://awsdocs-neuron.readthedocs-hosted.com/en/v2.28.1/neuron-runtime/about/collectives.html)
  How the chips talk. Use for: interconnect lesson.
- [Amazon news — Project Rainier](https://www.aboutamazon.com/news/aws/aws-project-rainier-ai-trainium-chips-compute-cluster)
  The ~500K-chip cluster, mostly inference. Use for: the 2025 flip.
- [Datacenter Dynamics — Rainier activation](https://www.datacenterdynamics.com/en/news/aws-activates-project-rainier-cluster-of-nearly-500000-trainium2-chips/)
  Third-party confirmation of scale. Use for: scale facts.
- [Emergent Mind — AWS Trainium2 paper summary](https://www.emergentmind.com/topics/aws-trainium2)
  NDTL fault-tolerance numbers (77.8% → 98.8%). Use for: fault-tolerance lesson.
- [AI Wiki — AWS Trainium2](https://aiwiki.ai/wiki/aws_trainium2)
  Pricing, capacity, customer list (cross-checked). Use for: pricing anomaly.
- [AWS EC2 Capacity Blocks](https://aws.amazon.com/ec2/capacityblocks/)
  Reservation mechanics. Use for: capacity lesson.

## Wisdom (Communities)

- [AWS re:Post](https://repost.aws/)
  Official AWS Q&A, answered by practitioners and AWS staff. Use for: specific troubleshooting questions.
- [r/aws](https://reddit.com/r/aws)
  Practitioners sharing real-world experience. Use for: reality checks on claims found in docs.
- [AWS News blog](https://aws.amazon.com/new/)
  Primary announcement stream — where new features land first. Use for: staying current between sessions.

## Gaps

- Trn2/Trn3 pricing is volatile and third-party trackers disagree with each other; treat any price as dated — re-check AWS pricing pages before citing.
- SDE daily-work detail comes from job postings and incident reports; no first-party engineering blog covers these internals. Flagged so future sessions hunt for better sources rather than re-derive the same picture.
- Community preferences: none stated by the user yet.
