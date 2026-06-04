---
title: "Dynamic Union Set (Data Structure & Algorithm)"
created: 2021-09-18T16:17:44.748-05:00
modified: 2021-09-18T17:02:43.659-05:00
parent: "[[Set Structures & Algorithms]]"
children: []
---
###### Dynamic Union Set (Data Structure & Algorithm)
- is a [[Data Structures|data structure]] that supports dynamic union operations over a set of elements

# Dynamic Union Set - Operations

```merge-table
{
  "rows": [
    [
      {
        "content": "Operation",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "initialize(n)",
        "bg": "#F4F5F7"
      },
      "initializes data structure with n elements"
    ],
    [
      {
        "content": "void union(p, q)",
        "bg": "#F4F5F7"
      },
      "connects element p and q"
    ],
    [
      {
        "content": "boolean connected(p, q)",
        "bg": "#F4F5F7"
      },
      "returns whether elements p and q are connected"
    ],
    [
      {
        "content": "int find(p)",
        "bg": "#F4F5F7"
      },
      "returns the component identifier of element p"
    ],
    [
      {
        "content": "int count()",
        "bg": "#F4F5F7"
      },
      "returns the number of components in the data structure"
    ]
  ]
}
```
# Dynamic Union Set - Algorithm Types

given 𝑀 union operations over a set of size 𝑁

```merge-table
{
  "rows": [
    [
      {
        "content": "Algorithm Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Pseudo Code",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "initialize(n)\n[[Growth／Asymptotic Complexity／Analysis (Resource - Time／Space／Memory Complexity)|Time Complexity]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "union(p, q)\nTime Complexity",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "connected(p, q)\nTime Complexity",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "Quick Find (QF)",
        "bg": "#f4f5f7"
      },
      "> [!expand]- Click here to expand...\n> ```java\n> public class QuickFindUF {\n>\n> \tprivate int[] id;\n>\n> \tpublic QuickFindUF(int N) {\n> \t\tid = new int[N];\n> \t\tfor (int i = 0; i < N; i++)\n> \t\t\tid[i] = i;\n> \t}\n>\n> \tpublic boolean connected(int p, int q) {\n> \t\treturn id[p] == id[q];\n> \t}\n>\n> \tpublic void union(int p, int q) {\n> \t\tint pid = id[p];\n> \t\tint qid = id[q];\n> \t\tfor (int i = 0; i < id.length; i++)\n> \t\t\tif (id[i] == pid) id[i] = qid;\n> \t}\n> }\n> ```",
      {
        "content": "𝑁",
        "align": "center"
      },
      {
        "content": "𝑂(𝑁)",
        "align": "center"
      },
      {
        "content": "𝑂(1)",
        "align": "center"
      }
    ],
    [
      {
        "content": "Quick Union (QU)",
        "bg": "#f4f5f7"
      },
      "> [!expand]- Click here to expand...\n> ```java\n> public class QuickUnionUF {\n>\n> \tprivate int[] id;\n>\n> \tpublic QuickUnionUF(int N) {\n> \t\tid = new int[N];\n> \t\tfor (int i = 0; i < N; i++)\n> \t\t\tid[i] = i;\n> \t}\n>\n> \tpublic boolean connected(int p, int q) {\n> \t\treturn root(p) == root(q);\n> \t}\n>\n> \tpublic void union(int p, int q) {\n> \t\tint i = root(p);\n> \t\tint j = root(q);\n> \t\tid[i] = j;\n> \t}\n>\n> \tprivate int root(int i) {\n> \t\twhile (i != id[i]) i = id[i];\n> \t\treturn i;\n> \t}\n> }\n> ```",
      {
        "content": "𝑁",
        "align": "center"
      },
      {
        "content": "𝑂(𝑁)",
        "align": "center"
      },
      {
        "content": "𝑂(𝑁)",
        "align": "center"
      }
    ],
    [
      {
        "content": "Weighted QU",
        "bg": "#f4f5f7"
      },
      "> [!expand]- Click here to expand...\n> ```java\n> public class WeightedQuickUnionUF {\n>\n> \tprivate int[] id;\n> \tprivate int[] size;\n>\n> \tpublic WeightedQuickUnionUF(int N) {\n> \t\tid = new int[N];\n> \t\tsize = new int[N];\n> \t\tfor (int i = 0; i < N; i++) {\n> \t\t\tid[i] = i;\n> \t\t\tsize[i] = 1;\n> \t\t}\n> \t}\n>\n> \tpublic boolean connected(int p, int q) {\n> \t\treturn root(p) == root(q);\n> \t}\n>\n> \tpublic void union(int p, int q) {\n> \t\tint pRoot = root(p);\n> \t\tint qRoot = root(q);\n> \t\tif (pRoot == qRoot) {\n> \t\t\t// do nothing\n> \t\t} else if (size[pRoot] > size[qRoot]) {\n> \t\t\tsize[pRoot] += size[qRoot];\n> \t\t\tid[qRoot] = pRoot;\n> \t\t} else {\n> \t\t\tsize[qRoot] += size[pRoot];\n>  \t\t\tid[pRoot] = qRoot; \n> \t\t}\n> \t}\n>\n> \tprivate int root(int i) {\n> \t\twhile (i != id[i]) i = id[i];\n> \t\treturn i;\n> \t}\n> }\n> ```",
      {
        "content": "𝑁",
        "align": "center"
      },
      {
        "content": "𝑂(𝑙𝑔𝑁)",
        "align": "center"
      },
      {
        "content": "𝑂(𝑙𝑔𝑁)",
        "align": "center"
      }
    ],
    [
      {
        "content": "QU + Path Compression",
        "bg": "#f4f5f7"
      },
      "> [!expand]- Click here to expand...\n> ```java\n> public class QuickUnionPathCompressionUF {\n>\n> \tprivate int[] id;\n>\n> \tpublic QuickUnionPathCompressionUF(int N) {\n> \t\tid = new int[N];\n> \t\tfor (int i = 0; i < N; i++)\n> \t\t\tid[i] = i;\n> \t}\n>\n> \tpublic boolean connected(int p, int q) {\n> \t\treturn root(p) == root(q);\n> \t}\n>\n> \tpublic void union(int p, int q) {\n> \t\tint i = root(p);\n> \t\tint j = root(q);\n> \t\tid[i] = j;\n> \t}\n>\n> \tprivate int root(int i) {\n> \t\tint root = i;\n> \t\twhile (root != id[root]) root = id[root];\n> \t\twhile (i != id[i]) id[i] = root;\n> \t\treturn root;\n> \t}\n> }\n> ```",
      {
        "content": "𝑁",
        "align": "center"
      },
      {
        "align": "center"
      },
      {
        "align": "center"
      }
    ],
    [
      {
        "content": "Weight QU + Path Compression",
        "bg": "#f4f5f7"
      },
      "> [!expand]- Click here to expand...\n> ```java\n> public class WeightedQuickUnionUF {\n>\n> \tprivate int[] id;\n> \tprivate int[] size;\n>\n> \tpublic WeightedQuickUnionUF(int N) {\n> \t\tid = new int[N];\n> \t\tsize = new int[N];\n> \t\tfor (int i = 0; i < N; i++) {\n> \t\t\tid[i] = i;\n> \t\t\tsize[i] = 1;\n> \t\t}\n> \t}\n>\n> \tpublic boolean connected(int p, int q) {\n> \t\treturn root(p) == root(q);\n> \t}\n>\n> \tpublic void union(int p, int q) {\n> \t\tint pRoot = root(p);\n> \t\tint qRoot = root(q);\n> \t\tif (pRoot == qRoot) {\n> \t\t\t// do nothing\n> \t\t} else if (size[pRoot] > size[qRoot]) {\n> \t\t\tsize[pRoot] += size[qRoot];\n> \t\t\tid[qRoot] = pRoot;\n> \t\t} else {\n> \t\t\tsize[qRoot] += size[pRoot];\n>  \t\t\tid[pRoot] = qRoot; \n> \t\t}\n> \t}\n>\n>  \tprivate int root(int i) {\n> \t\tint root = i;\n> \t\twhile (root != id[root]) root = id[root];\n> \t\twhile (i != id[i]) id[i] = root;\n> \t\treturn root;\n> \t} \n> }\n> ```",
      {
        "content": "𝑁",
        "align": "center"
      },
      {
        "align": "center"
      },
      {
        "align": "center"
      }
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
