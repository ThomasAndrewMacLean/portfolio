---
templateKey: blog-post
title: SVG Is Awesome
date: 2014-12-12T15:36:46.424Z
description: Fun stuff you didn't know about
tags:
  - conferences
---
<p><a href="https://twitter.com/brnnbrn" target="_blank">@brnnbrn</a>, Brenna O'Brien</p>

<p><a href="http://talks.brennaobrien.com/svg/#/" target="_blank">Slides</a></p>

<h1>Anatomy of an SVG Element</h1>

<p>Everything is relative to the viewBox. viewBox Rules Everything Around Me! (V.R.E.A.M!)</p>

<p>_Editorialized <code>&lt;text&gt;</code>: allows you to have huge display type that's completely responsive.</p>

<p><em>Curved text</em>: Create a path, and then curve type to that path. </p>

<p><code><defs></code>: like SVG variables.

<p><em>Fancy Fills</em>: SVG has its own gradient syntax. Sweet! Add it to a <code>&lt;def&gt;</code>, and <em>literally anything you want can have a gradient</em>. Same with having images as background colors!</p>

<p><code><pattern></code>: Turns any SVG element into a fill. Most fun with images, because you can fill <em>anything with gifs</em>.</p>

<p><code><image></code>: they <em>need</em> a width and height. If not they'll disappear :(</p>

<p><code>preserveAspectRatio</code>: It can fill fill shapes automatically if you get the values right.</p>

<h2>So, what have we learned?</h2>

<p><em>Editorialized text</em> + <em>gradients</em> = Gradient text for <strong>all</strong> the browsers!</p>

<p><em>Editorialize text</em> + <em>gif fill</em> = Fill text with gifs! AGH! "I don't know what you would do with that on a production website, but I hope one of you finds a use case."</p>

<p><code><mask></code>: like a cookie cutter. 

<p><code>clipPath</code>: stamps out with hard edges. With <code><mask></code>s, you can fade out, like if you had a gradient.</p>

<p><em>Filter Effects</em>: You can have blurred backgrounds with SVG filters.</p>

<p><em>SVG Instagram!</em>: you can combine filters (<code>feTurbulence</code> for noise, <code>feComponentTransfer</code> for RGB channel adjustments, <code>feGaussianBlur</code>) to get rad Instagram filters. Whoo!</p>

<p><em>SVGs that draw themselves</em>: You can have beautiful line art that draw themselves, like Vox's <a href="http://product.voxmedia.com/2013/11/25/5426880/polygon-feature-design-svg-animations-for-fun-and-profit" target="_blank">playstation that drew itself</a>: long <code>stroke-dasharray</code> + animated <code>stroke-dashoffset</code>. That's gorgeous.</p>

<h2>But... why not just <code>&lt;animate&gt;</code> with CSS &amp; JS?</h2>

<p>Er, normally that's way better, BUT:</p>

<p>tweans! <a href="http://codepen.io/brenna/details/tHpBh" target="_blank">Morphing Quarters</a> A path's</code>d</code> attribute. </p>

<h2>Go Exploring!</h2>

<ul>
<li><a href="http://svgpocketguide.com/" target="_blank">Pocket Guide to Writing SVG</a></li>

<li><a href="https://developer.mozilla.org/en-US/docs/Web/SVG" target="_blank">SVG on MDN</a></li>

<li><a href="http://tutorials.jenkov.com/svg/index.html" target="_blank">Jenkov</a></li>
</ul>

<p>Relevant: <a href="http://www.polygon.com/a/ps4-review" target="_blank">PS4 Review</a> from Polygon, <a href="http://www.polygon.com/a/xbox-one-review" target="_blank">XBox One Review</a></p>
