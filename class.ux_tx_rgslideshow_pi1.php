<?php
/***************************************************************
*  Copyright notice
*
*  (c) 2007 Georg Ringer (just2b) <http://www.just2b.com>
*  All rights reserved
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/

class ux_tx_rgslideshow_pi1 extends tx_rgslideshow_pi1 {
	/**
	 * The main method of the PlugIn
	 *
	 * @param	string		$content: The PlugIn content
	 * @param	array		$conf: The PlugIn configuration
	 * @return	The content that is displayed on the website
	 */
	function main($content,$conf)	{
    // all the preconfiguration
    $this->init($conf);

    // check if the TS is included
    if ($this->conf['active']!=1) {
      return $this->pi_getLL('warning_noTS');
    }

    // load the JS into the header if tests passed. Let the fun begin
    $this->loadJS($this->conf);

    // load all images, depending on the mode
    switch ($this->config['mode']) {
      case 'RECORDS':
        $content.= $this->getPlainImages($this->config['plainImage'], $this->config['description'], $this->conf, $this->config['width'],$this->config['height'],$this->config['target'], 'uploads/tx_rgslideshow');
        break;
      case 'DIRECTORY':
        $content.= $this->getPlainImages($this->config['directory'], $this->config['description'], $this->conf, $this->config['width'],$this->config['height'],$this->config['target'],"");
        break;
      case 'BROWSER':
      default:
        $content.= $this->getGenericRecords($this->config['images'], $this->conf,$this->config['width'],$this->config['height'],$this->config['target']);
    }

    if ($content=="") return '';


    // configuration of the slideshow, fill the array with the options
    $configuration = Array();
    $configuration[] = ($this->config['time'] ==0 ) ? '' : 'auto:true,slideInterval:'.$this->config['time'];
    $configuration[] = ($this->config['bigNavigation']==1) ? '' : 'bigNavigation:false';
    $configuration[] = ($this->config['smallNavigation']==1) ? '' : 'smallNavigation:false';
    $configuration[] = ($this->config['imageBrowser']==0) ? 'browser:false' : '';
    $configuration[] = ($this->conf['prevText']!='"&laquo; "') ? 'prev:"'.$this->conf['prevText'].'"' : '';
    $configuration[] = ($this->conf['nextText']!='" &raquo;"') ? 'next:"'.$this->conf['nextText'].'"' : '';

    // unset all empty fields
    foreach ($configuration as $key=>$value) {
    	if ($value == '') unset($configuration[$key]);
    }

   $configuration = implode(',', $configuration);

    // unique id for the div around && the js obj name
    $id= 'rgslideshow-'.$this->config['uniqueId'];

    // get the true image size
    $imageSize = $GLOBALS['TSFE']->lastImageInfo;

#    $content = '<div class="tx-rgslideshow-pi1" id="'.$id.'" style="width:'.$imageSize[0].'px;height:'.$imageSize[1].'px;">'.$content.'</div>';
    $content = '<div class="tx-rgslideshow-pi1" id="'.$id.'" style="width:'.intval($this->config['width']).'px;height:'.intval($this->config['height']).'px;">'.$content.'</div>';
    #$content.= '<script type="text/javascript">
    #              window.addEvent("domready", function(){
    #                var slideshow'.$this->config['uniqueId'].' = new SimpleSlideShowDemo(
    #                  $$("#'.$id.' img"),{'.$configuration.'});
    #              });
    #            </script>';

        return $content;
	}


    function loadJS($conf) {
        return "";
    }
}
?>
