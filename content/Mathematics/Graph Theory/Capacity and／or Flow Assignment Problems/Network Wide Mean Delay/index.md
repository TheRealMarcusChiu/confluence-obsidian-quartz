---
title: "Network Wide Mean Delay"
created: 2021-09-13T05:25:20.858-05:00
modified: 2021-09-13T05:25:20.858-05:00
parent: "[[Capacity and／or Flow Assignment Problems]]"
children: []
---
A reasonable way of coupling [[Capacity Assignment Problem|capacity assignment]] with network performance in a packet switched network is to consider the delay incurred by waiting in queues (buffers), due to the capacity (rate) limit of the outgoing link.

The simplest queueing model is the so called M/M/1 queue with infinite buffer. For this model the following simple relationship can be derived

notations:
- τ: average queueing delay (average time a packet spends by waiting in the queue)
- λ: arrival rate (average number of packets arriving at the queue in unit time)
- μ: service rate (inverse packet size) The most practical interpretation of this is in terms of packet length: 1/μ is the average packet length.
- C: channel (link) capacity (the rate in bit/sec at which data can leave the queue)

then the following holds:

(1) τ = 1 / (μC − λ)

note that μC is the average number of packets that leave the queue in unit time

the formula also shows that for average-queueing-delay (τ) to avoid infinitely growing delays, it is necessary that μC \> λ, that is, the arrival rate should be smaller than the rate at which packets can leave

let us denote τ, C, λ values for link i by τ<sub>i</sub>, C<sub>i</sub>, λ<sub>i</sub>. then we have:

(2) τ<sub>i</sub> = 1 / (μC<sub>i</sub> − λ<sub>i</sub>)

now let γ<sub>j,k</sub>be the average traffic rate between source node j and destination k. then the traffic in the whole network can be characterized by the sum

(3) γ = Σ<sub>j,k</sub> \[γ<sub>j,k</sub>\]

the <strong><em>network wide mean delay</em></strong> can be defined by summing up the link delays for all the l links, but weighting them with the arrival rate of the link, relative to the network wide traffic:

(4) T = Σ<sub>i=1</sub><sup>l</sup> \[(λ<sub>i</sub>/γ)τ<sub>i</sub>\]

this expresses the natural weighting that the delay on links that carry a larger part of the overall traffic is more critical

using the formula for τ<sub>i</sub> we obtain:

(5)![[Network Wide Mean Delay/network-wide-mean-delay.png|301]]

now we observe that λ<sub>i</sub>/μ has a practical meaning: if on the average, λ packets per second arrive at link i and a packet is 1/μ bits long, then λ<sub>i</sub>· (1/μ) = λ<sub>i</sub>/μ is the number of bits per second that flow through the link, on the average.

Thus,

f<sub>i</sub> = λ<sub>i</sub>/μ

is the flow on link i

substituting f<sub>i</sub> = λ<sub>i</sub>/μ into formula (5) we get:

(6)![[Network Wide Mean Delay/netowkr-wide-mean-delay-2.png|140]]

We will use this formula in several network design models

(note: generalizations to more sophisticated queueing models are also possible, such as for the M/G/1 queue, but here we restrict ourselves to the base case only)
