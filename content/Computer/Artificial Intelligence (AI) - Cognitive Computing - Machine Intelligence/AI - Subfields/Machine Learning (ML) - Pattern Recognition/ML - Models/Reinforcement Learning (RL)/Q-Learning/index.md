---
title: "Q-Learning"
created: 2020-03-15T16:34:46.491-05:00
modified: 2024-08-24T14:38:23.707-05:00
parent: "[[Reinforcement Learning (RL)]]"
children: []
---
###### Q-learning
````excerpt
- is a [model-free](https://en.wikipedia.org/wiki/Model-free_(reinforcement_learning)) [[Reinforcement Learning (RL)|reinforcement learning]] algorithm. The goal of Q-learning is to learn a policy, which tells an agent what action to take under what circumstances. It does not require a model (hence the connotation "model-free") of the environment, and it can handle problems with stochastic transitions and rewards, without requiring adaptations.
- for any Finite [[Markov Decision Process (MDP)|Markov Decision Process]] (FMDP), <em>Q</em>-learning finds a policy that is optimal in the sense that it maximizes the expected value of the total reward over any and all successive steps, starting from the current state. <em>Q</em>-learning can identify an optimal action-selection policy for any given FMDP, given infinite exploration time and a partly-random policy. "Q" names the function that returns the reward used to provide the reinforcement and can be said to stand for the "quality" of an action taken in a given state
````
^excerpt

# Formula
![[Q-Learning/q-learning.png|800]]

where:
- 𝛼 - learning rate or step size
	- determines to what extent newly acquired information overrides old information
	- 𝛼 = 0 makes the agent learn nothing (exclusively exploiting prior knowledge)
	- 𝛼 = 1 makes the agent consider only the most recent information (ignoring prior knowledge to explore possibilities)
	- In deterministic environments, a learning rate of 𝛼<sub>𝑡</sub>=1 is optimal
	- In stochastic environments, the algorithm converges under some technical conditions on the learning rate that require it to decrease to zero. In practice, often a constant learning rate is used, such as 𝛼<sub>𝑡</sub>=0.1 for all 𝑡
- 𝛾 - discount factor
	- determines the importance of future rewards
	- 𝛾 = 0 will make the agent "myopic" (or short-sighted) by only considering current rewards (i.e. 𝑟<sub>𝑡</sub> in the update rule above)
	- 𝛾 approaching 1 will make it strive for a long-term high reward
- 𝑄<sub>0</sub> - initial Q values
	- high initial values, also known as "optimistic initial conditions", can encourage exploration: no matter what action is selected, the update rule will cause it to have lower values than the other alternative, thus increasing their choice probability

# Q-Learning - Method Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Value Learning",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- find 𝑄(𝑠,𝑎)\n- $a = \\arg\\max_{a} Q(s,a)$"
    ],
    [
      {
        "content": "Policy Learning",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- find 𝜋(𝑠)\n- sample 𝑎 \\~ 𝜋(𝑠)\n- applicable to continuous action spaces"
    ]
  ]
}
```
# Q-Learning - Methods
- [[Deep Q Networks (DQN)]]

# Implementation

based on: [https://towardsdatascience.com/q-learning-54b841f3f9e4](https://towardsdatascience.com/q-learning-54b841f3f9e4)
```py
# https://towardsdatascience.com/q-learning-54b841f3f9e4
import pandas as pd
import random

class Game:
    rewards = None
    positionCol = None
    positionRow = None

    def __init__(self, start_col=1, start_row=1):
        self.distance = pd.DataFrame(
            {1: [8, 7, 6, 5, 4], 2: [7, 6, 5, 4, 3], 3: [6, 5, 4, 3, 2], 4: [5, 4, 3, 2, 1], 5: [4, 3, 2, 1, 0]},
            index={1, 2, 3, 4, 5})
        self.rewards = pd.DataFrame(
            {1: [0, 1, 2, 3, 4], 2: [1, 2, 3, 4, 5], 3: [2, 3, 4, 5, 6], 4: [3, 4, 5, 6, 7], 5: [4, 5, 6, 7, 8]},
            index={1, 2, 3, 4, 5})
        self.positionCol = start_col
        self.positionRow = start_row

    def move(self, direction):
        reward = 0
        end = False
        distance_before = self.distance[self.positionCol][self.positionRow]
        if direction == 'Up':
            self.positionRow -= 1
        elif direction == 'Down':
            self.positionRow += 1
        elif direction == 'Left':
            self.positionCol -= 1
        else:
            self.positionCol += 1

        # check if we lost
        if self.positionRow < 1 or self.positionRow > 5 or self.positionCol < 1 or self.positionCol > 5:
            end = True
            reward = -1000
            # check if we have reached the end
        elif self.positionCol == 5 and self.positionRow == 5:
            end = True
            reward = self.rewards[self.positionCol][self.positionRow]
        else:
            end = False
            if distance_before < self.distance[self.positionCol][self.positionRow]:
                reward = -1000
            else:
                reward = self.rewards[self.positionCol][self.positionRow]

        # return reward and end of game indicator
        return reward, end

# states are in columns and actions are in rows
learning_rate = 1
discount = 1
random_explore = 0.3
q_table = pd.DataFrame(100, index=['Up', 'Down', 'Left', 'Right'],
                       columns=[11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52,
                                53, 54, 55])

# print(q_table) would output
#         11   12   13   14   15   21   22  ...   44   45   51   52   53   54   55
# Up     100  100  100  100  100  100  100  ...  100  100  100  100  100  100  100
# Down   100  100  100  100  100  100  100  ...  100  100  100  100  100  100  100
# Left   100  100  100  100  100  100  100  ...  100  100  100  100  100  100  100
# Right  100  100  100  100  100  100  100  ...  100  100  100  100  100  100  100

for i in range(1000):
    game = Game()
    end_of_game = False
    while not end_of_game:
        # get current state state names are integers for ease of coding, it will be a two digit number with
        # 1st digit = Col number
        # 2nd digit = Row number
        current_state = (game.positionCol * 10) + game.positionRow
        # select the action with maximum reward
        max_reward_action = q_table[current_state].idxmax()
        # replace with random action to promote exploration and not get stuck in a loop
        if random.random() < random_explore:
            max_reward_action = q_table.index[random.randint(0, 3)]
        # play the game with that action
        reward, end_of_game = game.move(max_reward_action)
        # if (current_state==12): print("CS:" + str(current_state) + ", Action: " + max_reward_action + ", Reward: "
        # + str(reward)) if end of game, then if the game is over, then no need to update the q value for the action
        # taken, but is set to the reward value observed
        if end_of_game:
            q_table.loc[max_reward_action, current_state] = reward
        else:
            optimal_future_value = q_table[(game.positionCol * 10) + game.positionRow].max()
            discounted_optimal_future_value = discount * optimal_future_value
            learned_value = reward + discounted_optimal_future_value
            q_table.loc[max_reward_action, current_state] = (1 - learning_rate) * q_table[current_state][
                max_reward_action] + learning_rate * learned_value

print(q_table)
```
