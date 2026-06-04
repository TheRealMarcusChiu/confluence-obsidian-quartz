---
title: "Chaos Theory - Introduction (Making Sense out of Chaos & Horseshoe)"
created: 2022-03-20T20:49:11.704-05:00
modified: 2022-03-20T21:02:32.480-05:00
parent: "[[Chaos Theory]]"
children: []
---
In 1885, King Oscar II of Sweden announced a public challenge consisting of four mathematical problems. The French polymath Henri Poincaré focused on one related to the motion of celestial bodies, the so-called <em>n</em>-body problem. Will our solar system continues its clocklike motion indefinitely, will the planets fly off into the void, or will they collapse into a fiery solar death?

Poincaré’s solution — which indicated that at least some systems, like the sun, Earth, and moon, were stable — won the prestigious prize, and an accompanying article was printed for distribution in 1889. Unfortunately, his solution was incorrect.

Poincaré admitted his error and paid to have the copies of his solution destroyed (which cost more than the prize money). A month later, he submitted a corrected version. He now saw that even a system with only three bodies could behave too unpredictably — too chaotically — to be modeled. So began the field of dynamical systems.

For our purposes, a dynamical system is simply a function whose possible outputs can also be inputs. This allows us to repeatedly plug the outputs of the function back in, allowing for evolving behavior. As Poincaré’s work shows, this simple premise can produce examples so complex and random that they are literally called chaotic.

An elegant way to understand Poincaré’s conclusion, and bring some order to chaos, came some 70 years later. Shortly after the brilliant young topologist (and future Fields medalist) Stephen Smale wrote his first article on dynamical systems, he received a letter that led him to discover a relatively simple and ubiquitous function that explains the chaos Poincaré observed in the three-body problem. Smale called it the horseshoe.

To understand it, let’s start with a simple example of a dynamical system that is not chaotic. Suppose you want to calculate the square root of 2 with only a simple calculator. A process called Newton’s method says you should start with any guess — let’s say 3 — and plug it into the function <em>f</em>(<em>x</em>) = x/2 + /1x. The output, <em>f</em>(3) = 1.8333333, is closer to the true value than the input. To get even closer, plug the output back into the function: <em>f</em>(1.8333333) = 1.4621212. Doing this three more times yields 1.4142136, the likely limit of your calculator’s accuracy.

Writing this sixth approximation as f(f(f(f(f(3)))) is awkward, so instead, we write <em>f</em><sup>5</sup>(3), and we call the infinite sequence of outputs the “orbit” of <em>x</em>. It helps to think of each iteration as marking ticks of a clock, and to think of the orbit as hopping along the number line, approaching √2.

![[Chaos Theory - Introduction (Making Sense out of Chaos & Horseshoe)/Figures-Chaos_1.png|400]]

The orbits of 3 and 12 both approach the attracting fixed point √2.

In this example, we call √2 an attracting fixed point: a fixed point because it yields the fixed orbit √2, √2, √2, …, and attracting because, like a black hole, it sucks in the orbits of nearby points.

But again, not all dynamical systems exhibit such simple and predictable behavior. A dynamical system can have orbits that cycle periodically through a finite set of points, march off to infinity, or exhibit no apparent order.

To understand these concepts, which are central to chaotic systems, consider a particularly illuminating example called the tent map, <em>T</em>, defined for values of <em>x</em> between 0 and 1. Much like a candymaker pulling taffy, it stretches that interval to twice its length folds it in half, and sets it back on the original interval. That means 0 and 1 both map to 0, and 1/2 maps to 1. Because values produced by the tent map are also between 0 and 1, it can be a dynamic system. Iterating the function, as with Newton’s method, means repeating this process of stretching and folding.

![[Chaos Theory - Introduction (Making Sense out of Chaos & Horseshoe)/Figures-Chaos_2.png]]

The tent map, described by the equation T(x)=−2\*|x−1/2| + 1, stretches and folds the interval \[0, 1\]. Iterating the function corresponds to repeated stretching and folding.

As in the √2 example, the tent map has fixed points, 0 and 2/3. But it also has an orbit that alternates between two points, 2/5 and 4/5 — we call this a period-2 orbit — and a period-3 orbit, which cycles through 2/9, 4/9, and 8/9. And surprisingly, because the tent map has a point that produces an orbit of period 3, we can prove that it has points of every period — no matter what positive integer you pick, there will be a repeating orbit with that many stops in the path.

The first to discover this fact about functions on the real number line was the Ukrainian mathematician Alexander Sharkovsky. However, his 1964 paper on the subject remained unknown outside Eastern Europe, and the result only became known when the University of Maryland mathematicians Tien-Yien Li and James Yorke independently rediscovered it in 1975. They proved that such a dynamical system also has orbits with no discernible pattern, like the orbit of point √2 – 1 for the tent map. They [wrote that](https://www.jstor.org/stable/2318254) “period 3 implies chaos,” coining the mathematical term “chaos” in the process.

![[Chaos Theory - Introduction (Making Sense out of Chaos & Horseshoe)/Figures-Chaos_3.png|400]]

The orbit of √2 – 1 for the tent map displays no clear pattern.

More interestingly, even though the points √2 – 1 and √2 – 0.999 are close together, their orbits separate quickly: For instance, <em>T</em><sup>9</sup>(√2 – 1) = 0.07734 while <em>T</em><sup>9</sup>(√2 – 0.999) = 0.58934. This phenomenon is known as “sensitive dependence on initial conditions,” or more informally as the butterfly effect. Small initial changes can lead to big outcome changes. As the mathematician and meteorologist Edward Lorenz put it, “Does the flap of a butterfly’s wings in Brazil set off a tornado in Texas?” While there is no settled definition of chaos, this sensitive dependence is one of its hallmarks.

To help understand these chaotic systems — and Smale’s horseshoe — let’s employ what at first might seem like a crude technique<em>. </em>First, divide the interval of possible values into halves labeled L and R. Then, as an orbit progresses, simply note which half the next iteration lands on. This sequence is the orbit’s “itinerary.” For instance, the itinerary of the period-3 orbit of 2/9 is LLRLLRLLR… since 2/9 and 4/9 are in L and 8/9 is in R. The itinerary for the orbit of √2 – 1 begins LRLRRRRRLL.

![[Chaos Theory - Introduction (Making Sense out of Chaos & Horseshoe)/Figures-Chaos_4.png|400]]

Under the tent map, point 2/9 produces a period-3 orbit with the itinerary LLRLLRLLR…, and point √2 – 1 produces an itinerary that begins LRLRRRRRLL…

Representing orbits by their itineraries looks like a huge loss of information, but it’s not. That’s because every possible sequence of L’s and R’s corresponds to one and only one point. The orbit of 2/9 is the only one with itinerary LLRLLRLLR…, for example. This feature provides a convenient tool for analyzing the dynamics of the tent map. It reveals that points are periodic precisely when their itineraries are. It also allows us to determine the precise location of a point from any given itinerary.

Now let’s expand the idea of the tent map into more dimensions, and finally meet Smale’s horseshoe function, <em>h</em>. Start with a square, stretch it into a skinny rectangle, fold it into a horseshoe, and place it over the original square.

![[Chaos Theory - Introduction (Making Sense out of Chaos & Horseshoe)/Figures-Chaos_5.png|350]]

Smale’s horseshoe map stretches and folds a square across itself.

As with all dynamical systems, we can iterate this process — stretch, fold, stretch, fold, stretch, fold — yielding horseshoes inside horseshoes.

![[Chaos Theory - Introduction (Making Sense out of Chaos & Horseshoe)/Figures-Chaos_6.png|350]]

Iterating Smale’s map yields horseshoes inside horseshoes inside horseshoes.

The horseshoe map is invertible — in addition to knowing where a point <em>x</em> is going, as described by <em>h</em>(<em>x</em>), we know where it came from, as described by <em>h</em><sup>-1</sup>(<em>x</em>). Applying <em>h</em><sup>-1</sup>to the original square results in a new horseshoe at right angles to the first. If you keep going, you’ll get more horseshoes inside the new horseshoe.

Now place the images of these maps on top of each other:

![[Chaos Theory - Introduction (Making Sense out of Chaos & Horseshoe)/Figures-Chaos_7.png|350]]

The horseshoe map is invertible, producing two sets of perpendicular horseshoes.

There’s a set of points, which we’ll call <em>H</em>, that consists of the intersection of all the horizontal and vertical horseshoes. This is where the interesting action happens.

![[Chaos Theory - Introduction (Making Sense out of Chaos & Horseshoe)/Figures-Chaos_8.png]]

The highly disconnected set <em>H</em> of points that remain inside the square for all time is the intersection of all the nested horseshoes for <em>h</em> and <em>h</em><sup>-1</sup>.

Just like the tent map, the horseshoe map can be analyzed using itineraries. Let’s define L to be the left side of the vertical horseshoe, and R to be the right side.

![[Chaos Theory - Introduction (Making Sense out of Chaos & Horseshoe)/Figures-Chaos_9.png|350]]

We denote the left and right arms of the horseshoe as L and R, respectively, and use these labels to produce the itineraries of orbits in <em>H</em>.

Now if we take any point in<em> H</em>, we can compute the itinerary of its forward orbit. And because the horseshoe is invertible, we can determine the itinerary for the backward orbit as well.

For instance, let’s say we start with a point in region L and when we run the forward orbit, we get LRRLRR…, onward to infinity. When we run the backward orbit, we get LRRLRR…. So we can write its itinerary as …LRRLRR<u>L</u>RRLRR…, with the underline denoting our starting point. This is a period-3 orbit.

Now do this for every point in <em>H</em>.

![[Chaos Theory - Introduction (Making Sense out of Chaos & Horseshoe)/Figures-Chaos_10-Revised.png]]

The horseshoe has periodic points of every period, and the periodicity is reflected in the itineraries.

With those itineraries in hand, we have a complete description of the horseshoe map — we understand it fully  — even though (as with the tent map) it possesses chaotic dynamics: points of every period, sensitive dependence on initial conditions, and so on.

Now we can see how Smale’s horseshoe can describe more clearly the chaos in Poincaré’s three-body problem. In his chaotic horseshoe, there must be a fixed point (let’s call it <em>p</em>) with the itinerary …LLL<u>L</u>LLL…, because there exist points of every possible itinerary. That means there must also be a point — let’s call this one <em>q </em>— with the itinerary …LLL<u>R</u>LLL…. The forward orbit of this point approaches <em>p</em> (we say “into the future”), as does its backward orbit (“into the past”).

![[Chaos Theory - Introduction (Making Sense out of Chaos & Horseshoe)/Figures-Chaos_11_Revised.png|350]]

In Smale’s horseshoe, the point <em>q</em>, with itinerary …LLL<u>R</u>LLL…, approaches the fixed point <em>p</em>, with itinerary …LLL<u>L</u>LLL…, in both the future and the past.

Meanwhile, Poincaré had observed that the fixed points of some functions possess an attracting and a repelling direction. This means there is a curve of points moving toward the fixed point, like a vein returning blood to the heart, and a curve of points moving away, like an artery sending blood into the body. If these curves cross, the points of intersection, called homoclinic points, have the curious property that they approach the fixed point both in the future and in the past.

![[Chaos Theory - Introduction (Making Sense out of Chaos & Horseshoe)/Figures-Chaos_12_Revised.png|400]]

The point <em>q </em>is a homoclinic point because it approaches the fixed point <em>p </em>in both forward and backward time. When this happens, the curves produce a homoclinic tangle and display chaotic behavior — as in the horseshoe.

Smale pointed out that <em>q</em> is a homoclinic point, since its orbit approaches <em>p</em> in the future and the past. Crucially, Smale also proved the converse: If you have a homoclinic point (as Poincaré did), then you have a horseshoe. And since we know that horseshoes are chaotic, Poincaré’s system must be similarly chaotic. In other words, Poincaré’s complicated system — and any system with a homoclinic point — behaves like Smale’s simpler one. Understand the horseshoe, and you can get a handle on chaos itself.

Smale also proved that this chaos is robust. If we were to map the square to a slightly different horseshoe, the resulting map would possess identical chaotic behavior. Despite the local instability in the system, the global behavior is extremely stable. That is, this chaos is not fleeting, even under small perturbations. Chaos itself turns out to be stable.

Chaos theory would go on to grab the public’s attention. It was presented as “a new paradigm in scientific modeling” in a 1986 article in <em>Scientific American</em>, and the subtitle of James Gleick’s bestselling 1987 book <em>Chaos </em>is provocative: “Making a New Science.” Chaos sprang up in pop culture such as in the 1990 novel <em>Jurassic Park</em> and in Tom Stoppard’s 1993 play <em>Arcadia.</em>

While some mathematicians bristled at the hype — dynamical systems was nothing new, after all — the impact of chaotic systems on mathematics and science was profound. The existence of chaos showed that even in a deterministic system, we may be unable to accurately predict the future because of its sensitive dependence on initial conditions. But because of tools like Smale’s horseshoe, we can still extract useful information from these systems.
