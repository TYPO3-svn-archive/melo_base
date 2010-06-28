plugin.tx_cal_controller {
	display {
		tt_news {
			template = typo3conf/ext/melo_base/res/html/cal/ts.tmpl
			externalPlugin = 1
			externalPlugin.singleViewPid = 129
#			startTimeField = 
			
			fieldMapping.location = tx_ttnewslocation_location
			event.event.location.dataWrap >
			
			enableLocalizationAndVersioning = 1
		}
	}
	view {
		event.eventViewPid = 1
		
		list{
			heading >
			found_stdWrap >
			found_stdWrap.wrap = <div style="display:none">|</div>
			
			endtime = +24 Months
			starttime = Now
			
			event.location.dataWrap >
			
			pageBrowser.piPageBrowser.showResultCount = 0
		}
	}
}
# Check if cal is allowed to be cached or not. If not (f.e. if we're in frontend editing mode or a search query is processed) change to a USER_INT
[userFunc = user_isCalNotAllowedToBeCached()] 
	plugin.tx_cal_controller = USER_INT
	plugin.tx_cal_controller.isUserInt = 1
[global]

#config.cache_clearAtMidnight = 1



plugin.tx_cal_controller._CSS_DEFAULT_STYLE >
plugin.tx_cal_controller.view.month.event.title.crop = 30|...