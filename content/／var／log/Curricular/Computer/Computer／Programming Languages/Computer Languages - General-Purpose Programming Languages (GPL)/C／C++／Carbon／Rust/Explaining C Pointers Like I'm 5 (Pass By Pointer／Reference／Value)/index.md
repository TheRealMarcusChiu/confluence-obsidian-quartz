---
title: "Explaining C Pointers Like I'm 5 (Pass By Pointer／Reference／Value)"
created: 2021-12-12T00:32:55.408-06:00
modified: 2021-12-12T01:48:40.649-06:00
parent: "[[C／C++／Carbon／Rust]]"
children: []
---
see: [[Pass by Reference - Pass by Value - Pass by Pointer]]
# Explaining C Pointers Like I'm 5

You live in a town with only one very, <em>very</em> long street. Your house is on this street. Your house has a number on it: an address. If you write this address down on a piece of paper, you have just created a <strong>pointer</strong> to your house.

Now let's say you wish to have someone come over to your house for lunch. In order to access your house, they must know where to find it on the very long street. You hand them the piece of paper with the address of your house, the pointer. They can now find your house, come inside, and eat lunch. <strong>This is called a pass-by-pointer</strong>.

Alternatively, you can recite the address to them and have <em>them</em> write it down. This is a <strong>pass-by-reference</strong>.

There is a third way to enable the person to eat lunch at your house. You can go out to the site, jack the house off its foundation, and bring it to them. This is <strong>pass-by-value</strong>, and the ridiculousness of the analogy explains why we rarely, if ever, pass objects by value in C++. It's a whole lot of work for nothing when we can just pass by pointer or reference. (Or else, we could have just passed them the <em>food</em> by value instead of inviting them over.)

There are a few things to watch out for with pointers, however.

An address of "0" is called a <strong>null pointer</strong>. It's something everyone has agreed upon for "no address". If you give anyone an address of 0, they'll know not to bother trying to come over for lunch - the address doesn't exist. If you don't know the address, set it to this.

If you write down some random number as the address, this is called a <strong>wild pointer</strong>, and it's a very bad thing. If you gave someone this address, any number of unpredictable outcomes could happen (what we call <strong>undefined behavior</strong>)...
- They could walk into a total stranger's house and get stopped or arrested before they can polish off the meatloaf. A computer has several run-time errors that it might throw, the most familiar of these being a <strong>segmentation fault</strong>.
- The person could walk into the wrong house and because they think it's yours and you had invited them over for lunch, they could do something totally weird...like eat all the pickles in the unsuspecting person's fridge. (Rule of thumb: "If the error is weird, it's memory-related; it often has to do with pointers.)
- The person could try to go to a house and find an empty lot. Then they wander around in the empty lot, confused and disillusioned. Desperate for the promised lunch, they may even start eating sticks and rocks. (This is called <strong>accessing uninitialized memory</strong>, and the outcome is also quite unpredictable.)
- You could tear down your house, and <em>then</em> give them the address. They will then try to find lunch in the rubble, and probably wind up chewing on leftover framing timber. (This is why you should always set pointers to <code>0</code> after you finish deleting whatever the pointer points to.)
- The person could hike clear off the end of the road into the wilderness, where they must try to survive off of grubs and tree bark. (How could you do this to your friend, you terrible, terrible person??) Going past the end of memory usually just fails, but this is undefined behavior we're talking about...your friend may do just about anything out there to try and find your house and/or lunch.
