---
title: "MVA vs MVP"
created: 2020-01-27T21:23:14.854-06:00
modified: 2025-10-20T22:48:26.513-05:00
parent: "[[MVW - Comparisons]]"
children: []
---
# [[Model-View-Adaptor (MVA)]] vs [[Model-View-Presenter (MVP)]]
key difference would be control flow:
- In MVP, the View triggers/creates/calls the Presenter, which delegates to the model and responds back to the View
- In MVA, when messages come in, an Adapter is chosen, which then mediates between the Model and View

Because the MVP View triggers/creates/calls the Presenter, choosing between multiple Presenters (as an Adapter is chosen) is not a straightforward fit
