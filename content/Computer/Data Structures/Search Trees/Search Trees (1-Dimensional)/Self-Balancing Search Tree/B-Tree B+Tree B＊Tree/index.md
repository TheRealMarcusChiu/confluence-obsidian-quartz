---
title: "B-Tree B+Tree B＊Tree"
created: 2019-12-09T11:47:28.566-06:00
modified: 2025-09-25T21:27:44.076-05:00
parent: "[[Self-Balancing Search Tree]]"
children: []
---
###### B-Tree, B+Tree, and B\*Tree
````excerpt
- are types of [[Self-Balancing Search Tree|self-balancing search trees]]
````
^excerpt

# Purpose

In most of the many self-balancing search trees (e.g. [AVL Trees](https://www.geeksforgeeks.org/avl-tree-set-1-insertion/), [[Red-Black Tree|Red-Black Trees]], etc), it is assumed that everything is in the main memory.

To understand the use of B-Trees, we must think of the huge amount of data that cannot fit in the main memory. When the number of keys is high, the data is read from the disk in the form of blocks. Disk access time is very high compared to main memory access time. The main idea of using B-Trees is to reduce the number of disk accesses. Most of the tree operations (search, insert, delete, max, min, ..etc ) require 𝑂(ℎ) disk accesses where ℎ is the height of the tree. B-tree is a fat tree. The height of B-Trees is kept low by putting the maximum possible keys in a B-Tree node. Generally, a B-Tree node size is kept equal to the disk block size. Since ℎ is low for B-Tree, total disk accesses for most of the operations are reduced significantly compared to balanced Binary Search Trees like AVL Tree, Red-Black Tree, etc
# B-Tree Properties
- all leaves are at the same level
- a B-Tree is defined by the term <em>minimum degree</em> ‘𝑡’. The value of 𝑡 depends upon disk block size
- every node except root must contain at least 𝑡-1 keys. The root may contain a minimum 1 key
- all nodes (including root) may contain at most 2𝑡 – 1 keys
- number of children of a node is equal to the number of keys in it plus 1
- all keys of a node are sorted in increasing order. The child between two keys 𝑘<sub>1</sub> and 𝑘<sub>2</sub> contains all keys in the range from 𝑘<sub>1</sub> and 𝑘<sub>2</sub>
- B-Tree grows and shrinks from the root which is unlike Binary Search Tree. Binary Search Trees grow downward and also shrink from downward
- [[Growth／Asymptotic Complexity／Analysis (Resource - Time／Space／Memory Complexity)|time complexity]] to search, insert and delete is 𝑂(𝑙𝑜𝑔 𝑛)

Unlike a binary tree, each node in a B-Tree can have more than 2 children. Each node can have up to 𝑚 children, where 𝑚 is called the tree’s “order”. To keep the tree mostly balanced, we also say nodes have to have at least 𝑚/2 children (rounded up).

Exceptions:
- Leaf nodes have 0 children
- The root node can have fewer than m children but must have at least 2
- If the root node is a leaf node (the only node), it still has 0 children

# B-Trees & B+Tree
![[B-Tree B+Tree B＊Tree/b-tree-vs-b-plus-tree.png|400]]

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "B-tree",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "B+ tree",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      "Pronounced",
      "“Bee Tree”",
      "“Bee Plus Tree”"
    ],
    [
      "Used to store",
      "Indexes",
      "Tables"
    ],
    [
      "Internal nodes store keys",
      "Yes",
      "Yes"
    ],
    [
      "Internal nodes store values",
      "Yes",
      "No"
    ],
    [
      "Number of children per node",
      "Less",
      "More"
    ],
    [
      "Internal nodes vs. leaf nodes",
      "Same structure",
      "Different structure"
    ]
  ],
  "tableStyle": "width: 49.8779%;"
}
```

Advantages of B+ trees:
- Because B+ trees don't have data associated with interior nodes, more keys can fit on a page of memory. Therefore, it will require fewer cache misses in order to access data that is on a leaf node.
- The leaf nodes of B+ trees are linked, so doing a full scan of all objects in a tree requires just one linear pass through all the leaf nodes. A B tree, on the other hand, would require a traversal of every level in the tree. This full-tree traversal will likely involve more cache misses than the linear traversal of B+ leaves.

Advantage of B trees:
- Because B trees contain data with each key, frequently accessed nodes can lie closer to the root, and therefore can be accessed more quickly.

# B\* Tree
B\* Tree is a variant of a B-tree that requires each internal node to be at least 2/3 full, rather than at least half full.

Thus the B\* trees are more compact compared to B+ trees. This is typically achieved by sharing data points between siblings or neighboring nodes. When a single node is full it shares data points and only when both the neighbor nodes are full, it splits.

However, this comes at a cost. Deleting a data point in B\* tree is much more complicated than other trees. This is a valid tradeoff because in many use cases the frequency of delete operation is much less.
