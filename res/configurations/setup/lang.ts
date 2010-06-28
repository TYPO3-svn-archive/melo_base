config { 
    linkVars = L,print 
    uniqueLinkVars = 1 
    sys_language_uid = 0
    language = en
    locale_all = en_EN
    htmlTag_langKey = en_EN
    sys_language_overlay = hideNonTranslated
    sys_language_mode = content_fallback ; 0,1
}
plugin.tt_news.sys_language_mode = strict


[globalVar = GP:L=0] 
    config.sys_language_uid = 0 
    config.language = en 
    config.locale_all = en-US 
    config.htmlTag_langKey = en 
[global] 

[globalVar = GP:L=1] 
    config.sys_language_uid = 1 
    config.language = de 
    config.locale_all = de_DE 
    config.htmlTag_langKey = de_DE 
[global]