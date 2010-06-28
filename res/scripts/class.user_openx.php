<?
class user_openx {
	function main($content,$conf){
		$zone = $conf["zone"];
		$campaign = $conf["campaign"];
		if (@include_once($conf["openXPath"].'www/delivery/alocal.php')) {
			if (!isset($phpAds_context)) {
				$phpAds_context = array();
			}
			
			if(!empty($zone)){
				$phpAds_raw = view_local('', $zone, 0, 0, '', '', '0', $phpAds_context);
				return $phpAds_raw['html'];
			}
			
			$ads = "";
			$aDirectLinkedAds = MAX_cacheGetLinkedAds("", $campaign);
			foreach ($aDirectLinkedAds["lAds"] as $ad) {
			    $phpAds_raw = view_local('', 0, 0, $ad["ad_id"], '', '', '0', $phpAds_context);
				$ads .= $phpAds_raw['html'];
			}
			
			$ads = "<a href='http://ads.via-verlag.com/openx-2.4.6/www/delivery/ck.php?oaparams=2__bannerid=190__zoneid=0__cb=a3bf316d94__maxdest=http://google.com' target='_blank'><img src='http://ads.via-verlag.com/openx-2.4.6/www/delivery/ai.php?filename=valmont.png&contenttype=png' width='100' height='30' alt='' title='' border='0' /></a><div id='beacon_190' style='position: absolute; left: 0px; top: 0px; visibility: hidden;'><img src='http://ads.via-verlag.com/openx-2.4.6/www/delivery/lg.php?bannerid=190&amp;campaignid=154&amp;zoneid=0&amp;channel_ids=,&amp;loc=http%3A%2F%2Fdev4.via-verlag.com%2Fads%2Fwww%2Fdelivery%2Falocal-test.php&amp;cb=a3bf316d94' width='0' height='0' alt='' style='width: 0px; height: 0px;' /></div><a href='http://ads.via-verlag.com/openx-2.4.6/www/delivery/ck.php?oaparams=2__bannerid=191__zoneid=0__cb=5712b87bbc__maxdest=http://google.com' target='_blank'><img src='http://ads.via-verlag.com/openx-2.4.6/www/delivery/ai.php?filename=fagerhult.png&contenttype=png' width='118' height='15' alt='fagerhult' title='fagerhult' border='0' /></a><div id='beacon_191' style='position: absolute; left: 0px; top: 0px; visibility: hidden;'><img src='http://ads.via-verlag.com/openx-2.4.6/www/delivery/lg.php?bannerid=191&amp;campaignid=154&amp;zoneid=0&amp;channel_ids=,&amp;loc=http%3A%2F%2Fdev4.via-verlag.com%2Fads%2Fwww%2Fdelivery%2Falocal-test.php&amp;referer=http%3A%2F%2Fdev4.via-verlag.com%2Fads%2Fwww%2Fdelivery%2Falocal-test.php&amp;cb=5712b87bbc' width='0' height='0' alt='' style='width: 0px; height: 0px;' /></div>";
			return $ads;
		}
		
		$ads = array(
			"<a href='http://ads.via-verlag.com/openx-2.4.6/www/delivery/ck.php?oaparams=2__bannerid=190__zoneid=0__cb=a3bf316d94__maxdest=http://google.com' target='_blank'><img src='http://ads.via-verlag.com/openx-2.4.6/www/delivery/ai.php?filename=valmont.png&contenttype=png' width='100' height='30' alt='' title='' border='0' /></a><div id='beacon_190' style='position: absolute; left: 0px; top: 0px; visibility: hidden;'><img src='http://ads.via-verlag.com/openx-2.4.6/www/delivery/lg.php?bannerid=190&amp;campaignid=154&amp;zoneid=0&amp;channel_ids=,&amp;loc=http%3A%2F%2Fdev4.via-verlag.com%2Fads%2Fwww%2Fdelivery%2Falocal-test.php&amp;cb=a3bf316d94' width='0' height='0' alt='' style='width: 0px; height: 0px;' /></div>",
			"<a href='http://ads.via-verlag.com/openx-2.4.6/www/delivery/ck.php?oaparams=2__bannerid=191__zoneid=0__cb=5712b87bbc__maxdest=http://google.com' target='_blank'><img src='http://ads.via-verlag.com/openx-2.4.6/www/delivery/ai.php?filename=fagerhult.png&contenttype=png' width='118' height='15' alt='fagerhult' title='fagerhult' border='0' /></a><div id='beacon_191' style='position: absolute; left: 0px; top: 0px; visibility: hidden;'><img src='http://ads.via-verlag.com/openx-2.4.6/www/delivery/lg.php?bannerid=191&amp;campaignid=154&amp;zoneid=0&amp;channel_ids=,&amp;loc=http%3A%2F%2Fdev4.via-verlag.com%2Fads%2Fwww%2Fdelivery%2Falocal-test.php&amp;referer=http%3A%2F%2Fdev4.via-verlag.com%2Fads%2Fwww%2Fdelivery%2Falocal-test.php&amp;cb=5712b87bbc' width='0' height='0' alt='' style='width: 0px; height: 0px;' /></div>",
			"<a href='http://ads.via-verlag.com/openx-2.4.6/www/delivery/ck.php?oaparams=2__bannerid=192__zoneid=0__cb=5712b87bbc__maxdest=http://google.com' target='_blank'><img src='http://ads.via-verlag.com/openx-2.4.6/www/delivery/ai.php?filename=iguzzini.png&contenttype=png' width='100' height='24' alt='fagerhult' title='fagerhult' border='0' /></a><div id='beacon_191' style='position: absolute; left: 0px; top: 0px; visibility: hidden;'><img src='http://ads.via-verlag.com/openx-2.4.6/www/delivery/lg.php?bannerid=191&amp;campaignid=154&amp;zoneid=0&amp;channel_ids=,&amp;loc=http%3A%2F%2Fdev4.via-verlag.com%2Fads%2Fwww%2Fdelivery%2Falocal-test.php&amp;referer=http%3A%2F%2Fdev4.via-verlag.com%2Fads%2Fwww%2Fdelivery%2Falocal-test.php&amp;cb=5712b87bbc' width='0' height='0' alt='' style='width: 0px; height: 0px;' /></div>",
			"<a href='http://ads.via-verlag.com/openx-2.4.6/www/delivery/ck.php?oaparams=2__bannerid=193__zoneid=0__cb=5712b87bbc__maxdest=http://google.com' target='_blank'><img src='http://ads.via-verlag.com/openx-2.4.6/www/delivery/ai.php?filename=phillips.png&contenttype=png' width='82' height='20' alt='fagerhult' title='fagerhult' border='0' /></a><div id='beacon_191' style='position: absolute; left: 0px; top: 0px; visibility: hidden;'><img src='http://ads.via-verlag.com/openx-2.4.6/www/delivery/lg.php?bannerid=191&amp;campaignid=154&amp;zoneid=0&amp;channel_ids=,&amp;loc=http%3A%2F%2Fdev4.via-verlag.com%2Fads%2Fwww%2Fdelivery%2Falocal-test.php&amp;referer=http%3A%2F%2Fdev4.via-verlag.com%2Fads%2Fwww%2Fdelivery%2Falocal-test.php&amp;cb=5712b87bbc' width='0' height='0' alt='' style='width: 0px; height: 0px;' /></div>"
		);

		$ads = $this->processAds($ads,$conf);
		return implode("",$ads);
	}
	
	public function processAds($ads,$conf){
		$spriteconf = $conf["spriteconf."]["base."];
		$prefix = $conf["spriteconf."]["classprefix"];
		$spriteconf["file."]["XY"] = $conf["spriteconf."]["width"].",".($conf["spriteconf."]["height"]*count($ads));
		$css = "";
		foreach ($ads as $key => $raw) {
			$key = $key+1;
			$matches = array();
			preg_match_all("/<(a[^>]+href=['\"][^\"']+['\"][^>]*)>(<img[^>]+src=['\"]([^\"']+?filename=([^\"'&]+)[^\"']+)[^>]*>)/",$raw,$matches);
			$file = "typo3temp/pics/".$matches[4][0];
			t3lib_div::writeFileToTypo3tempDir(PATH_site.$file,t3lib_div::getUrl($matches[3][0]));
#			print_r($matches);
			$w = $conf["spriteconf."]["width"];
			$imagesize = getimagesize(PATH_site.$file);
			$imageHeight = ($imagesize[1] / ($imagesize[0] / $w));
			
			$h = ($conf["spriteconf."]["height"] / 2) + ($conf["spriteconf."]["height"] * ($key - 1)) - ($imageHeight/2);
			$spriteconf["file."][$key] = $conf["spriteconf."]["image"];
			$spriteconf["file."][$key."."] = $conf["spriteconf."]["image."];
			$spriteconf["file."][$key."."]["file"] = $file;
			$spriteconf["file."][$key."."]["offset"] = $conf["spriteconf."]["width"]."-[".$key.".w]/2,".$h;
			
			$h = intval(($conf["spriteconf."]["height"] * ($key - 1)));
			$attributes = "style='background-position:0px -".$h."px;'";
			$raw = str_replace($matches[2][0],$matches[4][0],$raw);
			$raw = str_replace($matches[1][0],$matches[1][0].$attributes,$raw);
			$raw = str_replace("|",$raw,$conf["spriteconf."]["wrap"]);
			$ads[$key-1] = $raw;
		}
		$preview = $GLOBALS["TSFE"]->cObj->IMG_RESOURCE($spriteconf);
		#echo "<img src='/typo3-tpl/".$preview."' />";
		array_unshift($ads,str_replace("|","/typo3-tpl/".$preview,$conf["spriteconf."]["spritewrap"]));
		return $ads;
	}
}
?>