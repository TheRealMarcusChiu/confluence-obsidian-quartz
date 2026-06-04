---
title: "RL Chapter 4 (Dynamic Programming)"
created: 2025-12-08T17:49:32.920-06:00
modified: 2025-12-11T19:31:36.618-06:00
parent: "[[RL Chapters]]"
children: []
---
# Value Function
- $v_\pi(s) = E_\pi[G_t |S_t=s]$
- $v_\pi(s) = E_\pi[R_{t+1} + \gamma G_{t+1} |S_t=s]$
- $v_\pi(s) = \sum_a \pi(a|s) \sum_{s',r} p(s',r|s,a) [r + \gamma E_\pi[G_{t+1}|S_{t+1}=s']]$
- $v_\pi(s) = \sum_a \pi(a|s) \sum_{s',r} p(s',r|s,a) [r + \gamma v_\pi(s')]$

# Action-Value Function
- $q_\pi(s,a) = E_\pi[G_t |S_t=s, A_t=a]$

# Optimal Value Function
- $v_*(s) = max_{a} q_{\pi_*}(s,a)$
- $v_*(s) = max_{a} E_{\pi_*}[G_t | S_t=s, A_t=a]$
- $v_*(s) = max_{a} E_{\pi_*}[R_{t+1} + \gamma G_{t+1} | S_t=s, A_t=a]$
- $v_*(s) = max_{a} E[R_{t+1} + \gamma v_*(S_{t+1}) | S_t=s, A_t=a]$
- $v_*(s) = max_{a} \sum_{s',r} p(s',r|s,a) [ r + \gamma v_*(s')]$

# Optimal Action-Value Function
- $q_*(s,a) = E[R_{t+1} + \gamma max_{a'} q_*(S_{t+1},a') | S_t=s, A_t=a]$
- $q_*(s,a) = \sum_{s',r} p(s',r|s,a) [r + \gamma max_{a'} q_*(s',a')]$

# Policy Evalution
- TODO

# Finding New Greedy Policy
- $\pi'(s) = argmax_a q_\pi(s,a)$
- $\pi'(s) = argmax_a E[R_{t+1} + \gamma v_\pi(S_{t+1}) |S_t=s,A_t=a]$
- $\pi'(s) = argmax_a \sum_{s',r} \sum_{s',r} p(s',r|s,a) [r + \gamma v_\pi(s')]$

# Policy Iteration
- $\pi_0 -E-> v_{\pi_0} -I-> \pi_1 -E-> v_{\pi_1} -I-> \pi_2 -E-> ... -I-> \pi_* -E-> v_*$

# Value Iteration
- policy evaluation is stopped after just one sweep (one update of each state).
- $v_{k+1}(s) = max_a E[R_{t+1} + \gamma v_k(S_{t+1}) | S_t=s, A_t=a]$
- $v_{k+1}(s) = max_a \sum_{s',r}p(s',r|s,a) [r + \gamma v_k(s')]$

# Asynchronous Dynamic Programming

are in-place iterative DP algorithms that do not sweep through entire state set. examples include:
- update the value of ONLY one state at each value iteration update

# Generalized Policy Iteration (GPI)

policy iteration:
- policy evaluation (PE)
- policy improvement (PI)

GPI refer to the general of letting PE and PI interact

GPI is the family that consist of value iteration and asynchronous dynamic programming
