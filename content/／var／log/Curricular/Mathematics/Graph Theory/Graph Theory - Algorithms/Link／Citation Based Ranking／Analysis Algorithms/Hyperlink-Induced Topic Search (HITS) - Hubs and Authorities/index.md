---
title: "Hyperlink-Induced Topic Search (HITS) - Hubs and Authorities"
created: 2022-02-06T18:18:37.490-06:00
modified: 2022-02-06T19:18:24.598-06:00
parent: "[[Link／Citation Based Ranking／Analysis Algorithms]]"
children: []
---
###### Hyperlink-Induced Topic Search (HITS; also known as hubs and authorities)
- is a [[Link／Citation Based Ranking／Analysis Algorithms|link analysis algorithm]] that rates Web pages

# The Idea

The idea stemmed from a particular insight that web pages can be 1 of 2 categories:
- <strong>hubs</strong> - a web page that served as compilations of a broad catalog of information that led users direct to other authoritative pages
- <strong>authorities</strong> - a web page that contains the actual information

In other words, a good hub represents a page that pointed to many other pages, while a good authority represents a page that is linked by many different hubs

The scheme, therefore, assigns <strong>two scores for each page</strong>:
- <strong>authority value</strong> - which estimates the value of the content of the page
- <strong>hub value</strong> - which estimates the value of its links to other pages

# Algorithm

TODO
