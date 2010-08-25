<?php
if(!defined("PATH_site")) define("PATH_site",dirname(__FILE__)."/../../../");

$TYPO3_CONF_VARS['EXTCONF']['error_404_multilingual'] = array(
    '_DEFAULT' => array(
        'errorPage' => 'typo3-tpl/404', # insert the SpeakingURL path segment of the error page here
        'redirects' => array(
            // 'test.php' => '/', # Mapping for alternate 404 pages 'old_url' => 'new_url'
        ),
#        'mail' => 'example@test.com'
        'mailOnRedirect' => false,
        'mailOn404' => false,
    )
);

// Prevent new realurl updates from clearing cache
unset($TYPO3_CONF_VARS['SC_OPTIONS']['t3lib/class.t3lib_tcemain.php']['clearAllCache_additionalTables']['tx_realurl_pathcache']);

// realurl naming precedence configuration
$TYPO3_CONF_VARS['FE']['addRootLineFields'] .= ',tx_realurl_pathsegment,alias,title';

// Ensure the Realurlconf is an array
$TYPO3_CONF_VARS['EXTCONF']['realurl'] = $TYPO3_CONF_VARS['EXTCONF']['realurl'] ? $TYPO3_CONF_VARS['EXTCONF']['realurl'] : array();

$path_site = dirname(__FILE__)."/../";

// Include base Configuration
$base = $path_site."typo3conf/ext/melo_base/res/configurations/realurlconf.yaml";
$baseConf = sfYaml::load($base);

$TYPO3_CONF_VARS['EXTCONF']['realurl'] = array_merge_recursive($TYPO3_CONF_VARS['EXTCONF']['realurl'],$baseConf);

// Include Project Configurations
$configurations = glob($path_site."/fileadmin/*/configurations/realurlconf.yaml");
foreach ($configurations as $conf) {
	if(is_array($rconf = sfYaml::load($conf)))
		$TYPO3_CONF_VARS['EXTCONF']['realurl'] = array_merge_recursive($TYPO3_CONF_VARS['EXTCONF']['realurl'],$rconf);
}
$TYPO3_CONF_VARS['EXTCONF']['realurl'] = $TYPO3_CONF_VARS['EXTCONF']['realurl'];

// Copy .htaccess to the root of the TYPO3 Enviroment if it doesn't exist
$source = PATH_site."/typo3conf/ext/melo_base/res/_.htaccess";
$target = PATH_site."/.htaccess";
if(!is_file($target))
	t3lib_div::writeFile($target,file_get_contents($source));
	

$TYPO3_CONF_VARS['SYS']['UTF8filesystem'] = '1';
$TYPO3_CONF_VARS['BE']['forceCharset'] = 'utf-8';
$TYPO3_CONF_VARS['GFX']['gdlib_2'] = '1';
$TYPO3_CONF_VARS['GFX']['im_imvMaskState'] = '1';
$TYPO3_CONF_VARS['GFX']['im_v5effects'] = '1';
$TYPO3_CONF_VARS['GFX']['png_truecolor'] = '1';


$TYPO3_CONF_VARS['EXT']['extConf']['jq_fancybox'] = 'a:4:{s:18:"disableJsFramework";s:1:"1";s:17:"disableLightboxJs";s:1:"1";s:18:"enableJQueryEasing";s:1:"1";s:22:"enablejQueryMousewheel";s:1:"0";}';	//  Modified or inserted by TYPO3 Extension Manager.

// Repair broken Templavoila Mappings if neccesary
include_once(t3lib_extMgm::extPath("melo_base")."repair-serialized-array.php");
$TYPO3_CONF_VARS[TYPO3_MODE]['XCLASS']['ext/templavoila/pi1/class.tx_templavoila_pi1.php'] = t3lib_extMgm::extPath("melo_base")."class.ux_tx_templavoila_pi1.php";

$fields = explode(",",$TYPO3_CONF_VARS['FE']['addRootLineFields']);
$fields[] = "tx_melobase_newsfolder, tx_melobase_newsdetail, tx_melobase_home, tx_melobase_servicefolder, tx_melobase_footerfolder, tx_melobase_devpage, tx_melobase_searchpage, tx_melobase_404";
$TYPO3_CONF_VARS['FE']['addRootLineFields'] = implode(",",$fields);

#$TYPO3_CONF_VARS[TYPO3_MODE]['XCLASS']['ext/pagenotfound_handler/class.tx_pagenotfoundhandler.php'] = t3lib_extMgm::extPath("melo_base")."class.ux_tx_pagenotfoundhander.php";
$TYPO3_CONF_VARS['FE']['pageNotFound_handling'] = 'USER_FUNCTION:EXT:melo_base/class.user_tx_pagenotfoundhandler.php:user_tx_pagenotfoundhandler->main';

include_once(t3lib_extMgm::extPath("melo_base")."class.user_match.php");

#$TYPO3_CONF_VARS[TYPO3_MODE]['XCLASS']['ext/templavoila/mod1/index.php'] = t3lib_extMgm::extPath("melo_base")."class.ux_tx_templavoila_module1.php";
$TYPO3_CONF_VARS['EXTCONF']['templavoila']['mod1']['renderPreviewContentClass'][] = 'EXT:melo_base/class.tx_melo_base_preview.php:&tx_melo_base_preview';
$TYPO3_CONF_VARS[TYPO3_MODE]['XCLASS']['ext/rgslideshow/pi1/class.tx_rgslideshow_pi1.php'] = t3lib_extMgm::extPath("melo_base")."class.ux_tx_rgslideshow_pi1.php";

if (t3lib_extMgm::isLoaded('templavoila'))    {
    require_once (t3lib_extMgm::extPath($_EXTKEY).'class.tx_melobase_sidebar.php');
    tx_melobase_sidebar::init();
}