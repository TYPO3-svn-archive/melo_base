tmp.formbase {
	addErrorAnchors = 0
	formValuesPrefix = formhandler
	markers.prefix.value = formhandler
	
	langFile.1 			= typo3conf/ext/melo_base/res/xml/forms/common.xml
    masterTemplateFile  = typo3conf/ext/melo_base/res/html/forms/master.html
	
	# HTML wrapping by validation error
	errorListTemplate {
		totalWrap = <ul>|</ul>
		singleWrap = <li class="error">|</li>
	}
	singleErrorTemplate {
		singleWrap = <span class="error">|</span><br />
	}
	
	# Loggers configuration
	loggers {
		1 {
			class = Tx_Formhandler_Logger_DB
		}
	}

	# Finishers configuration
	finishers {
		1.class = Tx_Formhandler_Finisher_Mail
		1.config {
			limitMailsToUser = 5
			admin {
#				to_email = mneuhaus@via-internet.com
#				to_name = VIA-Verlag
#				subject = VIA-Verlag Contact-Form
				sender_email = email
				sender_name = lastname
				replyto_email = email
				replyto_name = lastname
				htmlEmailAsAttachment = 0
			}
			user >
		}
		3.class = Tx_Formhandler_Finisher_SubmittedOK
		3.config {
			returns = 1
		}
	}
	
	markers {
		options_countries = CONTENT
		options_countries{
		   table = static_countries
		   select {
		       pidInList = 0
		       orderBy = cn_short_en
		       selectFields = uid, cn_short_en, cn_short_local
		   }

		   renderObj = COA
		   renderObj {

		       #value
		       10.wrap = <option value="|" 
		       10 = TEXT
		       10.field = cn_short_en

		       #selected
		       12 = COA
		       12 {
    		       10 = TEXT
    		       10.value = selected
    		       if.value.field = cn_short_en
    		       if.equals = United Kingdom
               }
               
		       #label
		       13 = TEXT
		       13.wrap = >|</option>
		       13.field = cn_short_en
		   }
		}
		prefix = TEXT
	}
}


[globalVar = GP:L=1] 
tmp.formbase.markers.options_countries.renderObj.12.if.equals = Germany
[global]