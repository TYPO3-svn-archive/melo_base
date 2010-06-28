#------------------------------------------------------------
# Navigations
#------------------------------------------------------------
tmp.nav.simple.1 = HMENU
tmp.nav.simple.1 {
	entryLevel = 0
    1 = TMENU
    1 {
        expAll = 0
		noBlur = 1
        wrap = <ul class="hnav">|</ul>
		wrap.insertData = 1
        NO {
            wrapItemAndSub = <li class=first>|</li> |*| <li class=middle>|</li> |*| <li class=last>|</li>
        }
		ACT < .NO
		ACT {
	    	ATagParams = class="active"
			wrapItemAndSub = <li class="active first">|</li> |*| <li class="active">|</li> |*| <li class="active last">|</li>
		}
		ACT = 1
		ACTIFSUB < .NO
		ACTIFSUB {
			wrapItemAndSub = <li class="expanded has-sub first">|</li> |*| <li class="expanded has-sub">|</li> |*| <li class="expanded has-sub last">|</li>
		}
		ACTIFSUB = 1
    }
}
tmp.nav.simple.2 < tmp.nav.simple.1
tmp.nav.simple.2.entryLevel = 1
tmp.nav.simple.3 < tmp.nav.simple.1
tmp.nav.simple.3.entryLevel = 2
tmp.nav.simple.4 < tmp.nav.simple.1
tmp.nav.simple.4.entryLevel = 3

tmp.nav.multi.1 < tmp.nav.simple.1
tmp.nav.multi.1{
	entryLevel = 0
	1.wrap = <ul class="vnav">|</ul>
	2 < .1
	2.wrap = <ul>|</ul>
	3 < .2
	4 < .3
}
tmp.nav.multi.2 < tmp.nav.multi.1
tmp.nav.multi.2.entryLevel = 1
tmp.nav.multi.3 < tmp.nav.multi.1
tmp.nav.multi.3.entryLevel = 2
tmp.nav.multi.4 < tmp.nav.multi.1
tmp.nav.multi.4.entryLevel = 3

tmp.nav.dropdown.1 < tmp.nav.simple.1
tmp.nav.dropdown.1 {
	1{
		expAll = 1
		wrap = <ul class="dnav">|</ul>
	}
	2 < .1	
	2.wrap = <ul>|</ul>
	3 < .2	
	4 < .3
}
tmp.nav.dropdown.2 < tmp.nav.dropdown.1 
tmp.nav.dropdown.2.entryLevel = 1
tmp.nav.dropdown.3 < tmp.nav.dropdown.1 
tmp.nav.dropdown.3.entryLevel = 2
tmp.nav.dropdown.4 < tmp.nav.dropdown.1 
tmp.nav.dropdown.4.entryLevel = 3

tmp.nav.navbar < tmp.nav.dropdown.1
tmp.nav.navbar {
	1{
		expAll = 1
		wrap = <ul class="dnav bnav">|</ul>
	}
	2 < .1	
	2.wrap = <ul>|</ul>
	3 < .2	
	4 < .3
}

tmp.nav.sitemap < tmp.nav.dropdown.1
tmp.nav.sitemap {
	entryLevel = 0
	1{
		expAll = 1
		wrap = <ul class="sitemap contain">|</ul>
	}
	2 < .1	
	2.wrap = <ul>|</ul>
	3 >	
	4 >
}

tmp.nav.folder < tmp.nav.simple.1
tmp.nav.folder {
	special = directory
	entryLevel = 0
}

tmp.nav.breadcrumb < tmp.nav.simple.1
tmp.nav.breadcrumb {
    special = rootline
	excludeUidList = {$pages.home}
    1 {
    	wrap = <ul class="breadcrumb hnav">|</ul>
		NO = 1
        NO {
#        	doNotLinkIt = 0 |*| 0 |*| 1
            wrapItemAndSub = <li class="first">|<span>&raquo;</span></li> |*| <li>|<span>&raquo;</span></li>  |*| <li class="last">|</li>
        }
		ACT < .NO
		ACTIFSUB < .NO
    }
}

tmp.nav.lang = HMENU
tmp.nav.lang {
	special = language
	special.value = 0,1
	special.normalWhenNoLanguage = 0
	wrap = <ul id="langswitch" class="hnav dr">|</ul>
	1 = TMENU
	1 {
		noBlur = 1
		NO = 1
		NO {
			linkWrap = <li>|</li>
			stdWrap.override = <span class="en">English</span> || <span class="de">Deutsch</span>
			doNotLinkIt = 1
			stdWrap.typolink.parameter.data = page:uid
			stdWrap.typolink.additionalParams = &L=0 || &L=1
			stdWrap.typolink.addQueryString = 1
			stdWrap.typolink.addQueryString.exclude = L,id,cHash,no_cache
			stdWrap.typolink.addQueryString.method = GET
			stdWrap.typolink.useCacheHash = 1
			stdWrap.typolink.no_cache = 0
		}
		# Aktive Sprache
		ACT < .NO
		ACT.linkWrap = <li class="active">|</li>
		# NO + Uebersetzung nicht vorhanden
		USERDEF1 < .NO
		# ACT + Uebersetzung nicht vorhanden
		USERDEF2 < .ACT
	}
}


tmp.nav.spotlight = HMENU
tmp.nav.spotlight {
	entryLevel = 0
	1 = TMENU
	1 {
		expAll = 0
		noBlur = 1
		wrap = <ul class="hnav">|</ul>
		NO {
			wrapItemAndSub = <li class=first>|</li> |*| <li class=middle>|</li> |*| <li class=last>|</li>
			stdWrap.cObject = COA
			stdWrap.cObject {
				10 = IMAGE
				10.params = class=title
				10.file = GIFBUILDER
				10.file {
					XY = [10.w]+3,32
					backColor = #292929
					transparentColor = #292929
					transparentBackground = 1
					quality = 100
					10 = TEXT
					10 {
#						niceText = 1
						text.field = title
						fontSize = 22
						fontFile = {$theme.font.bold}
						fontColor = #DDDDDD
						offset = 0,24
					}
#					20 = SCALE
#					20 {
#						width = [10.w] / 1.3
#						height = [10.h] / 1.3
#					}
				}
				20 < .10
				20.params = class=subtitle
				20.file.10{
					text.field = subtitle
					fontSize = 20
					fontFile = {$theme.font.normal}
				}
			}
		}
		ACT < .NO
		ACT {
			wrapItemAndSub = <li class="active first">|</li> |*| <li class="active">|</li> |*| <li class="active last">|</li>
		}
		ACT = 1
		ACTIFSUB < .NO
		ACTIFSUB {
			wrapItemAndSub = <li class="active has-sub first">|</li> |*| <li class="active has-sub">|</li> |*| <li class="active has-sub last">|</li>
		}
		ACTIFSUB = 1
	}
}

tmp.nav.grafic.1 = HMENU
tmp.nav.grafic.1 {
	entryLevel = 0
	1 = GMENU
	1 {
		useLargestItemY = 1
		noBlur = 1
		expAll = 0
		accessKey = 0
		wrap = <ul class="hnav">|</ul>
		NO = 1
		NO {
			ATagTitle.field =  subtitle // title // description
			allWrap = <li>|</li>
			XY = [10.w]+4,[10.h]+6
			transparentBackground = 1
			backColor = #090A00
			10 = TEXT
			10 {
				text.field = title
				offset = 0,12
				fontColor = #ffffff
				niceText = 0
				align	= center
				fontFile = {$theme.font.bold}
				fontSize = 11
			}
		}
		RO < .NO
		RO = 1
		RO{
			transparentBackground = 1
			backColor = #FEC200
			10 {
				fontColor = #090A00
			}
		}
		ACT < .RO
		ACT = 1
		ACT {
			allWrap = <li class="active first">|</li> |*| <li class="active">|</li> |*| <li class="active last">|</li>
			10 {
				fontColor = #090A00
				fontFile = {$theme.font.bold}
				ATagParams = class="active"
			}
		}
	}
}
tmp.nav.grafic.2 < tmp.nav.grafic.1
tmp.nav.grafic.2.entryLevel = 1
tmp.nav.grafic.3 < tmp.nav.grafic.1
tmp.nav.grafic.3.entryLevel = 2
tmp.nav.grafic.4 < tmp.nav.grafic.1
tmp.nav.grafic.4.entryLevel = 3