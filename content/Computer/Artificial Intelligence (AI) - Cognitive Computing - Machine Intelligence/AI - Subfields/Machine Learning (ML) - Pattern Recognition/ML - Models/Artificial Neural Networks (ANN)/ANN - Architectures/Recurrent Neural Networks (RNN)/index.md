---
title: "Recurrent Neural Networks (RNN)"
created: 2020-08-02T21:02:02.663-05:00
modified: 2026-04-04T14:42:23.042-05:00
parent: "[[ANN - Architectures]]"
children:
  - "[[Hopfield Networks - Associative Memory Models - Ising–Lenz–Little Models - Nakano-Amari-Hopfield Networks]]"
---
###### Recurrent Neural Networks (RNN)
````excerpt
- is a type of [[ANN - Architectures|artificial neural network architecture]] that retains state information by forming cycles between [[Perceptrons (Artificial Neurons)|perceptron]]s
- used to model sequential data
- if training [[Vanilla／Feed-Forward Neural Networks (FNN／FFNN／FFN) - Multi-Layer／Multilayer Perceptrons (MLP)|vanilla neural nets]] is an optimization over functions, training <em>recurrent nets</em> is an optimization over programs
````
^excerpt

# RNN - Vanilla Code

> [!expand]- Click here to expand...
> Original:
> - [https://gist.github.com/karpathy/d4dee566867f8291f086](https://gist.github.com/karpathy/d4dee566867f8291f086)
>
> Modified
> ```py
> import numpy as np
>
> data = open('input.txt', 'r').read()
> chars = list(set(data))
> data_size, vocab_size = len(data), len(chars)
> print('data has %d characters, %d unique.' % (data_size, vocab_size))
> char_to_ix = {ch: i for i, ch in enumerate(chars)}
> ix_to_char = {i: ch for i, ch in enumerate(chars)}
>
> # hyperparameters
> hidden_size = 100  # size of hidden layer of neurons
> seq_length = 25  # number of steps to unroll the RNN for
> learning_rate = 1e-1
>
> # model parameters
> Wxh = np.random.randn(hidden_size, vocab_size) * 0.01  # input to hidden
> Whh = np.random.randn(hidden_size, hidden_size) * 0.01  # hidden to hidden
> Why = np.random.randn(vocab_size, hidden_size) * 0.01  # hidden to output
> bh = np.zeros((hidden_size, 1))  # hidden bias
> by = np.zeros((vocab_size, 1))  # output bias
>
> def lossFun(inputs, targets, hprev):
>     """
>     inputs,targets are both list of integers.
>     hprev is Hx1 array of initial hidden state
>     returns the loss, gradients on model parameters, and last hidden state
>     """
>     xs, hs, ys, ps = {}, {}, {}, {}
>     hs[-1] = np.copy(hprev)
>     loss = 0
>
>     # forward pass
>     for t in range(len(inputs)):
>         xs[t] = np.zeros((vocab_size, 1))  # encode in 1-of-k representation
>         xs[t][inputs[t]] = 1
>         hs[t] = np.tanh(np.dot(Wxh, xs[t]) + np.dot(Whh, hs[t - 1]) + bh)  # hidden state
>         ys[t] = np.dot(Why, hs[t]) + by  # unnormalized log probabilities for next chars
>         ps[t] = np.exp(ys[t]) / np.sum(np.exp(ys[t]))  # probabilities for next chars
>         loss += -np.log(ps[t][targets[t], 0])  # softmax (cross-entropy loss)
>
>     # backward pass: compute gradients going backwards
>     dWxh, dWhh, dWhy = np.zeros_like(Wxh), np.zeros_like(Whh), np.zeros_like(Why)
>     dbh, dby = np.zeros_like(bh), np.zeros_like(by)
>     dh_next = np.zeros_like(hs[0])
>     for t in reversed(range(len(inputs))):
>         dy = np.copy(ps[t])
>         dy[targets[t]] -= 1  # backprop into y. see http://cs231n.github.io/neural-networks-case-study/#grad if confused here
>
>         dWhy += np.dot(dy, hs[t].T)
>         dby += dy
>
>         dh = np.dot(Why.T, dy) + dh_next  # backprop into h
>
>         dhraw = (1 - hs[t] * hs[t]) * dh  # backprop through tanh non-linearity
>         dWxh += np.dot(dhraw, xs[t].T)
>         dWhh += np.dot(dhraw, hs[t - 1].T)
>         dbh += dhraw
>
>         dh_next = np.dot(Whh.T, dhraw)
>
>     for dparam in [dWxh, dWhh, dWhy, dbh, dby]:
>         np.clip(dparam, -5, 5, out=dparam)  # clip to mitigate exploding gradients
>
>     return loss, dWxh, dWhh, dWhy, dbh, dby, hs[len(inputs) - 1]
>
> def sample(h, seed_ix, n):
>     """
>     sample a sequence of integers from the model
>     h is memory state, seed_ix is seed letter for first time step
>     """
>     x = np.zeros((vocab_size, 1))
>     x[seed_ix] = 1
>     ixes = []
>     for t in range(n):
>         h = np.tanh(np.dot(Wxh, x) + np.dot(Whh, h) + bh)
>         y = np.dot(Why, h) + by
>         p = np.exp(y) / np.sum(np.exp(y))
>         ix = np.random.choice(range(vocab_size), p=p.ravel())
>         x = np.zeros((vocab_size, 1))
>         x[ix] = 1
>         ixes.append(ix)
>     return ixes
>
> n, p = 0, 0
> hprev = np.zeros((hidden_size, 1))
>
> # memory variables for Adagrad
> mWxh, mWhh, mWhy = np.zeros_like(Wxh), np.zeros_like(Whh), np.zeros_like(Why)
> mbh, mby = np.zeros_like(bh), np.zeros_like(by)
>
> smooth_loss = -np.log(1.0 / vocab_size) * seq_length  # loss at iteration 0
>
> while True:
>     # prepare inputs (we're sweeping from left to right in steps seq_length long)
>     if p + seq_length + 1 >= len(data) or n == 0:
>         hprev = np.zeros((hidden_size, 1))  # reset RNN memory
>         p = 0  # go from start of data
>     inputs = [char_to_ix[ch] for ch in data[p:p + seq_length]]
>     targets = [char_to_ix[ch] for ch in data[p + 1:p + seq_length + 1]]
>
>     # forward seq_length characters through the net and fetch gradient
>     loss, dWxh, dWhh, dWhy, dbh, dby, hprev = lossFun(inputs, targets, hprev)
>     smooth_loss = smooth_loss * 0.999 + loss * 0.001
>
>     # perform parameter update with Adagrad
>     for param, dparam, mem in zip([Wxh, Whh, Why, bh, by],
>                                   [dWxh, dWhh, dWhy, dbh, dby],
>                                   [mWxh, mWhh, mWhy, mbh, mby]):
>         mem += dparam * dparam
>         param += -learning_rate * dparam / np.sqrt(mem + 1e-8)  # adagrad update
>
>     if n % 100 == 0:
>         # print current loss function
>         print('iter %d, loss: %f' % (n, smooth_loss))
>
>         # sample from the model now and then
>         sample_ix = sample(hprev, inputs[0], 200)
>         txt = ''.join(ix_to_char[ix] for ix in sample_ix)
>         print('----\n %s \n----' % txt)
>
>     p += seq_length  # move data pointer
>     n += 1  # iteration counter
> ```
# RNN - Types
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

- [[Gated Recurrent Neural Networks (Gated RNN)]]

# Resources
- [Attention and Augmented Recurrent Neural Networks](https://distill.pub/2016/augmented-rnns/)
- [Andrej Karpathy - The Unreasonable Effectiveness of Recurrent Neural Networks](http://karpathy.github.io/2015/05/21/rnn-effectiveness/)
- [https://explained.ai/rnn/index.html](https://explained.ai/rnn/index.html)

![](https://www.youtube.com/watch?v=PAoe7mmmvp0)![](https://www.youtube.com/watch?v=UNmqTiOnRfg&t=115s)![](https://www.youtube.com/watch?v=LHXXI4-IEns)![](https://www.youtube.com/watch?v=SEnXr6v2ifU&list=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI&index=2&t=52s)
