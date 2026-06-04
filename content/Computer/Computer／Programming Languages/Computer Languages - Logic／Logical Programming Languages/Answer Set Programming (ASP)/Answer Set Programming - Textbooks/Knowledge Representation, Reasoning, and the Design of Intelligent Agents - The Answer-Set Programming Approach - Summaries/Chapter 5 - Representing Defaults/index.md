---
title: "Chapter 5 - Representing Defaults"
created: 2019-03-31T20:40:11.701-05:00
modified: 2019-11-02T13:57:38.959-05:00
parent: "[[Knowledge Representation, Reasoning, and the Design of Intelligent Agents - The Answer-Set Programming Approach - Summaries]]"
children: []
---
related article: [[Classical Negation - Default Negation - Negation as Failure (NAF) - Logical Negation]]
# Representing Defaults

"normally elements of class C have property P" is often represented by the rule:
```
p(X) :- c(X),            % X is of class C
        not ab(d(X)),    % ab(d(X)) is maybe false
        not -p(X).       % p(X) is maybe true
```

> [!expand]- example: click here to expand...
> - max, sara, marcus are persons
> - normally every person is asian
>
> ```
> % KNOWLEDGE BASE
> person(max).
> person(sara).
> person(marcus).
>
> % default rule
> asian(X) :- person(X),
>             not ab(d_asian(X)),
>             not -asian(X).
> ```
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "queries",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "answers",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       "<span style=\"white-space: pre-wrap\"><code>asian(max).</code></span>",
>       "yes"
>     ],
>     [
>       "<span style=\"white-space: pre-wrap\"><code>asian(sara).</code></span>",
>       "yes"
>     ],
>     [
>       "<span style=\"white-space: pre-wrap\"><code>asian(marcus).</code></span>",
>       "yes"
>     ]
>   ]
> }
> ```
# Exceptions to Defaults

> [!expand]- Click here to expand...
> there are 2 types of exceptions to defaults:
> - <strong>weak exceptions</strong> - render the default inapplicable
> - <strong>strong exceptions</strong> - refute the default's conclusion
>
> ```
> ab(d(X)) :- not -e(X).
> ```
> ```
> ab(d(X)) :- not -e(X).
> -p(X) :- e(X).
> ```
>
> > [!expand]- example: click here to expand...
> > - max, sara, marcus, erina are persons
> > - normally every person is asian
> > - a person born in mars is not asian
> > - max is born in mars
> > - marcus is not born in mars
> > - it is unknown whether sara and erina is born in mars
> > - sara is not asian
> >
> > ```
> > % KNOWLEDGE BASE
> > person(max).
> > person(sara).
> > person(marcus).
> >
> > born_in_mars(max).
> > -born_in_mars(marcus).
> >
> > % default rule
> > asian(X) :- person(X),
> >             not ab(d_asian(X)),
> >             not -asian(X).
> >
> > % weak exception
> > ab(d_asian(X)) :- person(X),
> >                   not -born_in_mars(X).
> >
> > % strong exception
> > ab(d_asian(sara)) :- person(sara),
> >                      not -born_in_mars(sara).
> > -asian(sara) :- person(sara).
> > ```
> >
> > ```merge-table
> > {
> >   "rows": [
> >     [
> >       {
> >         "content": "queries",
> >         "header": true,
> >         "bg": "#F4F5F7"
> >       },
> >       {
> >         "content": "answers",
> >         "header": true,
> >         "bg": "#F4F5F7"
> >       }
> >     ],
> >     [
> >       "<span style=\"white-space: pre-wrap\"><code>asian(max).</code></span>",
> >       "no"
> >     ],
> >     [
> >       "<span style=\"white-space: pre-wrap\"><code>asian(sara).</code></span>",
> >       "no"
> >     ],
> >     [
> >       "<span style=\"white-space: pre-wrap\"><code>asian(marcus).</code></span>",
> >       "yes"
> >     ],
> >     [
> >       "<span style=\"white-space: pre-wrap\"><code>asian(erina).</code></span>",
> >       "unknown"
> >     ]
> >   ]
> > }
> > ```
# Exceptions to Defaults: Special Case

> [!expand]- Click here to expand...
> if information about exception <em>e</em> is complete then representation of weak and strong exceptions can be simplified
> ```
> ab(d(X)) :- e(X).
> ```
> ```
> -p(X) :- e(X).
> ```
>
> > [!expand]- example: click here to expand...
> > - max, sara, marcus, erina are persons
> > - normally every person is asian
> > - a person born in mars is not asian
> > - max is born in mars
> > - marcus is not born in mars
> > - sara is born in mars
> > - erina is not born in mars
> > - it is unknown whether sara and erina is born in mars
> > - sara is not asian
> >
> > ```
> > % KNOWLEDGE BASE
> > person(max).
> > person(sara).
> > person(marcus).
> >
> > born_in_mars(max).
> > born_in_mars(sara).
> > -born_in_mars(marcus).
> > -born_in_mars(erina).
> >
> > % default rule
> > asian(X) :- person(X),
> >             not ab(d_asian(X)),
> >             not -asian(X).
> >
> > % weak exception
> > ab(d_asian(X)) :- person(X),
> >                   born_in_mars(X).
> >
> > % strong exception
> > -asian(sara) :- person(sara).
> > ```
> >
> > ```merge-table
> > {
> >   "rows": [
> >     [
> >       {
> >         "content": "queries",
> >         "header": true,
> >         "bg": "#F4F5F7"
> >       },
> >       {
> >         "content": "answers",
> >         "header": true,
> >         "bg": "#F4F5F7"
> >       }
> >     ],
> >     [
> >       "<span style=\"white-space: pre-wrap\"><code>asian(max).</code></span>",
> >       "no"
> >     ],
> >     [
> >       "<span style=\"white-space: pre-wrap\"><code>asian(sara).</code></span>",
> >       "no"
> >     ],
> >     [
> >       "<span style=\"white-space: pre-wrap\"><code>asian(marcus).</code></span>",
> >       "yes"
> >     ],
> >     [
> >       "<span style=\"white-space: pre-wrap\"><code>asian(erina).</code></span>",
> >       "yes"
> >     ]
> >   ]
> > }
> > ```
# Knowledge Bases with Null Values

> [!expand]- Click here to expand...
> ## <strong>NULL - INFINITE SET</strong>
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Professor",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       },
>       {
>         "content": "Course",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "left"
>       }
>     ],
>     [
>       {
>         "content": "mike",
>         "align": "left"
>       },
>       {
>         "content": "pascal",
>         "align": "left"
>       }
>     ],
>     [
>       {
>         "content": "john",
>         "align": "left"
>       },
>       {
>         "content": "c",
>         "align": "left"
>       }
>     ],
>     [
>       {
>         "content": "null",
>         "align": "left"
>       },
>       {
>         "content": "prolog",
>         "align": "left"
>       }
>     ]
>   ]
> }
> ```
> ```
> prof(mike).
> prof(john).
> course(pascal).
> course(c).
> course(prolog).
>
> teaches(mike, pascal).
> teaches(john, c).
> teaches(null, prolog).
>
> -teaches(P,C) :- prof(P),
>                  course(C),
>                  not ab(d_not_teaches(P,C)),
>                  not teaches(P,C).
>
> ab(d_not_teaches(P,C) :- teaches(null, C).
> ```
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "queries",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "answers",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       "<span style=\"white-space: pre-wrap\"><code>teaches(mike,c)</code></span>",
>       "no"
>     ],
>     [
>       "<span style=\"white-space: pre-wrap\"><code>teaches(mike,pascal)</code></span>",
>       "yes"
>     ],
>     [
>       "<span style=\"white-space: pre-wrap\"><code>teaches(mike, prolog)</code></span>",
>       "unknown"
>     ]
>   ]
> }
> ```
>
> <strong>NULL - FINITE SET</strong>
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Professor",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Course",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       "mike",
>       "pascal"
>     ],
>     [
>       "john",
>       "c"
>     ],
>     [
>       "{mike, john}",
>       "prolog"
>     ]
>   ]
> }
> ```
>
> simply append program by
> ```
> teaches(mike, prolog) | teaches(john, prolog).
> ```
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "queries",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "answers",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       "<span style=\"white-space: pre-wrap\"><code>teaches(mike,c)</code></span>",
>       "no"
>     ],
>     [
>       "<span style=\"white-space: pre-wrap\"><code>teaches(mike,pascal)</code></span>",
>       "yes"
>     ],
>     [
>       "<span style=\"white-space: pre-wrap\"><code>teaches(mike, prolog)</code></span>",
>       "unknown"
>     ],
>     [
>       "<span style=\"white-space: pre-wrap\"><code>teaches(mike, prolog) and</code></span>\n\n<span style=\"white-space: pre-wrap\"><code>teaches(john, prolog)</code></span>",
>       "no"
>     ]
>   ]
> }
> ```
# Simple Priorities between Defaults

> [!expand]- Click here to expand...
> start with orphan story from 4.1
> - all children are entitled to program 0
> - orphans are entitled to program 1
> - no one can receive more than 1 program
> - program 1 is preferable over program 0
>
> ```
> program(0).
> program(1).
>
> % all children are entitled to program 0
> entitled(X,0) :- child(X),
>                  not ab(d0(X)),
>                  not -entitled(X,0).
>
> % orphans are entitled to program 1
> entitled(X,1) :- orphan(X),
>                  not ab(d1(X)),
>                  not -entitled(X,1).
>
> % no one can receive more than 1 program
> -entitled(X,N2) :- program(N1), 
>                    program(N2),
>                    record_for(X),
>                    entitled(X,N1),
>                    N1 != N2.
>
> % program 1 is preferable over program 0 (strong exception)
> ab(d0(X)) :- not -orphan(X).
> -entitled(X,0) :- orphan(X).
>
> % if a person is not known to be an orphan or not an orphan, then that person would receive no program
> % in other words, that person needs human assistance to "check status" of that person
> check_status(X) :- not -orphan(X),
>                    not orphan(X).
> ```
# Inheritance Hierarchies with Defaults

> [!expand]- Click here to expand...
> start with narwhal example from 4.3
>
> instead of saying all submarines are black, we say that normally submarines are black
> ```
> has_color(X,black) :- member(X,sub).
>
> by
>
> has_color(X,black) :- member(X,sub),
>                       not ab(d_hc(X)),
>                       not -has_color(X,black).
> ```
>
> suppose we learned about a submarine named DeepBlue and the color of DeepBlue is blue
> ```
> object(deep_blue).
> color(blue).
> is_a(deep_blue, sub).
> has_color(deep_blue, blue).
> ```
>
> since colors of submarines can only be of one color (see rule on lines 29-31 from section 4.3), the new blue submarine is a strong exception to our default

> [!expand]- weakening disjointness of hierarchies
> ```
> % member and siblings stays the same
> member(X,C) :- is_a(X,C).
> member(X,C) :- is_a(X,C0),
>                subclass(C0,C).
> siblings(C1,C2) :- is_subclass(C1,C),
>                    is_subclass(C2,C),
>                    C1 != C2.
>
> % -member changes
> -member(X,C2) :- member(X,C1),
>                  siblings(C1,C2),
>                  not member(X,C2).
>
> ```
>
> now we introduce an amphibious vehicle called Darling, that is both a car and submarine
> ```
> object(darling).
> is_a(darling, car).
> is_(darling, sub).
> ```
# Specificity Principle

> [!expand]- Click here to expand...
> - eagles and penguins are birds
> - birds are animals
> - cats are animals
> - Sam is an eagle
> - Tweety is a penguin
> - Tabby is a cat
>
> ```
> class(animal).
> class(penguin).
> class(cat).
> class(bird).
> class(eagle).
>
> object(tabby).
> object(tweety).
> object(sam).
>
> is_subclass(eagle, bird).
> is_subclass(penguin, bird).
> is_subclass(bird, animal).
> is_subclass(cat, animal).
>
> subclass(C1,C2) :- is_subclass(C1,C2).
> subclass(C1,C2) :- is_subclass(C1,C),
>                    subclass(C,C2).
>
> is_a(tabby, cat).
> is_a(tweety,penguin).
> is_a(sam, eagle).
>
> member(X,C) :- is_a(X,C).
> member(X,C) :- is_a(X,C1),
>                subclass(C1,C).
>
> siblings(C1,C2) :- subclass(C1,C),
>                    subclass(C2,C),
>                    C1 != C2.
>
> -member(X,C1) :- member(X,C2),
>                  siblings(C1,C2),
>                  C1 != C2,
>                  not member(X,C1).
> ```
>
> our agent should now be able to answer correctly that Tweety is not an eagle but is a penguin, a bird, and an animal. 
>
> now we add default properties of classes
> - animals normally don't fly
> - birds normally fly
> - penguins normally don't fly
>
> ```
> % animals normally don't fly
> -fly(X) :- member(X,animal),
>            not ab(d1(X)),
>            not fly(X).
>
> % birds normally fly
> fly(X) :- member(X,bird),
>           not ab(d2(X)),
>           not -fly(X).
>
> % penguins normally don't fly
> -fly(X) :- member(X,penguin),
>            not ab(d3(X)),
>            not fly(X).
>
> % X is abnormal w.r.t. d1 if X might be a bird 
> ab(d1(X)) :- not -member(X,bird).
>
> % X is abnormal w.r.t. d2 if X might be a penguin
> ab(d2(X)) :- not -member(X,penguin).
> ```
# Indirect Exceptions to Defaults

> [!expand]- Click here to expand...
> <strong>indirect exceptions </strong>- is another type of exceptions to defaults (other 2 are: weak and strong exceptions)
>
> consider the inconsistent program below
> ```
> p(X) :- c(X),
>         not ab(d(X)),
>         not -p(X).
> q(X) :- p(X).
>
> c(a).
> -q(a).
> ```
>
> TODO page 104
