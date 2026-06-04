---
title: "Coreference／Co-Reference Extraction"
created: 2020-11-20T14:57:02.832-06:00
modified: 2020-11-20T18:06:42.893-06:00
parent: "[[Information Retrieval (IR) - Information Extraction (IE)]]"
children:
  - "[[Lappin & Leas Pronouns Resolution Algorithm]]"
---
- <strong>coreference/co-reference</strong> - occurs when two or more expressions in a text refer to the same person or thing; they have the same referent (e.g. Bill said he would come; the proper noun Bill and the pronoun he refer to the same person, namely to Bill)

### Coreference Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Indefinite Noun Phrase",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- <code><font style=\"color: rgb(128,128,128);\">I saw <strong>an Acura Integra</strong> today</font></code>\n- <code><font style=\"color: rgb(128,128,128);\"><strong>Some Acura Integras</strong> were being unloaded</font></code>"
    ],
    [
      {
        "content": "Definite Noun Phrase",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- <code><font style=\"color: rgb(128,128,128);\">Tom loves <strong>the Acura Integra</strong></font></code>"
    ],
    [
      {
        "content": "Epithet Noun Phrase",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- <code><font style=\"color: rgb(128,128,128);\"><strong>Tom</strong> used his credit card to much, <strong>the poor guy</strong> bankrupted</font></code>"
    ],
    [
      {
        "content": "Surface Count",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- <code><font style=\"color: rgb(128,128,128);\">Lynn has 2 boyfriends, <strong>Mark</strong> and Kevin</font></code>\n- <code><font style=\"color: rgb(128,128,128);\">She likes <strong>the former</strong> better</font></code>"
    ],
    [
      {
        "content": "One Anaphora",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- <code><font style=\"color: rgb(128,128,128);\">I saw no less than <strong>6 Acuras</strong>. Now I want <strong>one</strong></font></code>"
    ],
    [
      {
        "content": "Generics",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- <code><font style=\"color: rgb(128,128,128);\">I saw no less than <strong>6 Acuras</strong>. <strong>They</strong> are the coolest cars</font></code>"
    ],
    [
      {
        "content": "Inferables",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- <code><font style=\"color: rgb(128,128,128);\">I almost bought <strong>an Acura</strong> today, but <strong>a door</strong> had a dent and <strong>the engine</strong> seemed noisy</font></code>"
    ],
    [
      {
        "content": "Syntactic & Semantic Constraints on Coreference",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- <code><font style=\"color: rgb(128,128,128);\">John has <strong>3 new Acuras</strong>. <strong>They</strong> are all red </font></code><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\">(number)</font></font>\n- <code><font style=\"color: rgb(128,128,128);\"><strong>You and I</strong> have Acuras. <strong>We</strong> love them </font></code><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\">(person)</font></font>\n- <code><font style=\"color: rgb(128,128,128);\">John has an <strong>Acura</strong>. <strong>It</strong> is attractive </font></code><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\">(gender)</font></font>\n- <code><font style=\"color: rgb(128,128,128);\"><strong>John</strong> bought <strong>himself</strong> a new Acura </font></code><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\">(himself = John)</font></font>"
    ],
    [
      {
        "content": "Selectional Restrictions",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- <code><font style=\"color: rgb(128,128,128);\">John parked his <strong>Acura</strong> in the <strong>garage</strong>. He had driven <strong>it</strong> for hours</font></code>\n\nselectional restrictions are violated in the case of metaphor\n- <code><font style=\"color: rgb(128,128,128);\">John bought <strong>a new Acura</strong>. <strong>It</strong> drinks gasoline like you wouldn't believe</font></code>"
    ],
    [
      {
        "content": "Semantic Constraints",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- <code><font style=\"color: rgb(128,128,128);\">John parked his <strong>Acura</strong> in the <strong>garage</strong>. <strong>It</strong> is incredibly messy, with old bike and car parts lying around</font></code>"
    ]
  ]
}
```
### Coreference Resolution - Heuristics

```merge-table
{
  "rows": [
    [
      {
        "content": "Recency",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- <code><font style=\"color: rgb(128,128,128);\">John has an Acura. Bill has a <strong>Legend</strong>. Mary likes to drive <strong>it</strong></font></code>"
    ],
    [
      {
        "content": "Grammatical Role",
        "header": true,
        "bg": "#F4F5F7"
      },
      "treat entities in the subject position as more salient than those in object position, which in turn are more salient than those mentioned in subsequent positions\n- <code><font style=\"color: rgb(128,128,128);\"><strong>John</strong> went to the Acura dealership with Bill. <strong>He</strong> bought an Integra</font></code>"
    ],
    [
      {
        "content": "Repeated Mention",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- <code><font style=\"color: rgb(128,128,128);\"><strong>John</strong> needed a car to get to <strong>his</strong> new job. <strong>He</strong> decided that he wanted something sporty. Bill went to the Acura with <strong>him</strong>. <strong>He</strong> bought an Integra</font></code>"
    ],
    [
      {
        "content": "Verb Semantics",
        "header": true,
        "bg": "#F4F5F7"
      },
      "certain verbs place a semantically oriented emphasis on one of their argument positions\n- <code><font style=\"color: rgb(128,128,128);\"><strong>John</strong> telephoned Bill. <strong>He</strong> lost the pamphlet on Acuras</font></code>\n- <code><font style=\"color: rgb(128,128,128);\">John criticized <strong>Bill</strong>. <strong>He</strong> lost the pamphlet on Acuras</font></code>"
    ]
  ]
}
```
### Coreference Resolution - Algorithms
- Lappin & Leas Pronouns Resolution Algorithm
