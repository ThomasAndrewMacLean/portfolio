---
templateKey: blog-post
title: Tonight We're Gonna Code Like It's 1999
date: 2014-12-01T21:24:31.157Z
description: Creating responsive emails
tags:
  - conferences
---
<p><a href="https://twitter.com/mybluewristband">@mybluewristband</a>, Jennifer Wong</p>

<p><a href="http://jennz0r.github.io/1999/#/">Slides</a></p>

<p>So, emails are evil. Story of one woman trying to make nicer emails.</p>

<h2 id="design">Design</h2>

<p>Started with research. <a href="https://www.indiegogo.com/">Indiegogo</a> had really nice emails, and lots of places didn't (looking at you, HackerLeague).</p>

<p><em>Takeaways</em>: Keep copy light, image heavy, huge top anchored logos, and set a max width.</p>

<p>So, the hotpads email she was working with: <a href="http://jennz0r.github.io/1999/#/6/1">email</a></p>

<p><em>Problems</em>: No unsubscribe, why is the logo in the middle?? not very attractive.</p>

<p><em>Goals</em>: Consistency, brand awareness.</p>

<h2 id="sketching">Sketching</h2>

<p>Do lots of them. (Your later ones are always better.)</p>

<h2 id="images">Images</h2>

<p>'Rule of Thumbs': Minimum touchable area is <code>44px</code> by <code>44px</code>?? No! They're all different at this point! </p>

<p><a href="http://www.smashingmagazine.com/2012/02/21/finger-friendly-design-ideal-mobile-touchscreen-target-sizes/">Finger Friendly Design: Ideal Mobile Touchscreen Target Sizes</a>
<a href="http://pugetworks.com/blog/2012/02/minimum-touchable-area-on-mobile-devices/">Minimum Touchable Area On Mobile Devices</a></p>

<p><em>Why Templates?</em>: You can keep your code DRY, for one. A little abstraction goes a long way.</p>

<p><em>Tables</em>: They're coming. Specify your tables as <code>block</code> or Chrome will ignore your <code>max-width</code>. Whaaaat?</p>

<p><em>Inline styles</em>: You have to use them :(</p>

<p><a href="https://www.campaignmonitor.com/css/">Campaign Monitor</a></p>

<p><em>Max Width</em>: <code>550-600px</code> is ideal.</p>

<h2 id="you_will_havetableseverywhere">You <em>will</em> have tables everywhere.</h2>

<p>So use comments!</p>

<p><em>Image Alternatives</em>: Have <code>alt</code>s and background-color fallbacks. Seems like Outlook and different email providers just won't... display things.</p>

<p><em>Media Queries</em>: Awesome for things like readability/targeting devices. In conjunction with fluid layouts, you <em>can</em> have nice things.</p>

<p><em>Device Pixel Ratio</em>: Target retina/high-res devies separately.</p>

<p><em>!importants</em>: Sometimes you have to use them. Sometimes inline styles overwrite media queries, so you just have to.</p>

<p><em><code>&lt;img&gt;</code> and <code>&lt;a&gt;</code></em>: Sometimes images will appear with a thin gray border. If you put your images on the same line as your anchor element, it will go away. Weeeiirrrddd.</p>

<p><em>High-res Images</em>: Outlook 2007, 2010, 2013, and Outlook in IE don't allow HTML or CSS image sizing. <a href="http://jennz0r.github.io/1999/#/24/1">Solution</a></p>

<h2 id="outlook200720102013wtf">Outlook 2007, 2010, 2013: WTF?</h2>

<p>They all use Microsoft Word as their rendering engine. Whhhaaatt?</p>

<h2 id="gmail">Gmail</h2>

<p>You have to style all your <code>&lt;a&gt;</code> tags inline. Wah.</p>

<h1 id="blogs">Blogs</h1>

<ul>
<li><a href="http://stylecampaign.com/">Style Campaign</a></li>

<li><a href="http://stylecampaign.com/blog/2013/03/responsive-email-design-red/">Responsive Email Design</a></li>

<li><a href="https://litmus.com/">Litmus</a></li>

<li><a href="https://litmus.com/blog/anatomy-mobile-email/anatomy-mobile-email-24-1000px">Anatomy of a Mobile Email</a></li>

<li><a href="https://www.campaignmonitor.com/blog/">Holiday Reading to Help You Send Better Email</a></li>

<li><a href="http://blog.mailchimp.com/">Mailchimp</a></li>
</ul>

<h1 id="templates">Templates</h1>

<ul>
<li><a href="http://zurb.com/ink/">Zurb Ink</a></li>

<li><a href="https://www.campaignmonitor.com/resources/">Campaign Monitor</a></li>

<li><a href="http://templates.mailchimp.com/">Mailchimp</a></li>

<li><a href="http://htmlemailboilerplate.com/">HTML Email Boilerplate</a></li>
</ul>

<h1 id="testing">Testing</h1>

<ul>
<li><a href="http://www.emailonacid.com/">Email on Acid</a></li>

<li><a href="https://litmus.com/">Litmus</a></li>
</ul>
