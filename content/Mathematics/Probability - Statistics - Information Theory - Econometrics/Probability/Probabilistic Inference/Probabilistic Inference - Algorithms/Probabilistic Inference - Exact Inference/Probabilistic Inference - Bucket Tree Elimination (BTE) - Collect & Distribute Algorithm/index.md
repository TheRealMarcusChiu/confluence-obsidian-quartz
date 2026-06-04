---
title: "Probabilistic Inference - Bucket Tree Elimination (BTE) - Collect & Distribute Algorithm"
created: 2021-09-13T05:28:24.966-05:00
modified: 2021-12-11T05:19:28.701-06:00
parent: "[[Probabilistic Inference - Exact Inference]]"
children: []
---
> [!expand]- probabilistic inference recap
> ![[Probabilistic Inference#^excerpt]]

<strong>Bucket Tree Elimination (BTE) - Collect & Distribute Algorithm</strong>
- is an extension of a specific [[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)|BE/VE Algorithm]] called 𝐵𝐸-𝑏𝑒𝑙 algorithm, where a node is chosen as root, messages start at leaves passing it up to the root, and then messages are sent back down to leaves
- since BE/VE Algorithm induces a [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|cluster tree]] on which BE/VE Algorithm is performed, BTE is also a type of [[Probabilistic Inference - Message Passing - Belief Propagation - Sum-Product Algorithm|belief propagation algorithm]]

The 𝐵𝐸-𝑏𝑒𝑙 algorithm is designed to compute the probability of 𝐏(𝑄<sub>𝑖</sub>|𝐄=𝑒), in other words, the belief of 𝑄<sub>𝑖</sub>. It is often desirable to also compute the belief query for each and every variable in the network: 𝐏(𝑄<sub>1</sub>|𝐄=𝑒), ..., 𝐏(𝑄<sub>𝑖-1</sub>|𝐄=𝑒), 𝐏(𝑄<sub>𝑖+1</sub>|𝐄=𝑒), ..., 𝐏(𝑄<sub>𝑛</sub>|𝐄=𝑒). A brute-force approach will require running 𝐵𝐸-𝑏𝑒𝑙 algorithm 𝑛 times, one for each variable. We will show next that this is unnecessary. By viewing bucket-elimination as a [[Probabilistic Inference - Message Passing - Belief Propagation - Sum-Product Algorithm|message passing algorithm]] along a rooted bucket tree, we can augment it with a second message passing phase in the opposite direction, from root to leaves, and thus every belief query would be computed
# From Bucket Elimination to Bucket Tree Elimination

> [!expand]- Click here to expand...
> consider the Bayesian Network below
>
> ![[Probabilistic Inference - Bucket Tree Elimination (BTE) - Collect & Distribute Algorithm/sample-bayesian-network.png|301]]
> ###### Compute Belief in Variable 𝐴
>
> we would like to compute the probabilistic query 𝐏(𝐴|𝐄=𝐞) where:
> - 𝐴 is a single variable denoting the season
> - 𝐄=𝐞 is a set of observed variables assigned with values. we call 𝐄=𝐞 evidence
>
> Figure a shows the process of 𝐵𝐸-𝑏𝑒𝑙 with:
> - buckets with ordering 𝑑 = {𝐴, 𝐵, 𝐶, 𝐷, 𝐹, 𝐺}
> - 𝜆 messages passed by 𝐵𝐸 from top to bottom
>
> Figure b depicts the same computation as message-passing along a tree which we will refer to as a bucket tree
>
> ![[Probabilistic Inference - Bucket Tree Elimination (BTE) - Collect & Distribute Algorithm/bucket-elimination-example.png|350]]
>
> at the termination of 𝐵𝐸-𝑏𝑒𝑙 both 𝐏(𝐴, 𝐄=𝐞) and 𝐏(𝐄=𝐞) are computed, thus belief in 𝐴 given 𝐄=𝐞 is known via Bayes Rule. 𝐏(𝐴 | 𝐄=𝐞) = 𝐏(𝐴, 𝐄=𝐞) / 𝐏(𝐄=𝐞)
> ###### Compute Belief in Variable 𝐷
>
> Now, what if we want to compute 𝐏(𝐷 | 𝐄=𝐞)? We could restart the algorithm using some new arbitrary ordering whose first variable is 𝐷, such as {𝐷, 𝐵, 𝐴, 𝐶, 𝐹, 𝐺}. But rather than doing all the computations from scratch, we can take the existing bucket tree created from the previous computation and reorient the edges to make 𝐷 the root of the tree. Reorienting the tree so that 𝐷 is the root, requires reversing only 2 edges, (𝐵, 𝐷) and (𝐴, 𝐵), suggesting that we only need to recompute messages from the node 𝐴 to 𝐵 and from 𝐵 to 𝐷. By definition, we can compute the belief in 𝐷 by the expression
> - 𝐏(𝐷|𝐄=𝐞) = 𝛴<sub>𝑎∊𝐴</sub>𝛴<sub>𝑏∊𝐵</sub> <strong>\[</strong> 𝐏(𝐴=𝑎) · 𝐏(𝐵=𝑏|𝐴=𝑎) · 𝐏(𝐷=𝑑|𝐴=𝑎,𝐵=𝑏) · 𝜆<sub>𝐶→𝐵</sub>(𝑏) <strong>\] </strong>/ 𝐏(𝐄=𝐞)
>
> This computation can be carried also over the bucket tree, whose downward messages were already passed, in three steps:
> 1. the first executed in 𝑏𝑢𝑐𝑘𝑒𝑡<sub>𝐴</sub>, where the function 𝐏(𝐴) is moved to 𝑏𝑢𝑐𝑘𝑒𝑡<sub>𝐵</sub>
> 	1. 𝜋<sub>𝐴→𝐵</sub>(𝑎) = 𝐏(𝐴)
> 2. the second is executed by 𝑏𝑢𝑐𝑘𝑒𝑡<sub>𝐵</sub>, computing a function (a product) that is moved to 𝑏𝑢𝑐𝑘𝑒𝑡<sub>𝐷</sub>
> 	1. 𝜋<sub>𝐵→𝐷</sub>(𝑎, 𝑏) = 𝐏(𝑏|𝑎) · 𝜋<sub>𝐴→𝐵</sub>(𝑎) · 𝜆<sub>𝐶→𝐵</sub>(𝑎, 𝑏)
> 3. the final computation is carried in 𝑏𝑢𝑐𝑘𝑒𝑡<sub>𝐷</sub>. The belief 𝐏(𝐷 | 𝐄=𝐞) can be computed in 𝑏𝑢𝑐𝑘𝑒𝑡<sub>𝐷</sub>
> 	1. 𝐏(𝐷|𝐄=𝐞) =<strong> 𝛴<sub>𝑎∊𝐴</sub>𝛴<sub>𝑏∊𝐵</sub> <strong>\[</strong></strong> 𝐏(𝐷=𝑑|𝐴=𝑎,𝐵=𝑏) · 𝜋<sub>𝐵→𝐷</sub>(𝑎, 𝑏) <strong>\] </strong>/ 𝐏(𝐄=𝐞)
>
> ###### Compute Belief in ALL Variables
>
> The example above can be generalized. We can compute the belief for every variable in 2 message passes along the bucket tree:
> 1. executing 𝐵𝐸-𝑏𝑒𝑙 with a variable as root
> 2. do second message passing from the root to the leaves along the bucket tree
>
> Then at termination, the belief for each variable can be computed locally, in each bucket, consulting only the functions in its own bucket
>
> Given an ordering of the variables, the first step of the algorithm generates the bucket tree by partitioning the functions into buckets and connecting the buckets into a tree. The subsequent top-down phase is identical to general bucket elimination. The bottom-up messages are defined as follows. The messages sent from the root up to the leaves will be denoted by 𝜋. The message from 𝐵<sub>𝑗</sub> to a child 𝐵<sub>𝑖</sub> is generated by multiplying the bucket’s function 𝑗 by all the 𝜋 message from its parent bucket and all the 𝜆 messages from its other child buckets and marginalizing (e.g. summing) over the eliminator from 𝐵<sub>𝑗</sub> to 𝐵<sub>𝑖</sub>
>
> we see that
> - downward messages (normal 𝐵𝐸 algorithm) are generated by eliminating a single variable
> - upward messages may be generated by eliminating 0, 1, or more variables
>
> when 𝐵𝑇𝐸 terminates, each output bucket 𝐵<sub>𝑖</sub> contains:
> - 𝜋 message it received from parent 𝐵<sub>𝑗</sub>
> - its own function 𝐹<sub>𝑖</sub>
> - 𝜆 messages it received from each child 𝐵<sub>𝑘</sub>
>
> ###### Definitions
> - <strong>bucket tree</strong> - the bucket tree has the buckets denoted {𝐵<sub>1</sub>, ..., 𝐵<sub>𝑛</sub>} as its nodes. Each bucket contains a set of functions and a set of variables. The functions are those placed in the bucket according to the bucket partitioning rule where 𝜓<sub>𝑖</sub> is their product. The set of variables in 𝐵<sub>𝑖</sub>, denoted 𝑠𝑐𝑜𝑝𝑒(𝐵<sub>𝑖</sub>), is 𝑋<sub>𝑖</sub> and all its parents in the [[(Ordered Graph - Width) - (Induced Graph - Induced Width) - (Conditional Induced Graph - Conditional Induced Width)|induced-graph]] (𝐆\*, 𝑑). Each vertex 𝐵<sub>𝑖</sub> points to 𝐵<sub>𝑗</sub> (or, 𝐵<sub>𝑗</sub> is the parent of 𝐵<sub>𝑖</sub>) if 𝑋<sub>𝑗</sub> is the closest neighbor of 𝑋<sub>𝑖</sub>that appear before it in (𝐆\*, 𝑑)
> - <strong>scope</strong> - If 𝐵<sub>𝑗</sub> is the parent of 𝐵<sub>𝑖</sub> in the bucket tree, then the separator of 𝑋<sub>𝑖</sub> and 𝑋<sub>𝑗</sub>, 𝑠𝑒𝑝(𝐵<sub>𝑖</sub>, 𝐵<sub>𝑗</sub>) = 𝑠𝑐𝑜𝑝𝑒(𝐵<sub>𝑖</sub>) ∩ 𝑠𝑐𝑜𝑝𝑒(𝐵<sub>𝑗</sub>)
> - <strong>eliminator</strong> - Given a directed edge (𝐵<sub>𝑖</sub>, 𝐵<sub>𝑗</sub>) in the bucket tree, 𝑒𝑙𝑖𝑚(𝑖, 𝑗) is the set of variables in 𝐵<sub>𝑖</sub> and not in 𝐵<sub>𝑗</sub>, namely 𝑒𝑙𝑖𝑚(𝐵<sub>𝑖</sub>, 𝐵<sub>𝑗</sub>) = 𝑠𝑐𝑜𝑝𝑒(𝐵<sub>𝑖</sub>) - 𝑠𝑒𝑝(𝐵<sub>𝑖</sub>, 𝐵<sub>𝑗</sub>). We will call this set "the eliminator from 𝐵<sub>𝑖</sub> to 𝐵<sub>𝑗</sub>"
>
> ###### Example BTE
>
> the image below shows the messages passed:
> - 𝜆 are messages passed in 𝐵𝐸-𝑏𝑒𝑙
> - 𝜋 are messages passed in step 2
>
> ![[Probabilistic Inference - Bucket Tree Elimination (BTE) - Collect & Distribute Algorithm/bucket-tree-algorithm-propagation-of-messages.png|350]]
>
> the 𝜋 functions in the bottom-up phase are computed as follows:
> - 𝜋<sub>𝐴→𝐵</sub>(𝑎) = 𝐏(𝐴)
> - 𝜋<sub>𝐵→𝐶</sub>(𝑐, 𝑎) = 𝐏(𝑏|𝑎) · 𝜋<sub>𝐴→𝐵</sub>(𝑎) · 𝜆<sub>𝐷→𝐵</sub>(𝑎, 𝑏)
> - 𝜋<sub>𝐵→𝐷</sub>(𝑎, 𝑏) = 𝐏(𝑏|𝑎) · 𝜋<sub>𝐴→𝐵</sub>(𝑎) · 𝜆<sub>𝐶→𝐵</sub>(𝑎, 𝑏)
> - 𝜋<sub>𝐶→𝐹</sub>(𝑎, 𝑏) = 𝛴<sub>𝑎∊𝐴</sub>𝐏(𝑐|𝑎) · 𝜋<sub>𝐵→𝐶</sub>(𝑐, 𝑎) · 𝜆<sub>𝐹→𝐶</sub>(𝑏, 𝑐)
>
> the image below shows the resulting output bucket tree
>
> ![[Probabilistic Inference - Bucket Tree Elimination (BTE) - Collect & Distribute Algorithm/bucket-tree-algorithm-augmented-output-bucket-tree.png|400]]
# BTE - Algorithm (Explanation 1)

> [!expand]- Click here to expand...
> - Construct a [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|tree decomposition]] 𝑇
> - Initialize the tree decomposition as in [[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)|bucket elimination]]
> - Select an arbitrary node of 𝑇 as root
> - Pass messages from leaves to root (upward pass)
> - Pass messages from root to leaves (downward pass)
>
> ###### Pseudocode
> ![[Probabilistic Inference - Bucket Tree Elimination (BTE) - Collect & Distribute Algorithm/bucket-tree-elimination-algorithm.png|400]]
# BTE - Algorithm (Explanation 2)

> [!expand]- Click here to expand...
> ###### input
> - graphical model 𝓜 = ⟨𝐗,𝐃,𝐒,𝐅,𝐂⟩
> - ordering 𝑑
> - evidence 𝐄=𝐞
>
> an ordering 𝑑 and a corresponding bucket-tree structure, in which for each node 𝑋<sub>𝑖</sub>, its bucket 𝐵<sub>𝑖</sub> and its neighboring buckets are well defined
> ###### output
>
> assume functions 𝐅 have been instantiated with evidence 𝐄=𝐞
>
> for bucket 𝐵<sub>𝑖</sub> do:
> ----for each neighbor bucket 𝐵<sub>𝑗</sub> do:
> --------once all messages from all other neighbors were received, do
> ------------compute and send to 𝐵𝑗 the message (𝜆<sub>𝑖→𝑗</sub>):
> ----------------𝜆<sub>𝑖→𝑗</sub> ⟸ 𝛴<sub>𝑒𝑙𝑖𝑚(𝑖,𝑗)</sub> \[𝜓<sub>𝑖</sub>·(𝜋<sub>𝑘≠𝑗</sub>𝜆<sub>𝑘→𝑖</sub>)\]
> ----output: augmented buckets 𝐵'<sub>1</sub>, ..., 𝐵'<sub>𝑛</sub>, where each 𝐵'<sub>𝑖</sub> contains the original bucket functions and the 𝜆 messages it received
# BTE - Complexity

> [!expand]- Click here to expand...
> Given a [[Graphical Models|Graphical Model]] ℳ = ⟨<strong>𝐗</strong>, <strong>𝐃</strong>, 𝐒, <strong>𝐅</strong>, <strong>𝐂</strong>⟩ whose [[Hypergraphs - Primal Graphs - Dual Graphs - Cluster Graphs - Cluster Trees - Factor Graphs|primal]]/[[Moral Graph - Moralization|moral]] graph is 𝐆, let:
> - 𝑤(𝑑) be its [[(Ordered Graph - Width) - (Induced Graph - Induced Width) - (Conditional Induced Graph - Conditional Induced Width)|induced width]] of 𝐆 along ordering 𝑑
> - 𝑘 the maximum domain size of 𝐷<sub>𝑖</sub> in 𝐃
> - 𝑟 be the number of functions in 𝐅
> - 𝑛 be the number of variables in 𝐗
> - 𝑑𝑒𝑔 is the maximum degree of a node in the bucket tree
>
> [[Growth／Asymptotic Complexity／Analysis (Resource - Time／Space／Memory Complexity)|time complexity]] is 𝑂(𝑟 · 𝑑𝑒𝑔 · 𝑘<sup>𝑤(𝑑)+1</sup>)
> [[Growth／Asymptotic Complexity／Analysis (Resource - Time／Space／Memory Complexity)|space complexity]] is 𝑂(𝑛 · 𝑘<sup>𝑤(𝑑)</sup>)
> ###### Complexity Given Evidence
>
> the complexity can be further simplified by including observed/evidence variables into the picture
>
> 𝑤(𝑑) is replaced with 𝑤<sub>𝐄</sub>(𝑑), where 𝑤<sub>𝐄</sub>(𝑑) is the [[(Ordered Graph - Width) - (Induced Graph - Induced Width) - (Conditional Induced Graph - Conditional Induced Width)|conditional induced width]] of the [[(Ordered Graph - Width) - (Induced Graph - Induced Width) - (Conditional Induced Graph - Conditional Induced Width)|ordered graph]] 𝐆 along 𝑑, conditioned on the evidence 𝐄.
>
> this statement is always true: 𝑤<sub>𝐄</sub>(𝑑) ≤ 𝑤(𝑑)
>
> [[Growth／Asymptotic Complexity／Analysis (Resource - Time／Space／Memory Complexity)|time complexity]] is 𝑂(𝑟 · 𝑑𝑒𝑔 · 𝑘<sup>𝑤<sub>𝐄</sub>(𝑑)+1</sup>)
> [[Growth／Asymptotic Complexity／Analysis (Resource - Time／Space／Memory Complexity)|space complexity]] is 𝑂(𝑛 · 𝑘<sup>𝑤<sub>𝐄</sub>(𝑑)</sup>)
