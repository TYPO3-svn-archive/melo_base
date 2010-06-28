#------------------------------------------------------------
# Basic Configuration
#------------------------------------------------------------
plugin.tt_news {
	templateFile = typo3conf/ext/melo_base/res/html/tt_news.html
	displayXML.xmlLang < config.language
	code = LIST
	defaultCode = LIST
	pid_list.data = fullRootLine:10,tx_melobase_newsfolder,slide
	singlePid.field = pid
	backPid.field = pid
	archiveTypoLink.parameter >
	displayList.subheader_stdWrap.crop = 300 | ... | 1
    showNewsWithoutDefaultTranslation = 1
}


#------------------------------------------------------------
# Switches to Single/Search view according to GET Vars
#------------------------------------------------------------
[globalVar = GP:tx_ttnews|swords = ]
	# Do nothing (reverse hack)
[else]
	# Set code to SEARCH if swords (search is done) exists
	plugin.tt_news.code = SEARCH
[end]

[globalVar = GP:tx_ttnews|tt_news > 0]
	# Set code to SINGLE, if the GETvar tx_ttnews[tt_news] exists
	plugin.tt_news.code = SINGLE
	defaultCode = SINGLE
[end]

#------------------------------------------------------------
# RSS Feed
#------------------------------------------------------------
xmlnews >
xmlnews = PAGE
xmlnews {
	typeNum = 100
	
	10 < plugin.tt_news
	10.displayXML.xmlDesc >
	10.pid_list >
	10.pid_list = TEXT
	10.pid_list.stdWrap.data = fullRootLine:10,tx_melobase_newsfolder,slide
	10.singlePid >
	10.singlePid = TEXT
	10.singlePid.stdWrap.data = fullRootLine:10,tx_melobase_newsdetail,slide
	
	10.code = XML
	config {
		disableAllHeaderCode = 1
		additionalHeaders = Content-type:text/xml
		no_cache = 1
		xhtml_cleaning = 0
	}
}

#------------------------------------------------------------
# Alternate Link for the RSS Feed
#------------------------------------------------------------
page.headerData.500 = TEXT
page.headerData.500 {
	typolink{
		#uid der Seite, die als RSS-Feed funktionieren soll.
		parameter = {page:uid},100
		parameter.stdWrap.insertData = 1
		returnLast= url
	}
	wrap = <link rel="alternate" type="application/rss+xml" title="RSS-Feed" href="|" />
}

plugin.tt_news._LOCAL_LANG{
    default {
        pi_list_browseresults_displays = Displaying ###FROM### to ###TO### of ###OUT_OF###
        pi_list_browseresults_displays_advanced = Displaying ###FROM### to ###TO### of ###OUT_OF###
        more = Read More ...
        catmenuHeader =
        pi_flexform.LIST2 = test
    }
    de {
        pi_list_browseresults_displays = News ###SPAN_BEGIN###%s bis %s von %s</span>
        more = Weiterlesen ...
        catmenuHeader =
        pi_flexform.LIST2 = test
    }
}


plugin.tt_news.displayLatest.subheader_stdWrap.crop >
plugin.tt_news.rgnewsce.displaySingle.csc-imagetxt.20.1.layout.17.value = <div class="csc-textpic csc-textpic-intext-left###CLASSES###">###IMAGES######TEXT###</div>
plugin.tt_news.rgnewsce.displaySingle.csc-imagetxt.20.default.layout.17.value = <div class="csc-textpic csc-textpic-intext-left###CLASSES###">###IMAGES######TEXT###</div>
plugin.tt_news.archiveTitleCObject.10.strftime = %B
plugin.tt_news.pageBrowser.showFirstLast = 0
plugin.tt_news.pageBrowser.showRange = 0
plugin.tt_news.displayCatMenu.mode = nestedWraps
plugin.tt_news.displayCatMenu.catmenuHeader_stdWrap.wrap = <li>|</li>
plugin.tt_news.displayCatMenu.catmenuLevel1_stdWrap.wrap = <li>|</li>
plugin.tt_news.displayCatMenu.catmenuLevel2_stdWrap.wrap = <li>|</li>
plugin.tt_news.displayCatMenu.catmenuLevel3_stdWrap.wrap >
plugin.tt_news.displayCatMenu.catmenuLevel4_stdWrap.wrap >
plugin.tt_news.displayCatMenu.catmenuItem_NO_stdWrap.wrap > #= <li>|</li>
plugin.tt_news.displayCatMenu.catmenuItem_ACT_stdWrap.wrap > #= <li class="act">|</li>
plugin.tt_news.displayCatMenu.catmenu_stdWrap.wrap = <ul class="vnav">|</ul>

plugin.tt_news.displayList.image.wrap = <div class="dl mr1 image-wrap"> | </div>