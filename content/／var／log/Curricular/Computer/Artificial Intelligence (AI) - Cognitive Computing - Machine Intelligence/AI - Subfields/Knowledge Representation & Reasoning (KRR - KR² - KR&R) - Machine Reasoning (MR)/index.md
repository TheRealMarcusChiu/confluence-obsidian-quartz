---
title: "Knowledge Representation & Reasoning (KRR - KR² - KR&R) - Machine Reasoning (MR)"
created: 2019-03-15T01:38:08.508-05:00
modified: 2021-08-28T17:10:40.235-05:00
parent: "[[AI - Subfields]]"
children:
  - "[[Knowledge Graphs (KG)]]"
---
<font style="color: rgb(128,128,128);"><em>under the hood our brains share one remarkable skill: the ability to reason about how one thing relates to another</em></font>

<strong>Knowledge Representation & Reasoning (KRR)</strong> is the field of [[Artificial Intelligence (AI) - Cognitive Computing - Machine Intelligence|artificial intelligence]]
- <strong>Knowledge Representation</strong> - representing knowledge about the world into computer-sensible format
- <strong>Knowledge Reasoning</strong> or <strong>Machine Reasoning (MR)</strong>
	- algebraically manipulating previously acquired knowledge in order to answer a new question
	- generating new [[Knowledge|knowledge]] from previously acquired knowledge by applying [[Reasoning (Argument)|reasoning]] or more specifically [[Logical Reasoning (Deductive／Deduction - Inductive／Induction - Abductive／Abduction - Analogical)|logical reasoning techniques]] (e.g. deduction, induction, etc)

# KRR/MR - MR is Hard

There is a hard problem with creating machine that understand:
- under the hood our brains share one remarkable skill: the ability to reason about how one thing relates to another

For example, I could know a sequence of mathematical steps in order to get the final result. But knowing the steps versus understanding why the steps are the way it is, is a different level. Therefore, for humans it is very easy to copy and paste, apply schema solution by plugging the problem inputs into schema. However, it takes time to understand why the schema/model works the way it it. And it is an imperative in order to build upon and improve the schema model.

For Machine to do the latter is beyond my understanding. How do we make a machine understand the latter? Having it apply the problem's values into the schema model's input variables is quite easy and can be done much faster than a human. However, machine understand what it is doing is [[P - NP - NPC - NPI - NPO - NPH|NP-Hard]].
- 1980's not learn what a 1, 2, or 3 is but learns the differences between a 1, 2, and 3
- how words compare in context to others

Do computers think? Well do submarines swim? Do airplanes fly like a bird? What it is we borrow techniques
# KRR/MR - System Approaches

Reasoning systems come in different approaches that vary in expressive power, in predictive abilities as well as computational requirements. Léon Bottou classifies seven types of approaches:
- [[First-Order Logic - Predicate Logic - Predicate Calculus - Quantification Theory|First Order Logic]] Reasoning
- Probabilistic Reasoning
- Causal Reasoning
- Newtonian Mechanics
- Spatial Reasoning
- Social Reasoning
- Non-Falsifiable Reasoning

# KRR/MR - System Components

2 components of reasoning systems (aka [[Formal Logical Systems／Languages or Logic Classes|Formal Logical Systems/Languages or Logic Classes]]):
- <strong>knowledge base</strong> (knowledge representation) - a collection of [[Knowledge|knowledge]] (e.g. facts, rules and relationships) about a specific domain of interest represented in symbolic form
- <strong>inference engine</strong> (knowledge [[Reasoning (Argument)|reasoning]]) - describes how to algebraically manipulate and combine these symbols. thus producing new knowledge

# KRR/MR - Principles
- <strong>representational adequacy</strong> - ability to represent knowledge of a domain
- <strong>inferential adequacy</strong> - ability to manipulate old knowledge and derive new knowledge
- <strong>inferential efficiency</strong> - ability to derive new knowledge accurately and fast
- <strong>acquisitional efficiency</strong> - ability to acquire new information easily - and merge it with existing information

# KRR/MR - Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# KRR/MR - Resources
- [AI is About Machine Reasoning – or When Machine Learning is Just a Fancy Plugin](http://www.reasoning.world/ai-is-about-machine-reasoning-or-when-machine-learning-is-just-a-fancy-plugin/)
- [From Machine Learning to Machine Reasoning](https://arxiv.org/pdf/1102.1808.pdf) - Léon Bottou
- [How We Reason by Philip Johnson-Laird](https://www.amazon.com/How-We-Reason-Philip-Johnson-Laird/dp/0199551332)
- [Rebooting AI: Building Artificial Intelligence We Can Trust](https://www.amazon.com/Rebooting-AI-Building-Artificial-Intelligence-ebook/dp/B07MYLGQLB)
- [Thinking, Fast and Slow](https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555)
- [[Knowledge Representation, Reasoning, and the Design of Intelligent Agents - The Answer-Set Programming Approach - Summaries]]
- [[AI Chapter 12 - Knowledge Representation]]

# KRR/MR - Algorithms
- [Relational Networks](https://arxiv.org/pdf/1706.01427.pdf) - DeepMind
