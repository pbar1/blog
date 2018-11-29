---
title: Racing with Promises in JavaScript
date: 2018-02-20
description: Stumbling upon an unlikely use for JS Promises
tags:
  - software
cover:
  image: http://pixel.nymag.com/imgs/daily/vulture/2015/04/06/06-flying-cars.w529.h352.jpg
  caption: Let's hope we have some error handling on this one
  style: full
---

A few days ago I was watching the video [_Topology vs "a" Topolgy_][1] by PBS Infinite Series when I made an interesting little connection. At the 6:15 mark, the hostess brilliantly explains the mathematical terms _union_ and _intersection_ from set theory using the idea of "indicator machines". Here's a brief summary:

An indicator machine is a computer program that terminates when a given condition is true. Let's say we have sets A, B, and C, and they each have their own indicator machine. We also have an element `x` that  we want to run some tests on.

- Does `x` appear in any set A, B, or C (their union)?
    - Feed `x` to every indicator machine and wait for **one** of them to terminate
- Does `x` appear in all sets A, B and C (their intersection)?
    - Feed `x` to every indicator machine and wait for **all** of them to terminate

Now, since I've been working with a lot of JavaScript lately, that explanation sounded weirdly familiar. Since I'd basically been dreaming in `async`/`await`, it clicked. Her explanation for _intersection of sets_ was basically the definition of JavaScript's `Promise.all` method!

So if _intersection_ is like `Promise.all`, what is _union_ similar to? My guess was `Promise.any`; a quick search showed that I was on the right track, as Bluebird promises have that method. But in ES6, that method is called `Promise.race`.

You give `Promise.race` an iterable of promises, and as soon as one of the promises resolves (or rejects...watch out for this), returns that value. While I don't envision this method being too terribly popular, I can see one case where it might be used. Say you have a list of mirror urls in different geographical region, and want to find the one with the lowest latency; wrap a request to each one and make 'em `Promise.race`!

tldr;

- intersection of sets ~ `Promise.all`
- union of sets ~ `Promise.race`

[1]: https://youtu.be/tdOaMOcxY7U?t=6m15s
