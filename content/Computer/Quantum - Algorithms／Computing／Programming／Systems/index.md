---
title: "Quantum - Algorithms／Computing／Programming／Systems"
created: 2019-03-16T03:15:36.112-05:00
modified: 2026-01-03T00:07:20.412-06:00
parent: "[[Computer]]"
children:
  - "[[Grover’s Algorithm]]"
  - "[[Quantum Information Theory]]"
---
Eventually, you will want to learn aspects of all of these fields, but when starting you can use any for an entry into the field. Within each field, the subjects you will want to know are:
- Physics: First learn [[Quantum Physics - Quantum Mechanics|quantum mechanics]]. At more advanced levels, various aspects of quantum information overlap with Atomic, Molecular, and Optical (AMO) physics, condensed matter, and high energy.
- Math: First linear algebra and probability. Later my preferences would be to learn some group and representation theory, random matrix theory, and functional analysis, but eventually, most fields of math have some overlap with quantum information, and other researchers may emphasize different areas of math.
- Computer Science: Most theory topics are relevant although are less crucial at first: i.e. algorithms, cryptography, information theory, error-correcting codes, optimization, complexity, machine learning. If you haven't had any CS theory exposure, undergrad algorithms is a good place to start because it will show you CS-theory ways of thinking, including ideas like the asymptotic analysis.

# Textbooks
- [Quantum Computation and Quantum Information](https://books.google.com/books?id=-s4DEy7o-a0C&hl=en) - by Nielsen and Chuang
- [Classical and Quantum Computation](https://books.google.com/books?id=08vZYhafYEAC&printsec=frontcover&dq=isbn:0821832298&hl=en&sa=X&ved=0ahUKEwjZhqH7m_vfAhUO7awKHWstC5QQ6wEIKzAA#v=onepage&q&f=false) - by Kitaev, Shen, and Vyalyi

# Online Sources
- Quantum Computing Series - [https://medium.com/@jonathan_hui/qc-quantum-computing-series-10ddd7977abd](https://medium.com/@jonathan_hui/qc-quantum-computing-series-10ddd7977abd)
- [David Mermin's lecture notes](http://www.lassp.cornell.edu/mermin/qcomp/CS483.html) are elementary and have a CS focus
- [John Preskill's lecture notes](http://www.theory.caltech.edu/people/preskill/ph229/#lecture) are slightly more advanced and use a physics perspective.

# Specialized Sources
- [Quantum Algorithms](https://www.cs.umd.edu/~amchilds/qa/) lecture notes by Andrew Childs
- [From Classical to Quantum Shannon Theory](http://arxiv.org/abs/1106.1445) by Mark Wilde. Thorough and detailed with plenty of exercises.
- [The Functional Analysis of Quantum Information Theory](http://arxiv.org/abs/1410.7188) written by Gupta, Mandayam, and Sunder based on lectures by Effros, Paulsen, Pisier, and Winter. Denser and focused on the math side more than applications.
- [Alice and Bob meet Banach](http://math.univ-lyon1.fr/~aubrun/ABMB/index.html) by Aubrun and Szarek. Incomplete textbook draft, but it looks like it'll be the definitive treatment of the probabilistic method in quantum information.
- [The Mathematics of Entanglement](https://arxiv.org/abs/1604.01790) by Brandao, Christandl, Walter, and myself. Idiosyncratic and incomplete lecture notes on some of our pet topics.

If you want to get a flavor of what research is currently hot, then one place to look is at the program of the last few [QIP workshops](http://qipconference.org/). A less curated list of interesting papers can be found at [scirate.com](http://scirate.com/), where looking at the most cited papers in the last year should bring up some interesting work
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

- [[Quantum Machine Learning (QML)]]

# Real-World Applications
- <strong>Cryptography</strong> - Quantum algorithms like Shor's could break many encryption schemes, leading to the development of quantum-resistant cryptography
- <strong>Optimization</strong> - Quantum computers might solve complex optimization problems (like supply chain management, scheduling, or route planning) that classical computers struggle with
- <strong>Machine Learning</strong> - Quantum machine learning could accelerate data processing and pattern recognition, opening doors to more efficient AI models
- <strong>Drug Discovery and Chemistry</strong> - Quantum simulations could help in modeling complex molecules and reactions, revolutionizing medicine and material science
