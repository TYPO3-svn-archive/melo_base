plugin.Tx_Formhandler.settings.predef.simple_contact < tmp.formbase
plugin.Tx_Formhandler.settings.predef.simple_contact {
	# Common configuration
	name = Simple Contact Form
	debug = 0
	templateFile 		= typo3conf/ext/melo_base/res/html/forms/simple_contact.html
	langFile.1 			= typo3conf/ext/melo_base/res/xml/forms/common.xml
	stylesheetFile 		= typo3conf/ext/melo_base/res/css/forms/simple_contact.css 
	masterTemplateFile 	= typo3conf/ext/melo_base/res/html/forms/master.html
	formValuesPrefix = contact
	markers {
		prefix = TEXT
		prefix.value = contact
	}
	validators {
		1 {
			class = Tx_Formhandler_Validator_Default
			config {
				fieldConf {
					email {
						errorCheck.1 = required
					}
					message {
						errorCheck.1 = required
					}
				}
			}
		}
	}
}