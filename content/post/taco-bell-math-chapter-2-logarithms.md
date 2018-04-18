---
title: Taco Bell Math, Chapter 2 - Logarithms
date: 2018-04-17
description: 
tags:
  - math
mathjax: true
cover:
  image: /images/logrhythms.jpg
  caption: Nature decided the cross section of a log should look exactly like the plot of Log. Does that count as a homonym?
  style: full
---

_Yes I know chapter 1 hasn't been written yet. But that hasn't been a problem [for a while now][1]._

With the amount of math Euler created, he must've pulled a proportionately large number of late nights; I think it's safe to say he would've been quite the Taco Bell conniseur. But that only begs the question - what would his favorite order have been? That may or may not be what this post uncovers, in fact, that question didn't even cross my mind until sitting down to write it. Let's agree that our boy Lenny's favorite order is currently in _superposition_, and this post may or may not collapse that longstanding wavefunction. This post is starting to feel a bit recursive...

Anyway, I was at Taco Bell with a good friend of mine when we got to talking about the beauty of the [Euler product formula][2] and its proof. It reads:

\\[ \zeta(s) = \sum_{n=1}^\infty\frac{1}{n^s} = \prod\frac{1}{1-p^{-s}}, \forall p \in \mathbb{P} \\]

An infinite sum over the naturals ends up equalling _a product over the primes_...it's nerdy, but I get an adrenaline rush when thinking about that. And it's actually quite simple. I won't go into it much, as the Wikipedia article linked above does a great job at illustrating the proof. In short though, Euler takes the first element of the infinite series (excluding 1) and multiplies a copy of of the series by that element. He then subtracts the copy from the original, yielding a new series **sieved of all multiples of that element**. Rinse and repeat this algorithm to generate the primes!

Then, the computer scientists in us revealed themselves:

{{< convo sep=":" >}}

Chris :: You know what would be more interesting: how many times would a number that's already been exluded have been hit?

Pierce :: What do you think the runtime of that is?

{{< /convo >}}

In other words, mapping the natural numbers \\( \to \\) lists of their factors. After arguing over the superiority of the natural vs. binary logarithm, our intuitions told us the runtime was \\( O(n\log{n}) \\); however, we never proved that rigorously. Leave a comment if you've got one!

But all this talk of logarithms got me thinking..._what the hell even is a logarithm?_

_To be continued..._

<!-- interactive plot of 2D map of logarithm x vs base -->
<!-- explain and comment on complex logarithms -->
<!-- complex log conformal map looks like a vanishing point -->
<!-- what if for the above: you're in the middle of the sphere, and you only see one hemisphere? -->
<!-- modular forms are hiding in somewhere in here... -->


[1]: https://www.google.com/search?q=when+was+special+relativity+published
[2]: https://en.wikipedia.org/wiki/Proof_of_the_Euler_product_formula_for_the_Riemann_zeta_function