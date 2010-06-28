lib.logo = IMAGE
lib.logo.file = fileadmin/{$config.projectFolder}/img/{$config.logoFilename}
lib.logo.wrap = <div id="logo">|</div>
lib.logo.imageLinkWrap = 1
lib.logo.imageLinkWrap {
	enable = 1
    typolink.parameter.stdWrap.data = fullRootLine:10,tx_melobase_home,slide
}

field.teaser < tmp.field
field.teaser.10.source.postUserFunc.field = field_teaser

field.left < tmp.field
field.left.10.source.postUserFunc.field = field_content_left

field.static.left < tmp.staticField
field.static.left.10.source.postUserFunc.field = field_static_left

field.right < tmp.field
field.right.10.source.postUserFunc.field = field_content_right

field.static.right < tmp.staticField
field.static.right.10.source.postUserFunc.field = field_static_right

field.center < tmp.field
field.center.10.source.postUserFunc.field = field_content_center

lib.submenu < tmp.nav.simple
lib.submenu{
	1{
		wrap = <ul class="hnav submenu contain">|</ul>
	}
}

lib.contentmenu < tmp.nav.simple
lib.contentmenu{
	entryLevel = 4
	1{
		wrap = <ul class="vnav contentnav contain">|</ul>
	}
}

lib.nav = COA
lib.nav.100 < tmp.nav.simple
lib.nav.100{
	entryLevel = 1
	1.wrap = <ul class="hnav">|</ul>
}

lib.service = COA
lib.service.100 < tmp.nav.folder
lib.service.100{
	special.value.stdWrap.data = fullRootLine:10,tx_melobase_servicefolder,slide
	1.wrap = <ul class="hnav">|</ul>
}

lib.footerSitemap = COA
lib.footerSitemap{
	100 < tmp.nav.sitemap
}