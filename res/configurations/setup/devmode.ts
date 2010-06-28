[globalVar = LIT:{$config.devmode} > 0]
# && [userFunc = user_match(checkBEUserIsAdmin)]
	page.5 = COA
	page.5.wrap = <div class="dev">|</div>
	
	page.5.1 = HTML
	page.5.1.value = <div style="float:left;margin-left:10px;">Debug Level: {$config.devmode}</div>
	
	page.5.1 = HTML
	page.5.1.value = <div style="float:left;margin-left:10px;">Debug Level: {$config.devmode}</div>
	
	page.5.10 = TEXT
	page.5.10 {
		value = Go to the Development Pages
		typolink {
	    target = _self
	    parameter.stdWrap.data = fullRootLine:10,tx_melobase_devpage,slide
		}
	}
	page.5.20 < page.headerData.500
	page.5.20.wrap = <a href="|">RSS</a>
	
	page.5.30 = HTML
	page.5.30.value = <style>body {margin-bottom:20px !important;}</style>
	
	# Disable Cache during Development
	config.no_cache = 1
	
	# Disable CSS/JS Merging/compressing
	page.1000.merge = 0
	
	#Include The Development Tree in the Sitemap
	tt_content.menu.20.2.includeNotInMenu = 1
[end]	

[globalVar = LIT:{$config.devmode} > 1]
	# Set the Menu Entrylevel 2 to Make the Development tree the Main Level
	tmp.nav.navbar.entryLevel = 1
	tmp.nav.sitemap.entryLevel = 1
	tmp.nav.spotlight.entryLevel = 1
	
	tmp.nav.simple.1.entryLevel = 1
	tmp.nav.simple.2.entryLevel = 2
	tmp.nav.simple.3.entryLevel = 3
	tmp.nav.simple.4.entryLevel = 4
	
	tmp.nav.multi.1.entryLevel = 1
	tmp.nav.multi.2.entryLevel = 2
	tmp.nav.multi.3.entryLevel = 3
	tmp.nav.multi.4.entryLevel = 4
	
	tmp.nav.grafic.1.entryLevel = 1
	tmp.nav.grafic.2.entryLevel = 2
	tmp.nav.grafic.3.entryLevel = 3
	tmp.nav.grafic.4.entryLevel = 4
	
	tmp.nav.dropdown.1.entryLevel = 1
	tmp.nav.dropdown.2.entryLevel = 2
	tmp.nav.dropdown.3.entryLevel = 3
	tmp.nav.dropdown.4.entryLevel = 4
[else]
#	tmp.nav.simple.excludeUidList = {$config.devpage}
[end]