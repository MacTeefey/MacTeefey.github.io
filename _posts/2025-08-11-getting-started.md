---
layout: post
title: "New site"
categories: journal
tags: [documentation,sample]
---

I am now running my personal site using Jekyll, hosted by Github Pages. I am using the lagrange theme due to the theme being light weight found [here](https://github.com/lenpaul/lagrange).

This blog is inspired by the design of Steven Morse's personal website found [here](https://stmorse.github.io/). This page in particular is a modification of [Morse's test page](https://stmorse.github.io/journal/Welcome-to-Lagrange.html), because I will using similar elements when describing the machine learning models and data pipelines I will use in my projects.

This post is mainly a test page for different theme/format elements. 

A code block looks like this:

```python
import numpy as np
u = np.random.rand()
if u < 0.1:
  print 'Unlucky'
```

and inline code looks like `this`.

We have *italics*, **bold**, and ***italicized bold*** text.

Some lists are

1. Who's on first.
2. What's on second.
3. He's on third.

and a blockquote is

> A man, a plan, Panama.

Testing some math formatting inline $$\sum_i x_i^2$$, some block...

$$\alpha_{ij} = \sum_{i,j} f(i,j,t) $$

some alignment:

$$
\begin{align*}
\lambda &= \tau + \int_0^t h(s) ds \\
 &= \tau + \sum_i h(x_i)
\end{align*}
$$

and without the `$$`,

\begin{equation}
A \sim \mathcal{N}(0, \frac{1}{\tau})
\label{eq:test}
\end{equation}

which I can reference with Eq. \eqref{eq:test}.  And some collapsible code:

<details>
  <summary><span class="icon">></span>Code</summary>
  <p>
  42  
  </p>
</details>

Here's a margin note test.  Should appear over in the margin over there. 

<div class="marginnote">I came across Morse's website when researching how to utilize espn's fantasy football API.</div>

And the headers are

# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

That'll probably do it for now.

### Questions?


