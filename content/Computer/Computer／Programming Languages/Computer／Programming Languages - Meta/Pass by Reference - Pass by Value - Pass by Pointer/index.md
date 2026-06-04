---
title: "Pass by Reference - Pass by Value - Pass by Pointer"
created: 2021-12-12T01:46:52.459-06:00
modified: 2021-12-12T01:47:49.924-06:00
parent: "[[Computer／Programming Languages - Meta]]"
children: []
---
copied off from: [https://stackoverflow.com/questions/373419/whats-the-difference-between-passing-by-reference-vs-passing-by-value/430958#430958](https://stackoverflow.com/questions/373419/whats-the-difference-between-passing-by-reference-vs-passing-by-value/430958#430958)

First and foremost, <strong>the "pass by value vs. pass by reference" distinction as defined in the CS theory is now obsolete</strong> because <strong>the technique originally defined as "pass by reference" has since fallen out of favor</strong> and is seldom used now.<sup>1</sup>

<strong>Newer languages<sup>2</sup> tend to use a different (but similar) pair of techniques to achieve the same effects</strong> (see below) which is the primary source of confusion.

A secondary source of confusion is the fact that <strong>in "pass by reference", "reference" has a narrower meaning than the general term "reference"</strong> (because the phrase predates it).
---

Now, the authentic definition is:
- When a parameter is <strong>passed by reference</strong>, the caller and the callee <strong>use the same variable</strong> for the parameter. If the callee modifies the parameter variable, the effect is visible to the caller's variable.
- When a parameter is <strong>passed by value</strong>, the caller and callee have <strong>two independent variables</strong> with the same value. If the callee modifies the parameter variable, the effect is not visible to the caller.

Things to note in this definition are:
- <strong>"Variable" here means the caller's (local or global) variable itself</strong> -- i.e. if I pass a local variable by reference and assign to it, I'll change the caller's variable itself, not e.g. whatever it is pointing to if it's a pointer.
	- This is now considered bad practice (as an implicit dependency). As such, <strong>virtually all newer languages are exclusively, or almost exclusively pass-by-value.</strong> Pass-by-reference is now chiefly used in the form of "output/inout arguments" in languages where a function cannot return more than one value.
- <strong>The meaning of "reference" in "pass by reference"</strong>. The difference with the general "reference" term is that <strong>this "reference" is temporary and implicit.</strong> What the callee basically gets is <strong>a "variable" that is somehow "the same" as the original one.</strong> How specifically this effect is achieved is irrelevant (e.g. the language may also expose some implementation details -- addresses, pointers, dereferencing -- this is all irrelevant; if the net effect is this, it's pass-by-reference).

---

<strong>Now, in modern languages, variables tend to be of "reference types"</strong> (another concept invented later than "pass by reference" and inspired by it), i.e. the actual object data is stored separately somewhere (usually, on the heap), and only "references" to it are ever held in variables and passed as parameters.<sup>3</sup>

<strong>Passing such a reference falls under pass-by-value</strong> because a variable's value is technically the reference itself, not the referred object. However, <strong>the net effect on the program can be the same as either pass-by-value or pass-by-reference:</strong>
- If a reference is just taken from a caller's variable and passed as an argument, this has the same effect as pass-by-reference: if the referred object is <em>mutated</em> in the callee, the caller will see the change.
	- However, if a variable holding this reference is <em>reassigned,</em> it will stop pointing to that object, so any further operations on this variable will instead affect whatever it is pointing to now.
- To have the same effect as pass-by-value, a copy of the object is made at some point. Options include:
	- The caller can just make a private copy before the call and give the callee a reference to that instead.
	- In some languages, some object types are "immutable": any operation on them that seems to alter the value actually creates a completely new object without affecting the original one. So, passing an object of such a type as an argument always has the effect of pass-by-value: a copy for the callee will be made automatically if and when it needs a change, and the caller's object will never be affected.
		- In functional languages, <em>all</em> objects are immutable.

As you may see, <strong>this pair of techniques is almost the same as those in the definition, only with a level of indirection: just replace "variable" with "referenced object".</strong>

There's no agreed-upon name for them, which leads to contorted explanations like "call by value where the value is a reference". In 1975, Barbara Liskov suggested the term "[call-by-object-sharing](https://en.wikipedia.org/wiki/Evaluation_strategy#Call_by_sharing)" (or sometimes just "call-by-sharing") though it never quite caught on. Moreover, neither of these phrases draws a parallel with the original pair. No wonder the old terms ended up being reused in the absence of anything better, leading to confusion.<sup>4</sup>
---

<strong>NOTE</strong>: For a long time, this answer used to say:
> Say I want to share a web page with you. If I tell you the URL, I'm passing by reference. You can use that URL to see the same web page I can see. If that page is changed, we both see the changes. If you delete the URL, all you're doing is destroying your reference to that page - you're not deleting the actual page itself.
> 
> If I print out the page and give you the printout, I'm passing by value. Your page is a disconnected copy of the original. You won't see any subsequent changes, and any changes that you make (e.g. scribbling on your printout) will not show up on the original page. If you destroy the printout, you have actually destroyed your copy of the object - but the original web page remains intact.

This is <em>mostly</em> correct <em>except</em> the narrower meaning of "reference" -- it being both temporary and implicit (it doesn't have to, but being explicit and/or persistent are additional features, not a part of the pass-by-reference semantic, as explained above). A closer analogy would be giving you a copy of a document vs inviting you to work on the original.
---<sup>1</sup><sub>Unless you are programming in Fortran or Visual Basic, it's not the default behavior, and in most languages in modern use, true call-by-reference is not even possible.</sub><sup>2</sup><sub>A fair amount of older ones support it, too</sub><sup>3</sup><sub>In several modern languages, all types are reference types. This approach was pioneered by the language CLU in 1975 and has since been adopted by many other languages, including Python and Ruby. And many more languages use a hybrid approach, where some types are "value types" and others are "reference types" -- among them are C\#, Java, and JavaScript.</sub>

<sup>4</sup><sub>There's nothing bad with recycling a fitting old term <em>per se,</em> but one has to somehow make it clear which meaning is used each time. Not doing that is exactly what keeps causing confusion.</sub>
