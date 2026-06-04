---
title: "AI Chapter 11 - Planning"
created: 2019-04-05T11:42:24.741-05:00
modified: 2019-04-14T15:53:21.752-05:00
parent: "[[AI - A Modern Approach - Summaries]]"
children: []
---
# Simple Planning Agent
```
// global variables
kb // knowledge base
p  // initial plan
t  // a counter initially 0

// returns an action
function simple-planning-agent(percept)
    g // a goal
    current // a current state description

    tell(kb, make-percept-sentence(percept, t))
    current = state-description(kb, t)
    if (p == no-plan)
        g = ask(kb, make-goal-query(t))
        p = ideal-planner(current, g, kb)
    if (p == no-plan) or (p == empty)
        action = no-op
    else
        action = first(p)
        p = rest(p)
    tell(kb, make-action-sentence(action,t))
    t++

    return action
```
- <strong>ideal-planner</strong> - a planning algorithm (can be any of the planners described in this chapter or chapter 12)
- <strong>state-description</strong> - takes percept as input and returns state description that is required by planner
- <strong>make-goal-query</strong> - used to ask the knowledge base what the next goal should be

# Planning in Situational Calculus
- refer to [[Situational Logic／Calculus|Situational Logic/Calculus]]
