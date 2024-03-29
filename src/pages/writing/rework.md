---
templateKey: blog-post
title: Rework
date: 2014-12-10T15:35:42.410Z
description: What's reusable and what's not?
---
<p><a href="https://twitter.com/hazelcough">@hazelcough</a>, Michelle Bu</p>

<p><a href="http://michelle.github.io/css-first/#/">Slides</a></p>

<p>At Stripe, there were a lot of developers who needed that tiny bit of CSS to ship something.</p>

<p><em>There was a lot of nesting.</em> Almost arbitarily, causing things to be designed three times over. Meant you could never grep for anything. This problem caused the three levels of CSS degredation:</p>

<h2 id="determination">Determination</h2>

<p>MVP features. Yay, we brought in Sass and we shipped the thing!</p>

<h2 id="development">Development</h2>

<p>We improve features, introduce a few bugs, and there's some code stink but it's okay! We'll fix it later.</p>

<h2 id="denial">Denial</h2>

<p>Everything still works! Errr monkey no see/no hear/whatever, it's fine. <em>It's fine.</em></p>

<h2 id="despair">Despair</h2>

<p>Everything is growing so friggin' fast. CSS is growing at three poops per week.</p>

<p><em>We need to treat CSS like a first-class tool.</em> We write Javascript with linters and with tests; CSS needs these things too!</p>

<p><em>We need conventions.</em> So, at Stripe they started a component library.</p>

<p><em>Developers who didn't know CSS used it in their other internal projects.</em> It meant that they didn't have to bother designers for it when they just wanted to get something up quickly.</p>

<h2 id="noconventions">-No- Conventions</h2>

<p>Coming up with a convention style speed up developers and kept people from arbitarily adding CSS to the bottoms of Sass files.</p>

<p>Abstracting away components allows them to easily change things.</p>

<p>Enter the <a href="https://github.com/reworkcss/rework">Rework</a> framework!</p>

<h2 id="notests">-No- Tests</h2>

<p>Testing is hard because of all of the states CSS has. </p>

<h2 id="sowhycare">So, why care?</h2>

<p>There are already a bajillion component libraries, I thought!</p>

<p>With your own component library, you're able to spend 90% of your time building the components and 10% on polish. If we think about CSS first, we can think about CSS <em>less</em>.</p>
