---
layout: page
title: Style Guide
short-title: Style Guide
permalink: /style-guide/
show-pagetitle: true
---

<section class="page-section">
	<div class="wrapper">
		<p>This is the Palate Deck style guide that defines all modular components, and shows code and usage examples.</p>
	</div>
</div>


<section class="page-section">
	<div class="wrapper">

		<h2 class="header-secondary">Typography</h2>

		<div class="styleguide-headers">
			<p>These are the primary header types available within this system. They are declared as classes to allow styling flexibility yet maintain a semantically-correct document outline.</p>

			<h3 class="header-primary">Primary Heading</h3>
			<p>A page title-level heading, should be used once per page (if at all). Apply to any heading markup level with the <code>.header-primary</code> class.</p>

			<h3 class="header-secondary">Secondary Heading</h3>
			<p>Secondary headings that may be re-used throughout the page. Apply to any heading markup level with the <code>.header-secondary</code> class.</p>

			<h3 class="header-sub">Sub-Heading</h3>
			<p>Sub-headings that may be re-used throughout the page, but must be preceded by a Secondary Heading. Apply to any heading markup level with the <code>.header-sub</code> class.</p>

			<h3 class="header-small">Small Heading</h3>
			<p>Small headings that may be re-used throughout the page in places where sub-headings seem too large. Apply to any heading markup level with the <code>.header-small</code> class.</p>

			<h3 class="header-secondary-alt">Alternate Secondary Heading</h3>
			<p>A different style of secondary headings that may be re-used throughout the page. Apply to any heading markup level with the <code>.header-secondary-alt</code> class.</p>

			<h3 class="header-sub-alt">Alternate Sub-Heading</h3>
			<p>A different style of sub-headings that may be re-used throughout the page, but must be preceded by a Secondary Heading. Apply to any heading markup level with the <code>.header-sub-alt</code> class.</p>

			<h3 class="header-small-alt">Alternate Small Heading</h3>
			<p>A different style of small headings that may be re-used throughout the page in places where sub-headings seem too large. Apply to any heading markup level with the <code>.header-small-alt</code> class.</p>


		</div>

	</div>
</section>

<section class="page-section">
	<div class="wrapper">

		<h2 class="header-secondary">Palette</h2>

		<p>The primary colour palette consists of the main Palate Deck Flavor Family colour-coding.</p>

		<ul class="styleguide-palette">
			<li class="styleguide-red-strong">
				<code>$red-strong</code>
			</li>
			<li class="styleguide-red-mid">
				<code>$red-mid</code>
			</li>
			<li class="styleguide-red-light">
				<code>$red-light</code>
			</li>

			<li class="styleguide-orange-strong">
				<code>$orange-strong</code>
			</li>
			<li class="styleguide-orange-mid">
				<code>$orange-mid</code>
			</li>
			<li class="styleguide-orange-light">
				<code>$orange-light</code>
			</li>

			<li class="styleguide-green-strong">
				<code>$green-strong</code>
			</li>
			<li class="styleguide-green-mid">
				<code>$green-mid</code>
			</li>
			<li class="styleguide-green-light">
				<code>$green-light</code>
			</li>

			<li class="styleguide-blue-strong">
				<code>$blue-strong</code>
			</li>
			<li class="styleguide-blue-mid">
				<code>$blue-mid</code>
			</li>
			<li class="styleguide-blue-light">
				<code>$blue-light</code>
			</li>

			<li class="styleguide-brown-strong">
				<code>$brown-strong</code>
			</li>
			<li class="styleguide-brown-mid">
				<code>$brown-mid</code>
			</li>
			<li class="styleguide-peach">
				<code>$peach</code>
			</li>

		</ul>
	</div>
</section>

<section class="page-section">
	<div class="wrapper">

		<h2 class="header-secondary">Content Panel Modules</h2>

		<p>Panels exist to provide a means to separate content items from each other, and come in a number of configurations.</p>

		<h2 class="header-sub">Basic Panel Groups</h2>

		<div class="styleguide-example">
			<p class="styleguide-example-usage">
				<code>.panel-dual</code> – for two-up silent panels with no visible divider.
			</p>
			<div class="panel-dual">
				<div class="panel-sub">
					<p>This is the first panel, which is assigned a <code>.panel-sub</code> class.</p>
				</div>
				<div class="panel-sub">
					<p>This is the second panel, which is assigned a <code>.panel-sub</code> class.</p>
				</div>
			</div>
		</div>

		<div class="styleguide-example">
			<p class="styleguide-example-usage">
				<code>.panel-triple</code> – for three-up silent panels with no visible divider.
			</p>
			<div class="panel-triple">
				<div class="panel-sub">
					<p>This is the first panel, which is assigned a <code>.panel-sub</code> class.</p>
				</div>
				<div class="panel-sub">
					<p>This is the second panel, which is assigned a <code>.panel-sub</code> class.</p>
				</div>
				<div class="panel-sub">
					<p>This is the third panel, which is assigned a <code>.panel-sub</code> class.</p>
				</div>
			</div>
		</div>

		<h2 class="header-sub">Panel Configuration Variants</h2>

		<div class="styleguide-example">
			<p class="styleguide-example-usage">
				<code>.panel-padded</code> – A control class to assign controlled padding to sub-panels within any panel group.
			</p>
			<div class="panel-triple panel-padded">
				<div class="panel-sub">
					<p>First padded panel</p>
				</div>
				<div class="panel-sub">
					<p>Second padded panel</p>
				</div>
				<div class="panel-sub">
					<p>Third padded panel</p>
				</div>
			</div>
		</div>

	</div>
</section>



<section class="page-section">
	<div class="wrapper">

		<h2 class="header-secondary">Section Modules</h2>
		<p>Sections are used to split up major thematic content areas, and come in both vertical spacing and colour variations. A faint background colour has been turned on in these basic examples to show the spacing, but does not normally exist in the non-colour variants.</p>

	</div>
</section>

<section class="page-section-invisible styleguide-page-section">
	<div class="wrapper">
		<h2 class="header-secondary">Invisible Page Sections</h2>
		<p class="styleguide-example-usage">
			<code>.page-section-invisible</code> – for sections that require no vertical spacing whatsoever. Also requires a <code>.wrapper</code> child immediately within for spacing.
		</p>
	</div>
</section>
<section class="page-section-small styleguide-page-section">
	<div class="wrapper">
		<h2 class="header-secondary">Small Page Sections</h2>
		<p class="styleguide-example-usage">
			<code>.page-section-small</code> – for shorter sections that require less vertical spacing. Also requires a <code>.wrapper</code> child immediately within for spacing.
		</p>
	</div>
</section>
<section class="page-section styleguide-page-section">
	<div class="wrapper">
		<h2 class="header-secondary">Regular Page Sections</h2>
		<p class="styleguide-example-usage">
			<code>.page-section</code> – for any normal section in the page. Also requires a <code>.wrapper</code> child immediately within for spacing.
		</p>
	</div>
</section>
<section class="page-section-large styleguide-page-section">
	<div class="wrapper">
		<h2 class="header-secondary">Large Page Sections</h2>
		<code>.page-section-large</code> – for larger sections that require more vertical spacing. Also requires a <code>.wrapper</code> child immediately within for spacing.
	</div>
</section>
<section class="page-section page-section-red-light">
	<div class="wrapper">
		<h2 class="header-secondary">Light Red Page Sections</h2>
		<code>.page-section-red-light</code> – also requires a controlling <code>.page-section</code> base class as well as a <code>.wrapper</code> child immediately within for spacing.
	</div>
</section>
<section class="page-section page-section-orange-light">
	<div class="wrapper">
		<h2 class="header-secondary">Light Orange Page Sections</h2>
		<code>.page-section-orange-light</code> – also requires a controlling <code>.page-section</code> base class as well as a <code>.wrapper</code> child immediately within for spacing.
	</div>
</section>
<section class="page-section page-section-green-light">
	<div class="wrapper">
		<h2 class="header-secondary">Light Green Page Sections</h2>
		<code>.page-section-green-light</code> – also requires a controlling <code>.page-section</code> base class as well as a <code>.wrapper</code> child immediately within for spacing.
	</div>
</section>
<section class="page-section page-section-blue-light">
	<div class="wrapper">
		<h2 class="header-secondary">Light Blue Page Sections</h2>
		<code>.page-section-blue-light</code> – also requires a controlling <code>.page-section</code> base class as well as a <code>.wrapper</code> child immediately within for spacing.
	</div>
</section>
<section class="page-section page-section-red-mid">
	<div class="wrapper">
		<h2 class="header-secondary">Mid Red Page Sections</h2>
		<code>.page-section-red-mid</code> – also requires a controlling <code>.page-section</code> base class as well as a <code>.wrapper</code> child immediately within for spacing.
	</div>
</section>
<section class="page-section page-section-orange-mid">
	<div class="wrapper">
		<h2 class="header-secondary">Mid Orange Page Sections</h2>
		<code>.page-section-orange-mid</code> – also requires a controlling <code>.page-section</code> base class as well as a <code>.wrapper</code> child immediately within for spacing.
	</div>
</section>
<section class="page-section page-section-green-mid">
	<div class="wrapper">
		<h2 class="header-secondary">Mid Green Page Sections</h2>
		<code>.page-section-green-mid</code> – also requires a controlling <code>.page-section</code> base class as well as a <code>.wrapper</code> child immediately within for spacing.
	</div>
</section>
<section class="page-section page-section-blue-mid">
	<div class="wrapper">
		<h2 class="header-secondary">Mid Blue Page Sections</h2>
		<code>.page-section-blue-mid</code> – also requires a controlling <code>.page-section</code> base class as well as a <code>.wrapper</code> child immediately within for spacing.
	</div>
</section>
<section class="page-section page-section-brown-mid">
	<div class="wrapper">
		<h2 class="header-secondary">Mid Brown Page Sections</h2>
		<code>.page-section-brown-mid</code> – also requires a controlling <code>.page-section</code> base class as well as a <code>.wrapper</code> child immediately within for spacing.
	</div>
</section>
<section class="page-section page-section-red-strong">
	<div class="wrapper">
		<h2 class="header-secondary">Strong Red Page Sections</h2>
		<code>.page-section-red-strong</code> – also requires a controlling <code>.page-section</code> base class as well as a <code>.wrapper</code> child immediately within for spacing.
	</div>
</section>
<section class="page-section page-section-orange-strong">
	<div class="wrapper">
		<h2 class="header-secondary">Strong Orange Page Sections</h2>
		<code>.page-section-orange-strong</code> – also requires a controlling <code>.page-section</code> base class as well as a <code>.wrapper</code> child immediately within for spacing.
	</div>
</section>
<section class="page-section page-section-green-strong">
	<div class="wrapper">
		<h2 class="header-secondary">Strong Green Page Sections</h2>
		<code>.page-section-green-strong</code> – also requires a controlling <code>.page-section</code> base class as well as a <code>.wrapper</code> child immediately within for spacing.
	</div>
</section>
<section class="page-section page-section-blue-strong">
	<div class="wrapper">
		<h2 class="header-secondary">Strong Blue Page Sections</h2>
		<code>.page-section-blue-strong</code> – also requires a controlling <code>.page-section</code> base class as well as a <code>.wrapper</code> child immediately within for spacing.
	</div>
</section>
<section class="page-section page-section-brown-strong">
	<div class="wrapper">
		<h2 class="header-secondary">Strong Brown Page Sections</h2>
		<code>.page-section-brown-strong</code> – also requires a controlling <code>.page-section</code> base class as well as a <code>.wrapper</code> child immediately within for spacing.
	</div>
</section>
