---
title: "Integer Factorization - Prime Factorization"
created: 2021-09-13T05:24:57.357-05:00
modified: 2021-09-13T05:24:57.357-05:00
parent: "[[Number Theory]]"
children: []
---
In number theory, <strong>integer factorization</strong> is the decomposition of a composite number into a product of smaller integers. If these integers are further restricted to prime numbers, the process is called <strong>prime </strong><strong>factorization</strong>
# Factorization Algorithms

The method will work, but will be slow. "How big are your numbers?" determines the method to use:
- Less than 2^16 or so: Lookup table.
- Less than 2^70 or so: [Richard Brent's modification](http://wwwmaths.anu.edu.au/~brent/pub/pub051.html) of [Pollard's rho algorithm](http://en.wikipedia.org/wiki/Pollard%27s_rho_algorithm).
- Less than 10^50: [Lenstra elliptic curve factorization](http://en.wikipedia.org/wiki/Lenstra_elliptic_curve_factorization)
- Less than 10^100: [Quadratic Sieve](http://en.wikipedia.org/wiki/Quadratic_sieve)
- More than 10^100: [General Number Field Sieve](http://en.wikipedia.org/wiki/General_number_field_sieve)
