#------------------------------------------------------------
# Fields for Templavoila Mapping
#------------------------------------------------------------
tmp.field = COA
tmp.field {
	10 = RECORDS
	10{
		source.postUserFunc = tx_kbtvcontslide_pi1->main
		source.postUserFunc{
			table = tt_content
			languageFallback = 0
			slide = 0
		}
		tables = tt_content
	}
	stdWrap{
		wrap (
			<!--TYPO3SEARCH_begin--> 
				| 
			<!--TYPO3SEARCH_end-->
		)	
		required = 1
	}
}

tmp.staticField = COA
tmp.staticField{
	10 = RECORDS
	10{
		source.postUserFunc = tx_kbtvcontslide_pi1->main
		source.postUserFunc{
			field = field_static_right
			table = tt_content
			languageFallback = 0
			slide = 10
		}
		tables = tt_content
	}
}

tmp.clear = HTML
tmp.clear.value = <div class="clear"> </div>

#------------------------------------------------------------
# Automatic Copyright
#------------------------------------------------------------
tmp.copyright = TEXT
tmp.copyright.data = date:U
tmp.copyright.strftime =%Y
tmp.copyright.wrap= (c) | {$config.title}


tmp.searchbox = COA_INT
tmp.searchbox { 
	stdWrap.prefixComment = 2 | lib.searchbox 
	10 = TEXT 
	10.typolink.parameter.stdWrap.data = fullRootLine:10,tx_melobase_searchpage,slide
	10.typolink.returnLast = url 
	10.wrap = <div id="indexedsearchbox"><form action="|" method="post" id="indexedsearch">
	20 = COA 
	20 { 
		10 = TEXT 
		10.data = GPvar : tx_indexedsearch |sword 
		10.wrap =<input name="tx_indexedsearch[sword]" value="|" class="searchbox-sword" type="text"  placeholder="Search"/>
		20 = COA 
		20 { 
			10 = TEXT 
			10.value = <input type="hidden" name="tx_indexedsearch[sections]" value="0" /> 
			20 = TEXT 
			20.value = <input name="tx_indexedsearch[submit_button]" value="Search" type="submit" class="searchbutton"/> 
			#30 = TEXT 
			#30.value = <input name="search" value="Search" class="searchbox-button" type="submit" /> 
		} 
	}
	wrap = | </form></div> 
}

tmp.pagetitle=TEXT 
tmp.pagetitle.insertData = 1 
tmp.pagetitle.wrap = <h1 id="pagetitle">|</h1>
tmp.pagetitle.data = page:title