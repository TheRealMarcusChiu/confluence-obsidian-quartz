---
title: "Graphical Models"
created: 2021-09-13T05:25:24.598-05:00
modified: 2021-12-11T05:31:19.007-06:00
parent: "[[Graph Theory - Terminology]]"
children:
  - "[[(Ordered Graph - Width) - (Induced Graph - Induced Width) - (Conditional Induced Graph - Conditional Induced Width)]]"
  - "[[Ancestral Graph]]"
  - "[[Chordal Graphs]]"
  - "[[Cutset]]"
  - "[[Hypergraphs - Primal Graphs - Dual Graphs - Cluster Graphs - Cluster Trees - Factor Graphs]]"
  - "[[Tree Width vs Induced Width]]"
---
<strong>Graphical Models</strong>
- are graphs used to model a specific problem/domain in which one can answer domain-specific queries and/or extract information from the graphical model itself
- the structure can capture the dependencies and independencies in the knowledge base

# Formal Definition
````excerpt
A [[Graphical Models|graphical model]] 𝒢 is a tuple 𝒢 = ⟨<strong>𝐗</strong>, <strong>𝐃</strong>, 𝐒, <strong>𝐅</strong>, <strong>𝐂</strong>⟩ where:
- 𝐗 = {𝑋<sub>1</sub>, ..., 𝑋<font style="color: rgb(128,0,0);"><sub>𝑛</sub></font>} set of ordered variables
- 𝐃 = {𝐷<sub>1</sub>, ..., 𝐷<font style="color: rgb(128,0,0);"><sub>𝑛</sub></font>} set of corresponding domains of each variable 𝑋<sub>𝑖</sub> (e.g. if 𝑋<sub>1</sub>is a boolean variable then 𝐷<sub>1</sub>= {true, false}). The size of each 𝐷<sub>𝑖</sub>corresponds to the cardinality of variable 𝑋<sub>𝑖</sub>
- 𝐒 = {𝑆<sub>1</sub>, ..., 𝑆<font style="color: rgb(0,128,128);"><sub>𝑚</sub></font>} set of variable scopes, where each variable scope 𝑆<sub>𝑖</sub>is a subset of 𝐗 (i.e. 𝑆<sub>𝑖</sub> ⊆ 𝐗)
- <strong>𝐅</strong> = {𝐹<sub>1</sub>, ..., 𝐹<font style="color: rgb(0,128,128);"><sub>𝑚</sub></font>} set of factors/functions, where each factor/function 𝐹<sub>𝑖</sub> is defined over its corresponding variable scope 𝑆<sub>𝑖</sub>and maps any assignment over its scope to a real value
	- in context of [[Bayesian Networks (BN)|Bayesian Networks]], <strong>𝐅</strong> = set of [[Conditional Probability Table (CPT)|conditional probability tables]]
	- in context of [[Markov Networks／Nets - Markov Random Fields (MRF)|Markov Networks]], <strong>𝐅 </strong>= set of [[MN／MRF - Potential Functions (𝜙)|potential functions / factors]]
	- global function - is a function whose scope includes all variables (i.e. 𝑆<sub>𝑖</sub> = <strong>𝐗</strong>)
	- local functions - is a function whose scope is a proper subset of variables (i.e. 𝑆<sub>𝑖</sub><sub></sub>⊂ <strong>𝐗</strong>)
- <strong>𝐂</strong> is a set of combination operators which defines how functions are combined. common combination operators are:
	- summation operator (𝛴)
	- multiplication operator (𝛱)
	- AND operator (∧) - for Boolean functions
	- relational join operator (⨝) - when the functions are relation
	- marginalization operator - for reasoning queries
	- max operator - e.g. = argmax<sub>𝑦</sub>\[ 𝐹<sub>𝑖</sub>(𝑥,𝑦) \] = 𝐹<sub>𝑗</sub>(𝑥) where 𝐹<sub>𝑗</sub>is a new function with scope over variable 𝑥

the set of local functions can be combined in a variety of ways (e.g. combination operators) to generate a new local function or even a global function
````
^excerpt

# Problem Domains that Uses Graphical Models

```merge-table
{
  "rows": [
    [
      {
        "content": "Problem Domain & Query Types",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Graphical Model Types",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "modeling costs\n\nfinding optimal solution given costs:\n- minimum\n- maximum",
      "Cost Networks - defined by costs functions\n\n[[Mathematical Programming／Optimization|Mathematical Programming/Optimization]]"
    ],
    [
      "modeling constraints\n\nfinding a solution given constraints:\n- constraint satisfaction\n- [[Propositional Logic - Propositional Calculus - Sentential Logic - Statement Logic|propositional]] satisfaction (SAT)",
      "Constraint Networks ([[Constraint Satisfaction Problems (CSP)]]) - defined by relations of allowed tuples"
    ],
    [
      "modeling probabilities:\n- [[Maximum Likelihood Estimation (MLE)]] queries\n- finding the most probable assignment\n- updating the posterior probabilities given evidence",
      "Probabilistic Networks ([[Probabilistic Graphical Models (PGM) - Structured Probabilistic Models (SPM)]]) - defined by conditional probability tables over a subset of variables or by a set of potentials\n- probabilistic directed acyclic graphs - such as [[Bayesian Networks (BN)]]\n- probabilistic undirected graphs - such as [[Markov Networks／Nets - Markov Random Fields (MRF)|Markov Random Field (MRF) - Markov Network]]"
    ],
    [
      "modeling knowledge base:\n- [[Propositional Logic - Propositional Calculus - Sentential Logic - Statement Logic|propositional]] queries\n- [[First-Order Logic - Predicate Logic - Predicate Calculus - Quantification Theory|predicate]] queries",
      "- [[AI Chapter 12 - Knowledge Representation]]\n- [[Knowledge Representation, Reasoning, and the Design of Intelligent Agents - The Answer-Set Programming Approach - Summaries]]\n\t- [[Chapter 4 - Creating Knowledge Base]]"
    ],
    [
      "modeling linear inequalities",
      "..."
    ],
    [
      "modeling a mixture of:\n- probabilities\n- constraints\n- costs\n- knowledge base",
      "Mixed Networks - a graphical model with probabilistic information and deterministic constraints"
    ]
  ],
  "tableStyle": "width: 99.9067%;"
}
```
# Main Tasks For Using Graphical Models
1. building the graphical model that accurately describes the problem domain
2. extracting information or answering questions, schemes:
	- <strong>inference-based schemes</strong>
		- performs a [[Logical Reasoning (Deductive／Deduction - Inductive／Induction - Abductive／Abduction - Analogical)|deductive]] step repeatedly while maintaining a single view of the model. By doing this, inference-based algorithms augment the original model specification making it more explicit (i.e. less implicit)
		- are good at exploiting the independencies displayed by the underlying graphical model and in avoiding redundant computation
		- algorithm type:
			- exact inference
			- approximate inference
		- some example algorithms:
			- resolution
			- variable-elimination
			- join-tree clustering
		- have worst-case time guarantee which is exponential in the [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|treewidth]] of the graph. Unfortunately, any inference-based method that is time-exponential in the treewidth is also space exponential in the treewidth and therefore, not feasible for models that have large treewidth
	- <strong>search-based schemes</strong>
		- perform repeatedly a conditioning step, namely, fixing the value of a variable to a constant, and thus restrict the attention to a subproblem. Search methods are more naturally poised to exploit the internal structure of the functions themselves, namely, their local structure
		- search requires only an implicit, generative, specification of the functions (given in a procedural or functional form) while inference schemes often rely on an explicit tabular representation over the (discrete) variables. For these reasons search algorithms are the only choice available for models with large treewidth, large domains, and implicit representation
		- algorithm types:
			- [[AND／OR Search Spaces|AND/OR Search Space]]
			- [[OR Search Spaces|OR Search Space]]
	- <strong>search & inference schemes</strong>
		- when combined they enable improved performance by flexibly trading-off time and space
	- <strong>re-parameterization schemes</strong>
		- a type of inference-based scheme that induces an equivalent specification of the problem from which answers can be produced more easily

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
