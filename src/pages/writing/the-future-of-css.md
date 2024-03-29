---
templateKey: blog-post
title: The Future of CSS
date: 2014-12-12T15:38:22.956Z
description: Tab Atkins
tags:
  - conferences
---
<p><a href="https://twitter.com/tabatkins" target="_blank">@tabatkins</a>, Tab Atkins. </p>

<p><a href="http://www.xanthir.com/talks/2014-12-09/" target="_blank">Link to slides</a></p>

<p><code>image()</code>: fallbacks to color and a <a href="http://dev.w3.org/csswg/css-images-3/" target="_blank">bunch of other things</a></p>

<p><code>image-set()</code>: Lets you specify multiple resolutions of an image, i.e. for retina</p>

<p><code>cross-fade</code>: smoothly tweet between two images.</p>

<p><code>image-rendering</code>: Lets browser understand how it should scale up images. Crisp edges! Oh baby!</p>

<p><code>flex-box()</code>: Hey, you should be <a href="http://dev.w3.org/csswg/css-flexbox/" target="_blank">using it already!</a> Basically, it destroys grids with all their terrible math. Yay!</p>

<p><a href="http://gridbyexample.com/" target="_blank">Grid by Example</a>, Rachel Andrew
<a href="http://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank">Grid</a>, CSS-Tricks 
<a href="https://philipwalton.github.io/solved-by-flexbox/" target="_blank">Solved by Flexbox</a>, Philip Walton
<a href="http://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">Flexbox</a>, CSS-Tricks</p>

<p><code>:nth-child()</code>, <code>:matches()</code>: Selecting children is <a href="http://dev.w3.org/csswg/selectors/" target="_blank">getting smarter</a>.

<p><em>Variables</em>: CSS will have them! They currently <a href="http://dev.w3.org/csswg/css-variables/" target="_blank">work in Firefox</a>.</p>

<p><em>Colors</em>: <a href="http://dev.w3.org/csswg/css-color/">Spec</a> There will be 4/8 fihiy hex colors for alpha instead of converting to <code>rgba</code>, and other fun stuff. </p>

<p><code>hwb()</code>: hue-whiteness-blackness</p>

<p><code>gray()</code>: grays without repeating yourself. Nice! No more bajillion <code>$brand-gray-light</code>s or whatever. 

<p><code>language-gray()</code>: grays without repeating yourself. Nice.</p>

<p><em>Media Queries</em>: They're <a href="http://dev.w3.org/csswg/mediaqueries/" target="_blank">getting smarter!</a> Ability to target phones used as night, or in bright light, or on e-ink screens. <code>bada$$</code>, amirite???</p>

<p><em>Animation!</em>: <a href="https://w3c.github.io/web-animations/" target="_blank">Web Animations spec</a>, <a href="http://dev.w3.org/FXTF/motion-1/" target="_blank">Motion Path</a>. Exposing CSS animations to JS in a more direct + easy way, and animations an element around the page in 2D with the <code>motion</code> property.</p>

<p><em>Polyfilling CSS</em>: No language can grow forever. CSS is huge, and getting larger and larger. Cycle times to get new things into spec is really long (~5 years, yikes!). Doesn't mean we can't polyfill our solutions, though, such as with Media Queries, such as variables for media queries:</p>
</code></pre>

```
@custom-media foo (500px &lt;= width &lt;= 1200px);
  @media ("foo") { ... }
  CSS.customMedia.set("bar", true);
  CSS.customMedia.set("baz", 500);
  CSS.customMedia.set(
        "qux",
        MediaQueryList("(min-width: 500px)"))
  @media ("bar") { ... }
  @media ("baz" &lt; 600) { ... }
  @media ("qux") { ... }
```

<p><em>More Polyfilling</em>: Custom psuedo-classes, custom functions, mix-ins (functions on the block level, rather than value level), custom at-rules, custom layout???</p>
