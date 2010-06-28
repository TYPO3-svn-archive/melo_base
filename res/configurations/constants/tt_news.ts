plugin.tt_news  {
	pid_list < pages.newsFolder
	amenuWithCatSelector = 0
	amenuStart = -5 years
	showRelatedNewsByCategory = 1
	displayXML {
		rss2_tmplFile = EXT:tt_news/res/rss_2.tmpl
		xmlFormat = rss2
		
		xmlTitle < config.title
		xmlLink < config.baseUrl
		xmlDesc < config.description
		xmlLang = en
#		xmlIcon = fileadmin/rss_icon.gif
		
		title_stdWrap.htmlSpecialChars = 1
		title_stdWrap.htmlSpecialChars.preserveEntities = 1
		subheader_stdWrap.stripHtml = 1
		subheader_stdWrap.htmlSpecialChars = 1
		subheader_stdWrap.htmlSpecialChars.preserveEntities = 1
		subheader_stdWrap.crop = 500| ... | 1
		subheader_stdWrap.ifEmpty.field = bodytext
		xmlLastBuildDate = 1
	}
	
	archiveTypoLink.parameter = 47
	latestMaxW = 200
	latestMaxH = 200
	listMaxW = 200
	listMaxH = 0
	listImageMode = resize
	rgnewsce.displaySingle.renderWithCssStyledContent = 1
	rgnewsce.displaySingle.image.image_zoom = 0
	rgnewsce.renderSingleInListAndLatest = 0
	singleMaxW = 350
	singleMaxH = 240
}
constants/