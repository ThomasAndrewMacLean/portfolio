---
templateKey: blog-post
title: Type is Your Right!
date: 2016-09-22T15:54:26.623Z
description: Why webfonts are beautiful and how to make them performant.
tags:
  - conferences
  - talks
---
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/styles/default.min.css">

<section class="middle">

<p>Content is the most important thing on your site, but typography is how you dress it up. The clothes you put on every morning express purpose for your day, and that’s what typography does for your content. Assuming you’re not just using emojis to express semantic meaning on your sites you’re using typography, and that same typography is in the equation of what’s making your users feel like using your site in the first place.</p>

<p>If you’re like me you you want that type to make your users feel <em>good</em>. You want your type to be beautiful.</p>

<p>“That’s all well and good,” you say, “But what does it mean to have beautiful web typography? What are the steps from getting from knowing relatively little about typography to making typefaces beautiful?”</p>

<p>It would also be pretty valid to ask, “Fancy web type means HTTP requests, and additional load time, and potentially poor user experience—how can I be sure that I’m making all of this performant?”</p>

<p>To which I say, don’t worry. That’s why you’re reading this.</p>

</section>

<h1 class="title">What is Beautiful Web Typography</h1>

<section class="middle">

<p>Typography doesn’t just exist on the web. If you want beautiful web typography, you need to get beautiful typography first. As with most things in life, having a little history doesn’t hurt.</p>

<p>Gutenberg and his printing press mark the birth of modern typography but written language stretches way further into the past than the 15th century. Before Gutenberg, religious men and scholars all over the world were trying to pen history by hand. Calligraphy, the art typography sought to modernize, is really <em>old</em>.</p>

<div class="batman">

<img src="/img/type-is-your-right/batman.jpg" />

<em>Old like hieroglyphics Batman is old</em>

</div>

</section>

<video nocontrols autoplay muted loop class="ux">

<source src="/img/type-is-your-right/ux.mp4" type="video/mp4">

Your browser does not support the video tag.

</video>

<section class="right">

<p>Have you ever done any UX design?</p>

<p>When you’re trying to create a new website or new app, you draw from patterns you’ve already seen in other places that work well. This is because choosing patterns users are familiar with helps them acclimate to your product faster.</p>

<p>Typography over the years did the exact same thing—it copied from predecessors. Those religious men penning history created letters and alphabets and words and the way those things looked on the page. When that technical revolution hits, it copies what these men had been doing, and even now typography draws inspiration from the way we write on paper. That technical revolution? That’s Gutenberg. That’s where typography begins.</p>

<p>Typography copying the way we write and technical revolution means three patterns emerge:</p>

</section>

<section class="middle extra">

<ol>

<li>Typography and what we as readers find legible change and morph together, and are influenced by how we’re reading—be it by book, newspaper, or webpage.</li>

<li>Typography is also influenced by the way people write by hand, and borrows the solutions people find when writing by hand when it needs them.</li>

<li>Typography nonetheless becomes fundamentally different from traditional calligraphy because of the ways printing presses work. Instead of letters being coupled closely together, printing presses force each letter to be in an individual metal box called a slug.</li>

</ol>

<p>I found this great tweet the other day:</p>

<p>

<a href="https://twitter.com/BaldCondensed/status/525631405251125248">

<img src="/img/type-is-your-right/keyboard.png" />

</a>

</p>

</section>

<video nocontrols autoplay muted loop class="sf">

<source src="/img/type-is-your-right/sf.mp4" type="video/mp4">

Your browser does not support the video tag.

</video>

<section class="right">

<p>If we think of this phenomenon as something that happened because typography was copying a previously established, rich art, it makes sense. All those extra things you don’t see in a font are problems that people, when they’re writing by hand, just solve with a pen. But when you need to fit everything into a keyboard, it becomes a little more complicated.</p>

<p>When we look at all of the glyphs and characters that a font has, when we look at all of the features a font might have, you can understand their relevance and the functions they serve a reader by keeping those three facts in mind. Typography needed to create glyphs, or characters, for all these permutations that we create when we write—and it was challenging, because printing presses meant you needed to have every single character in a little metal box.</p>

</section>

<img src="/img/type-is-your-right/glyphs.png" class="glyphs" />

<section class="right">

<p>Before we get to what’s in all of those individual metal slugs, let’s brush up on our 15th century European history and talk a little bit about Johannes Gutenberg.</p>

<p>Why did the printing press change written word so much?</p>

</section>

<img src="/img/type-is-your-right/printing-press.png" class="printing-press" />

<section class="left">

<p>To understand how we got from calligraphy to typography, it’s helpful to understand how a printing press works. To print books on a printing press, you set small metal bars called slugs, each with a letter or a combination of letters, in rows. The slugs need to be set up in this way to be moveable and interchangeable.</p>

<p>Written word, before the printing press, was able to fix awkward spacing between letters. Acronyms in bodies of text flowed. If you were talented, adding flourishes to your work was simple.</p>

<p>Printing presses’ needs were very different. Typography needed ways to solve awkward spacing, and build flourishes, and have number fractions—all of the things that had been solved and were easy to write, but not easy to typeset. Ellen Lupton in her book <em>Thinking with Type</em> puts this really elegantly:</p>

<blockquote class="quote printing-press-quote">

<p>“The first typefaces were directly models on forms of calligraphy. Typefaces, however, are not bodily gestures—they are manufactured images design for infinite repetition.”</p>

<attr class="quote-attribution">— Ellen Lupton, <em>Thinking with Type</em></attr>

</blockquote>

</section>

<section class="middle extra">

<p>To solve these issues, type designers had to create all the glyphs that you can find in fonts today:</p>

<p>Slugs meant that as a type designer you had to choose and find important combinations of letters. You had to give decorative glyphs for people printing books. You needed to create small caps. You needed to create often-used fractions.</p>

<p>If it wasn’t obvious this is the direction we’re heading with this talk: these things make your content <em>shine</em>. Using these beautiful little characters that were specially created to solve specific kinds of problems makes your text more legible and makes the details more beautiful.</p>

<p>The need for these characters didn’t go away when we switched to digital typography, which is why the ability to turn these features on and off in CSS exists. When we use typography on the web, we have a myriad of characters and glyphs at our disposal, all of which can be turned on and off with Opentype CSS flags.</p>

<p>There are over 100 of them, so I’m not going to go through every single one, but we can at least learn a few some common ones:</p>

</section>

<video nocontrols autoplay muted loop class="example">

<source src="/img/type-is-your-right/kerning.mp4" type="video/mp4">

Your browser does not support the video tag.

</video>

<section class="left">

<p>There is kerning, which is the adjustment between letters so spacing looks good. Type designers will put a lot of work into figuring out spacing between your letters, so it makes sense to turn this on to <code>auto</code>, which ensures the browser will choose the most performant kerning option on by default.</p>

</section>

<video nocontrols autoplay muted loop class="example">

<source src="/img/type-is-your-right/ligatures.mp4" type="video/mp4">

Your browser does not support the video tag.

</video>

<section class="left">

<p>There are ligatures, which fix awkward letter combinations. When type gets really small, spacing gets awkward between certain letter combinations. Ligatures fix that. These are normally split into normal and discretionary ligatures, discretionary meaning, “turn on if you want to be extra fancy.” This is a good option for headers and pullquotes.</p>

</section>

<video nocontrols autoplay muted loop class="example">

<source src="/img/type-is-your-right/smallcaps.mp4" type="video/mp4">

Your browser does not support the video tag.

</video>

<section class="left">

<p>Next there are small caps, which make make abbreviations look good. This is because they don’t interrupt the flow of a sentence by staying at the same height as the lowercase letters.</p>

</section>

<video nocontrols autoplay muted loop class="example">

<source src="/img/type-is-your-right/numerals.mp4" type="video/mp4">

Your browser does not support the video tag.

</video>

<section class="left">

<p>Old Style Numerals give you numbers that go below the baseline, which look more similar to the way you might write out numbers by hand, which has the added benefit of making them more legible in certain scenarios.</p>

</section>

<video nocontrols autoplay muted loop class="example">

<source src="/img/type-is-your-right/swashes.mp4" type="video/mp4">

Your browser does not support the video tag.

</video>

<section class="left">

<p>Swashes allow you to get really fancy with your typography, and are great for fancy headers and article titles.</p>

</section>

<section class="middle">

<p>Any of these one changes, in the grand scheme of building an entire website, is relatively small; but together they have a net gain much larger than their individual parts. They make type more legible, and thus, make your site more pleasant to be on.</p>

<p>These things are pretty easy to turn on; they’re ultimately just CSS properties (I’ve left them all unprefixed for brevity):</p>

</section>

<code class="open-type">font-feature-settings: "kern", "liga", "clig", "calt";</code>

<section class="middle">

<p>The challenging part is knowing what your typeface supports, which you can figure out with a variety of methods.</p>

</section>

<img src="/img/type-is-your-right/typekit.png" class="ux" />

<section class="right no-bottom-margin">

<h2>Typekit</h2>

<p>If you’re serving up the font from Typekit, it will list those features. Once you’ve created a kit on Typekit you can see the OpenType features the typeface supports by clicking the question mark next to “OpenType Features”. Unfortunately, you already need to be pretty familiar with the OpenType syntax to know what these mean. </p>

<p>For Google Fonts, and fonts you have locally on your machine, you’ll need to do a little more digging to figure out what features the typeface supports. In these instances there are <a href="http://clagnut.com/sandbox/css3/">OpenType sandboxes</a>.</p>

<p>I like this one because it makes it pretty easy to just turn on and off the different features and it spits out the relevant CSS along the bottom of the page. If you click an OpenType feature and nothing happens, that particular feature is probably just not supported by that typeface.</p>

<p>The last challenge is discovering additional glyphs that a font file might contain, since we know from <a href="https://twitter.com/BaldCondensed/status/525631405251125248">this tweet</a> that sometimes there are additional characters and glyphs that you can’t access without key commands or help from some sort of visual editing software. To find these, you have two options:</p>

</section>

<img src="/img/type-is-your-right/fontbook.png" class="ux no-outline" />

<section class="right no-top-margin">

<ol>

<li>Looking at all of the glyphs using Font Book/Character Map</li>

<li>Or, if you have a spare $600, using Adobe InDesign</li>

</ol>

<p>If you want to see all of the glyphs your typeface has and you have it locally on your computer, you can use Font Book if you’re on a Mac or Character Map if you’re on Windows. In Font Book you can toggle this option in the upper left to see all of the characters in a typeface.</p>

<p>Your other option, if you have a license for Adobe’s Cloud Services, is to use Adobe InDesign, which has a glyphs panel where you can see all of the discretionary ligatures and glyphs, along with their unicode mapping.</p>

</section>

<section class="middle">

<p>The workflow for playing with a new typeface I’d like to use is typically to use an OpenType sandbox to discover the CSS features the typeface supports, and then to use Font Book to discover glyphs I might want to use in my designs. For example, if you’re on Mac, the system font, San Francisco, has a lots of little fun wingdings, including nicer punctuation to replace “dumb” or “straight” quotes:</p>

</section>

<code class="open-type">   ❛ ❜ ❞❝</code>

<section class="middle">

<p>Font Book also is a way, using the information panel, to see what languages a typeface supports, which is good information if you’re building a site that needs to support different character sets, or languages with lots of accents.</p>

</section>

<h1 class="title">Let's talk performance</h1>

<section class="middle">

<p>At this point, you’ve learned about type features. You know where to find them, how to turn them on. You might even have already formed some opinions on what are the things you want in a typeface and have some opinions on what you think looks good, either because of this talk or from things you’ve read on your own. At this point, we’re going to pretend you’ve chosen a typeface. And now you want to load it and use it on your site.</p>

<p>But what about performance? </p>

<p>Obviously as web developers we care about performance. You don’t want a large webfont slowing down the loadtime of your site. At the very beginning of this talk you may remember hearing me say:</p>

</section>

<section class="king">Content is king</section>

<section class="middle">

<p>I want you to keep it in mind as we go through these performance tips as it’s the driving philosophy behind what we’re doing. I think that Chris Manning put it best in his article on font loading techniques:</p>

</section>

<blockquote class="quote">

<p>“…Readable content trumps custom fonts.”</p>

<attr class="quote-attribution">— Chris Manning, <em>The @font-face Dilemma</em></attr>

</blockquote>

<section class="middle no-bottom-margin extra">

<p>If you’ve ever loaded in a webfont from Google fonts you probably copy and pasted their suggested import code, which looks something like this:</p>

</section>

<pre class="open-type"><code>@import 'https://fonts.googleapis.com/css?family=Roboto';</code></pre>

<section class="middle no-top-margin no-bottom-margin">

<p>Or this:</p>

</section>

<pre class="open-type"><code>&ltlink href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"&gt;</code></pre>

<section class="left no-top-margin">

<p>These methods get the job done but we can improve on them. For one, they can cause a flash of unstyled text:</p>

<p>Even worse, they can cause a flash of invisible text, which means you can’t even read the content before it’s all loaded:</p>

<p>If you’re on poor wifi and you’re just trying to read something, it’s safe to say:</p>

<p>A flash of unstyled text is a better experience than not being able to read something at all. Thus, when we’re working with web type, we want to allow for flashes of unstyled text to happen, and we want to then mitigate and minimize their effects.</p>

<h2>Preventing the FOIT</h2>

<p>The first thing we need to do is prevent the flash of invisible text. And the way you do this is with… well, websafe or system fonts.</p>

<p>To do this, we’re going to declare a websafe font first in our stack, and then use JavaScript to load in our webfont once it’s ready to use.</p>

<p>For this demos, I’m going to be using a typeface named Calendas Plus.</p>

</section>

<div class="code-example-section">

<pre class="code-example-code"><code class="css">

@font-face {

\    font-family: 'Calendas Plus'; 

\    src: url('/css/type/calendas-plus-webfont.woff2') format('woff2'), 

\    url('/css/type/calendas-plus-webfont.woff') format('woff'),

\    url('/css/type/calendas-plus-webfont.ttf') format('truetype');

\    font-weight: 300;

\    font-style: normal;

  }



  body {

\    font-family: serif;

  }



  body.fonts-loaded {

\    font-family: 'Calendas Plus', serif;

  }

\    </code></pre>

<section class="code-example">

<p>Here, we’re declaring our webfont font stack first on the body, and then our desired font stack in a class.</p>

</section>

</div>

<div class="code-example-section">

<pre class="code-example-code"><code class="javascript">

var fontFamilies = {

  'Calendas Plus': [

\    {

\    weight: 400

\    },

\    {

\    weight: 700

\    }

  ]

}



var fontObservers = \[];



Object.keys(fontFamilies).forEach(function(family) {

  fontObservers.push(fontFamilies\[family].map(function(config) {

\    return new FontFaceObserver(family, config).check()

  }));

});



Promise.all(fontObservers)

  .then(function() {

\    document.body.classList.add('fonts-loaded');

  }, function() {

\    console.log('Fonts not available');

});

</code></pre>

<section class="code-example">

<p>For the JavaScript, we’re using a small library produced by Bram Stein, who works at typekit named <a href="https://fontfaceobserver.com/">Font Face Observer</a>.</p>

<p>In this code, we start an object with the different font families we want to load. Here we have one typeface with two different weights, which we can append to later with different families.</p>

<p>We create a new font face observer for each family in the object; this will return a promise that is resolved when the font has loaded, or rejected if the font fails. In the promise below we handle the two use cases—in the event of the promise being fulfilled, we add the ‘fonts-loaded’ class to the body that will trigger the typeface from our CSS and then apply that Calendas Plus typeface that looks so nice. Voilà!</p>

</section>

</div>

<section class="middle">

<h2>Minimizing the FOUT</h2>

<p>There’s still work to be done though to minimize our new problem: the flash of unstyled text that the user sees between the initial render of our websafe font and our webfont that we’ve chosen.</p>

<p>To do this, we’re going to compare the font we have with the font we want when we’re choosing our stack. This trick comes from Tim Brown, who explains the philosophy by pulling a quote from Jason Santa Maria’s book <em>On Web Typography</em>:</p>

</section>

<blockquote class="quote">

<p>“The thing I try to avoid most in my designs is not FOUT but a jarring shift in the layout when a webfont finishes loading. This shift is usually due to sizing discrepancies between your layout and system fonts, and your webfont.”</p>

<attr class="quote-attribution">— Jason Santa Maria, <em>On Web Typography</em></attr>

</blockquote>

<section class="middle no-bottom-margin">

<p>The way that Tim Brown handles this discrepancy is by matching his fallback font and his intended webfont’s x-heights and widths—a typefaces’ x-height being the height of the lower case letters, and the width being the literal width of the letters when laid out in a line:</p>

</section>

<img src="/img/type-is-your-right/overlaid.png" class="middle-example" />

<section class="middle no-top-margin no-bottom-margin">

<p>In these examples I’m using Calendas Plus and Georgia, both set at 36 points. When we overlay them we see how Georgia is both taller and wider than Calendas Plus is:</p>

<p>By bumping down Georgia to 35 points, we get a much closer match between the two that isn’t going to cause as dramatic a shift in the layout as a user begins to read because of similar height heights, and closer widths:</p>

</section>

<img src="/img/type-is-your-right/matching.png" class="middle-example" />

<section class="middle no-top-margin no-bottom-margin">

<p>As Tim Brown puts it,</p>

</section>

<blockquote class="quote">

<p>“The style doesn’t matter so much, it’s that it has to flow the same way.”</p>

<attr class="quote-attribution">— Tim Brown, <em><a href="https://twitter.com/nicewebtype/status/760866055724097536">Twitter</a></em></attr>

</blockquote>

<div class="code-example-section">

<pre class="code-example-code"><code class="css">

@font-face {

\    font-family: 'Calendas Plus'; 

\    src: url('/css/type/calendas-plus-webfont.woff2') format('woff2'), 

\    url('/css/type/calendas-plus-webfont.woff') format('woff'),

\    url('/css/type/calendas-plus-webfont.ttf') format('truetype');

\    font-weight: 300;

\    font-style: normal;

}



body {

  font-family: Georgia, serif;

  font-size: 35pt;

}



body.fonts-loaded {

  font-family: 'Calendas Plus', serif;

  font-sized: 36pt;

}

</code></pre>

<section class="code-example">

<p>This means that we need to modify our css a little bit from before.</p>

<p>Instead of just specifying any old serif, we want to specify Georgia, since it was a serif that closely matched Calendas Plus. Secondly, we want to set Georgia, the font that loads first, at 35 points, and then Calendas Plus, the font that loads second, at 36 points, to avoid those layout shifts.</p>

</section>

</div>

<section class="middle">

<h2>But wait! We can do even more!</h2>

<p>If you’re loading in a typeface from Typekit or from Google fonts, this should get you pretty far. Already, you know how to circumvent Flashes of Invisible Text with a lazyload so that your users can read their text <em>and</em> get a nice webfont at that, and we know how to make sure that this load isn’t disruptive to the reading experience. But we can still improve on this! </p>

<p>Zach Leatherman from Filament Group shows us that we can get even more granular with our lazyloading, splitting up the normal (or roman), italic, and bold versions of our typeface, using the browsers’ faster, built-in algorithms to italicize and bold our typeface until we can lazyload the proper italic and bold versions of our typeface. He calls this FOFT, or</p>

<div class="foft">Flash of Faux Text</div>

<p>The way that Zach handles this is using a <code>fontfaceonload</code> polyfill he’s created, which executes a callback when a webfont loads. To use it, we load the <code>fontfaceonload</code> library and set up our loads to happen in “stages”—Stage 1 being the roman font family loading, and stage two being the bold and italic styles of the font family loading.</p>

</section>

<div class="code-example-section">

<pre class="code-example-code"><code class="css">

FontFaceOnload( "ProximaNovaRegular", {

  success: function() {

\    var docEl = document.documentElement;

\    

\    // Stage 1 Complete

\    // FOFT engaged

\    docEl.className += " proxima-nova-loaded";



\    var counter = 0;

\    var success = function() {

\    counter++;

\    if( counter === 2 ) { // number of additional font faces we're loading in

\    // Stage 2 Complete

\    // All Fonts Loaded

\    docEl.className += " proxima-nova-b-loaded";

\    }

\    };



\    FontFaceOnload( "ProximaNovaBold", {

\    weight: 700,

\    success: success

\    });

\    FontFaceOnload( "ProximaNovaLight", {

\    weight: 300,

\    success: success

\    });

  }

});

</code></pre>

<section class="code-example">

<p>We’re going to use Proxima Nova for these examples, since Proxima Nova has a lot of different weights that would be fabulous to load in over time:</p>

<p>Here we’re loading the roman version of our typeface <em>first</em>. On completion for that variant, we have two more checks for the bold and light versions of our typeface. If these succeed, we add another success class to the top element on our page so our css file knows to apply the correct font file.</p>

</section>

</div>

<div class="code-example-section">

<pre class="code-example-code"><code class="css">

/*

All font variants need to be aliased to different names to avoid the FOIT

\*/

@font-face {

\    font-family: ProximaNovaBold;

\    src: url('proxima_nova_bold-webfont.woff2') format('woff2'),

\    url('proxima_nova_bold-webfont.woff') format('woff');

\    font-weight: 700;

\    font-style: normal;

}



@font-face {

\    font-family: ProximaNovaLight;

\    src: url('proxima_nova_light-webfont.woff2') format('woff2'),

\    url('proxima_nova_light-webfont.woff') format('woff');

\    font-weight: 300;

\    font-style: normal;

}



@font-face {

\    font-family: ProximaNovaRegular;

\    src: url('proxima_nova_reg-webfont.woff2') format('woff2'),

\    url('proxima_nova_reg-webfont.woff') format('woff');

\    font-weight: 400;

\    font-style: normal;

}



html {

\    font-family: -apple-system, BlinkMacSystemFont, Helvetica, sans-serif;

}



/\* Stage 1 \*/

html.proxima-nova-loaded {

\    font-family: ProximaNovaRegular, sans-serif;

}



/* 

\* Stage 2

\* The rest of this CSS is to work around

\* the separate font-family limitation

\* described below.

\*/



.proxima-nova-b-loaded h1,

.proxima-nova-b-loaded h2,

.proxima-nova-b-loaded h3,

.proxima-nova-b-loaded h4,

.proxima-nova-b-loaded h5,

.proxima-nova-b-loaded strong {

\    font-family: ProximaNovaBold;

}

.proxima-nova-b-loaded em {

  font-family: ProximaNovaLight;

  font-style: italic;

}

.proxima-nova-b-loaded strong em,

.proxima-nova-b-loaded strong blockquote,

.proxima-nova-b-loaded em strong {

  font-family: ProximaNovaBold;

  font-style: italic;

}

</code></pre>

<section class="code-example">

<p>First we load in our webfont using an @font-face declaration. We’re doing this three times over, one for each weight of the font we want to load in, because grouping them together will cause the dreaded FOIT we’re trying to avoid if we load them in the way we’re doing with our javascript. Browsers are smart enough to not download a @font-face until the class exists in the DOM tree, so we don’t need to worry about these being downloaded and slowing down render.</p>

<p>First, we declare our websafe fonts that most closely match our desired font, as we did before. The closest I could find to Proxima Nova was the Mac system font San Francisco, but system fonts on Windows and Linux didn’t match as closely, so instead of having the traditional system fallbacks of Segoe UI and Tahoma for Windows and Linux systems, I’m next just setting Helvetica.</p>

<p>Next we set a loaded class named <code>.proxima-nova-loaded</code>, where we set our desired webfont. All still things you’ve seen before.

<p><em>Next</em> we start seeing some new code—a <code>.proxima-nova-b-loaded</code> class, the class our JavaScript sets when the italic and bold versions of our typeface have loaded on the <code><html></code> element. We have to refine where in what instances we want italics and bolds to load since we’ve stripped them out previously—hence resetting italics on <code>em</code> elements and resetting bolds on <code>strongs</code> and <code>h*s</code> to use the webfont’s true bold and italics instead of the browsers’.</p>

<p>All of these strategies have the potential to timeout after a period set by the browser, and that’s okay—at least your content <em>loads</em>.</p>

</section>

</div>

<section class="middle extra-2x">

<h2>Wrapping Up</h2>

<p>There’s <a href="http://kennethormandy.com/journal/efficient-web-type-circa-1556">a talk</a> by Kenneth Ormandy that really wonderful on web typography, and he tells a story about the printing press, but 100 years after Gutenberg and the story we covered.</p>

<p>100 years after the printing press was created, a man named Pierre Haultin is trying to recreate Gutenberg’s greatest accomplishment: printing the Bible. But Haultin’s reasons for doing so are a little different than Gutenberg’s: Gutenberg wanted to print the Bible. Haultin wants to print like… the mini-Bible. That’s because Haultin is a Protestant living in very Catholic France where he is unable to lug around a big ol’ Protestant Bible that he might get caught with.</p>

<p>In the end, do you wanna know what his solution was?</p>

<p>It was to make a better printing press!</p>

<p>It feels really obvious once you say it—of course it was to make a better printing press—but I think it extrapolates to our challenges using web fonts. As of last week the HTTP Archive had a chart saying that 67% of websites on the web load in a custom font of some sort, showing that we want to use custom fonts. We just haven’t figured out the efficiency bit yet. We’re still lugging around oversized, Catholic Bibles, and we need to figure out how to downsize them. But that isn’t to say that things won’t change, and that we can’t build better printing presses one day.</p>

<p>I think that as developers, we sometimes can over-execute on our ability to do our jobs. We optimize everything, without thinking about trade-offs and the things we lose by optimizing everything. Instead of letting performance dictate design, can we build great designs that are performant? How can we make technology support the kinds of designs that benefit our users?</p>

<p>I don’t have answers for these questions, they’re open-ended. I think they’re not even just questions for us in this room but questions for everyone who builds websites and cares about their users. We’ve decided as an industry, based on those HTTP Archive numbers, that we want webfonts. Now, how can we make better printing presses?</p>

<h2>Resources</h2>

<p>If you want to learn more about Type, I highly recommend Ellen Lupton’s <a href="https://www.amazon.com/Thinking-Type-2nd-revised-expanded/dp/1568989695"><em>Thinking with Type</em></a>. If you like to sweat the small stuff, this is the book for you.</p>

<p>If you want to make working with OpenType features easier, I recommend Kenneth Ormandy’s <a href="https://github.com/kennethormandy/utility-opentype">Utility Opentype</a> and <a href="https://github.com/kennethormandy/normalize-opentype.css">Normalize-OpenType</a> projects, which both work to make working with OpenType easier.</p>

<p>If you want to learn more about progressive typeloading techniques, Zach Leatherman’s <a href="https://www.zachleat.com/web/research/">research</a> is beyond fabulous. He has ideas for how to get even more performant with Data-URI techniques that I didn’t cover here, so that’s also worth looking at.</p>

<p><em>Update, 04/2017:</em></p>

<p><a href="https://twitter.com/notwaldorf" target="_blank">Monica Dinculescu</a> made <a href="https://meowni.ca/font-style-matcher/" target="_blank">a tool</a> based on this article for matching fallback fonts and loaded webfonts. So flattered I could die 😭</p>

</section>

<section class="colophon">

<h2>Colophon</h2>

<h3>Articles</h3>

<ul>

<li>Tim Brown, <em><a href="http://practice.typekit.com/lesson/caring-about-opentype-features/">Caring About OpenType Features</a></em></li>

<li>Zach Leatherman, <em><a href="https://dev.opera.com/articles/better-font-face/">Better @font-face with Font Load Events</a></em></li>

<li>Zach Leatherman, <em><a href="https://www.zachleat.com/web/comprehensive-webfonts/">A Comprehensive Guide to Font Loading Strategies</a></em></li>

<li>Zach Leatherman, <em><a href="https://www.zachleat.com/web/critical-webfonts/">Critical Web Fonts</a></em></li>

<li>Zach Leatherman, <em><a href="https://www.zachleat.com/web/foft/">Flash of Faux Text—Still More on Font Loading</a></em></li>

<li>Chris Coyier, <em><a href="https://css-tricks.com/fout-foit-foft/">FOUT, FOIT, FOFT</a></em></li>

<li>Chris Manning, <em><a href="https://www.viget.com/articles/the-font-face-dilemma">The @font-face Dilemma</a></em></li>

<li>Kenneth Ormandy, <em><a href="http://kennethormandy.com/journal/efficient-web-type-circa-1556">Efficient Web Type Circa 1556</a></em></li>

<li>Ricardo Filipe, <em><a href="http://blog.ricardofilipe.com/post/deep-into-opentype-features">Typography — Deep Into OpenType Features</a></em></li>

<li>MyFonts, <em><a href="https://www.myfonts.com/Article8099.html">How do I see all the characters in a font?</a></em></li>

<li>Matthew Butterwick, <em><a href="http://practicaltypography.com/">Butterick’s Practical Typography</a></em></li>

<li>Marcin Wichary, <em><a href="https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/">Using System UI Fonts In Web Design: A Quick Practical Guide</a></em></li>

</ul>

<h3>Tooling</h3>

<ul>

<li><a href="http://clagnut.com/sandbox/css3/">OpenType Sandbox</a></li>

<li>Kenneth Ormany’s <a href="https://github.com/kennethormandy/nomalize-opentype.css">normalize-opentype.css</a></li>

<li>Kenneth Ormany’s <a href="https://github.com/kennethormandy/utility-opentype">utility-opentype.css</a></li>

<li>Bram Stein’s <a href="https://fontfaceobserver.com/">FontFaceObserver</a></li>

<li>Zach Leatherman’s <a href="https://github.com/zachleat/fontfaceonload">FontFaceOnload polyfill</a></li>

</ul>

<h3>Types Used</h3>

<ul>

<li>Adobe Text Pro, <em>Adobe</em></li>

<li>Arial, <em>Monotype Imaging</em></li>

<li>Avenir, <em>Mergenthaler Linotype Company</em></li>

<li>Calendas Plus, <em>Atipo Foundry</em></li>

<li>Courier, <em>Monotype</em></li>

<li>Didot, <em>Hoefler & Co.</em></li>

<li>Georgia, <em>Microsoft Typography</em></li>

<li>Germanica, <em>Paul Lloyd</em></li>

<li>Gotham, <em>Hoefler & Co.</em></li>

<li>Harriet, <em>OkayType</em></li>

<li>Helvetica, <em>Haas Type Foundry</em></li>

<li>Hoefler Text, <em>Hoefler & Co.</em></li>

<li>Impact, <em>Stephenson Blake</em></li>

<li>Knockout, <em>Hoefler & Co.</em></li>

<li>League Spartan, <em>The League of Moveable Type</em></li>

<li>Majesti Banner, <em>Lost Type Co-Op</em></li>

<li>Mrs. Eaves, <em>Emigré</em></li>

<li>Proxima Nova, <em>Mark Simonson Studio</em></li>

<li>Neue Haas Unica, <em>Monotype</em></li>

<li>San Francisco, <em>Apple</em></li>

<li>Verdana, <em>Microsoft Typography</em></li>

<li>Whitney, <em>Hoefler & Co.</em></li>

</ul>

</section>
