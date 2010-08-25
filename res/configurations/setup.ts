#----------------------------------------------------------
#	Additional General Configuration
#----------------------------------------------------------

config {
	tx_realurl_enable = {$config.tx_realurl_enable}
	baseURL = {$config.baseUrl}
	extTarget = {$styles.content.links.extTarget}
	index_enable = {$config.index_enable}
	spamProtectEmailAddresses = 0
	index_metatags = 0
	doctype = xhtml_trans
	xmlprologue = none
	xhtml_cleaning = all
	noPageTitle = 1
}

#----------------------------------------------------------
#    Page Configuration
#----------------------------------------------------------

page = PAGE
page {
	typeNum = 0
	10 = USER
	10.userFunc = tx_templavoila_pi1->main_page
	10.disableExplosivePreview = 1
	
	meta.keywords.field=keywords
	meta.description.field=description
	meta.abstract.field=abstract
	meta.author.field=author
	meta.email.field=email
	
	headerData {
		10 = TEXT
		10 {
			field = title
			noTrimWrap = |<title>| - {$config.title}</title>|
		}
	}
	
	1200 < page.100
	1200{
		merge = 0
		compress = 0
		includeImages = 1
		useCache = 1
		CSSURLExpr = /url\(["']*([^\"')]+)["']*\)/
	}
	
	100 = COA
	
	includeJS{
		jquery = typo3conf/ext/melo_base/res/js/jquery.min.js
		jquery_equalize = typo3conf/ext/melo_base/res/js/jquery.equalize.js
		jquery_fancybox = typo3conf/ext/melo_base/res/js/jquery.fancybox.js
		jquery_easing = typo3conf/ext/melo_base/res/js/jquery.easing.js
        jquery_nivo = typo3conf/ext/melo_base/res/js/jquery.nivo.slider.pack.js
        jquery_ui = typo3conf/ext/melo_base/res/js/jquery.ui.js
	}
	
	includeCSS{
		reset = typo3conf/ext/melo_base/res/css/emtastic/reset-min.css
		percent-grid = typo3conf/ext/melo_base/res/css/emtastic/plugins/percent-grid.css
		grid-min = typo3conf/ext/melo_base/res/css/emtastic/grid-min.css
		emtastic-ideas = typo3conf/ext/melo_base/res/css/emtastic-ideas.css
		typo = typo3conf/ext/melo_base/res/css/typo.css
		form = typo3conf/ext/melo_base/res/css/form.css
		screen = typo3conf/ext/melo_base/res/css/screen.css
        ext_comments = typo3conf/ext/melo_base/res/css/ext/comments.css
        ext_slider = typo3conf/ext/melo_base/res/css/ext/slider.css
		ext_indexed_search = typo3conf/ext/melo_base/res/css/ext/indexed_search.css
		ext_cal = typo3conf/ext/melo_base/res/css/ext/cal.css
		ext_sb_portfolio = typo3conf/ext/melo_base/res/css/ext/sb_portfolio.css
        ext_tt_news = typo3conf/ext/melo_base/res/css/ext/tt_news.css
        ext_jfmulticontent = typo3conf/ext/melo_base/res/css/ext/jfmulticontent.css
#		typo3conf/ext/melo_base/res/css/print.css

		nav_dropdown = typo3conf/ext/melo_base/res/css/nav/dropdown.css
	}
}

tx_ddgooglesitemap.forceStartPid = 1
tt_content.image.20.maxW = 960


#------------------------------------------------------------
#	Include Sub Configurations
#------------------------------------------------------------
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/melo_base/res/configurations/setup/lang.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/melo_base/res/configurations/setup/tmp/misc.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/melo_base/res/configurations/setup/tmp/nav.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/melo_base/res/configurations/setup/ext/sb_portfolio.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/melo_base/res/configurations/setup/ext/jp_pageteaser.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/melo_base/res/configurations/setup/ext/cal.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/melo_base/res/configurations/setup/ext/indexed_search.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/melo_base/res/configurations/setup/ext/jq_fancybox.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/melo_base/res/configurations/setup/ext/comments.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/melo_base/res/configurations/setup/ext/tt_news.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/melo_base/res/configurations/setup/ext/pagenotfound_handler.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/melo_base/res/configurations/setup/ext/rgslideshow.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/melo_base/res/configurations/setup/ext/jfmulticontent.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/melo_base/res/configurations/setup/devmode.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/melo_base/res/configurations/setup/fields.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/melo_base/res/configurations/setup/other/content.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/melo_base/res/configurations/setup/fce.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/melo_base/res/configurations/setup/other/forms/_base.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/melo_base/res/configurations/setup/other/forms/simple_contact.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/melo_base/res/configurations/setup/icons.ts">