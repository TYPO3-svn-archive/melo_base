###########################################################
#	Backend Configuration
###########################################################


# Setting default language icon and name to german
mod.SHARED.defaultLanguageLabel = English
mod.SHARED.defaultLanguageFlag = en.gif

# Configure the save & preview button for several extensions
PREVIEWCONF {
	globalConf {
		Lvarname = L
	}
}

admPanel {
	### Module aktivieren:
	enable.edit = 0
	### Vorschau einschalten:
	enable.preview = 1
	### Bleistift:
	override.edit.displayFieldIcons = 0
	### ButtonLeiste:
	override.edit.displayIcons = 1
	### GROßES Adminpanel verbergen:
	hide = 1
}

mod.web_txtemplavoilaM1.enableDeleteIconForLocalElements = 1 
rgslideshow.tables = tt_content,tt_news,pages,fe_users

TCAdefaults.pages_language_overlay {
	sys_language_uid=1
}

TCAdefaults.tt_content {
	imagewidth = 150
	imageorient = 1
	imagecols = 3
	image_zoom = 1
	image_noRows = 1
    sys_language_uid = -1
}

TCEFORM{
	pages_language_overlay{
		author.disabled = 1
		author_email.disabled = 1
		abstract.disabled = 1
		keywords.disabled = 1
		description.disabled = 1
		media.disabled = 1
		starttime.disabled = 1
		endtime.disabled = 1
#		sys_language_uid.disabled = 1
		nav_title.disabled = 1
		tx_realurl_pathsegment.disabled = 1
	}
	tt_content {
	}
	tt_address {
        middle_name.disabled = 1
        building.disabled = 1
        room.disabled = 1
        name.disabled = 1
	}
}

#templavoila.wizards.newContentElement {
	# Add the Media CE to the "special" group
#	wizardItems.special.elements.media {
#		icon = gfx/c_wiz/multimedia.gif
#		title =LLL:EXT:cms/layout/locallang_db_new_content_el.xml:special_media_title
#		description =LLL:EXT:cms/layout/locallang_db_new_content_el.xml:special_media_description
#		tt_content_defValues {
#			CType = media
#		}
#	}
#	wizardItems.special.elements.media {
#		icon = gfx/c_wiz/multimedia.gif
#		title = LLL:EXT:media/locallang_db.xml:tt_content.CType_pi1
#		description = LLL:EXT:media/locallang_db.xml:special_media_title
#		tt_content_defValues {
#			CType = media_pi1
#		}
#	}
#}
#templavoila.wizards.newContentElement.renderMode = tabs

TCEMAIN.clearCacheCmd = all


RTE.default.init {
	plugins = safari,style,layer,table,advimage,advlink,inlinepopups,insertdatetime,media,searchreplace,contextmenu,paste,fullscreen,noneditable,nonbreaking,xhtmlxtras,typo3filemanager,template,spellchecker
	theme_advanced_buttons1 = newdocument,|,undo,redo,|,justifyleft,justifycenter,justifyright,justifyfull,|,cut,copy,paste,pastetext,pasteword,|,search,replace,|,fullscreen,|,cleanup,nonbreaking,spellchecker
	theme_advanced_buttons2 = link,typo3link,unlink,|,image,typo3image,|,tablecontrols
	theme_advanced_buttons3 = code,|,anchor,charmap,media,attribs,styleprops,|,forecolor,backcolor,strikethrough,sub,sup,|,bullist,numlist,|,outdent,indent,|,blockquote,cite,template
	theme_advanced_buttons4 = styleselect,|,formatselect,|,fontselect,|,fontsizeselect,|,bold,italic,underline
	theme_advanced_statusbar_location = bottom
	width = 600
	height = 550
	fix_table_elements = true
	# you could override the following option if you don't want to insert links.
	file_browser_callback = typo3filemanager
	spellchecker_languages = +English=en,German=de
	spellchecker_rpc_url = EXT:tinymce_rte/mod3/rpc.php	

	template_templates {
		10 {
			title = static HTML
			src = EXT:tinymce_rte/res/tinymce_templates/static.html
			description = Adds some static HTML an expert could prepare
		}
		20 {
			title = TYPO3 mod
			description = Use an TYPO3 mod to get data easily into the the TinyMCE Template System
			include = EXT:tinymce_rte/res/tinymce_templates/advanced.php
		}
		12 {
			title = simple replace
			src = EXT:tinymce_rte/res/tinymce_templates/simpleReplace.html
			description = Adds some HTML where certain variables will be replaced
		}
		30 {
			title = TYPO3 mod not available
			description = The include file is not available and this should create an error
			# file is not available should create error
			include = fileadmin/tinymce_templates/notAvailable.php
		}
		25 {
			title = TYPO3 mod see get params
			src = EXT:tinymce_rte/mod4/TinyMCETemplate.php?wow=ja&woow=nein
			description = Use an TYPO3 mod to get data easily into the the TinyMCE Template System
			# inside this php file is only print_r(t3lib_div::_GET());
			include = EXT:tinymce_rte/res/tinymce_templates/getParams.php
		}
	}

	template_replace_values {
		username = Jack Black
	}
	
}

RTE.default {
	
	callbackJavascriptFile =
	
	linkhandler {
		tt_news {
			default {
				# instead of default you could write the id of the storage folder
				# id of the Single News Page
				parameter = 23
				additionalParams = &tx_ttnews[tt_news]={field:uid}
				additionalParams.insertData = 1
				# you need: uid, hidden, header [this is the displayed title] (use xx as header to select other properties)
				# you can provide: bodytext [alternative title], starttime, endtime [to display the current status]
				select = uid,title as header,hidden,starttime,endtime,bodytext
				sorting = crdate desc
			}
		}
	}
	
	# Config used for the spellchecker
	spellcheck {
		general.engine = GoogleSpell
		PSpell.mode = PSPELL_FAST
		PSpell.spelling =
		PSpell.jargon =
		PSpell.encoding =
		PSpellShell.mode = PSPELL_FAST
		PSpellShell.aspell =
		PSpellShell.tmp = ./tmp
	}
	
}

RTE.default.proc {
	# TAGS ALLOWED
	# Added to the default internal list: b,i,u,a,img,br,div,center,pre,font,hr,sub,sup,p,strong,em,li,ul,ol,blockquote,strike,span
	# But, for the sake of clarity, we use a complete list in alphabetic order.
	# center, font, strike, sdfield and  u will be removed on entry (see below).
	# b and i will be remapped on exit (see below).
	allowTags (
		a, abbr, acronym, address, blockquote, b, br, caption, cite, code, div, em, embed,
		h1, h2, h3, h4, h5, h6, hr, i, img, li, link, object, ol, p, param, pre, q,
		span, strong, sub, sup, table, tbody, td, th, tr, tt, ul, small
	)
}

plugin.Tx_Formhandler.properties.flexformFile = FILE:EXT:melo_base/res/xml/flexforms/registration.xml'