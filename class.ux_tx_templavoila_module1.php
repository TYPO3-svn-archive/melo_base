<?php

/**
* 
*/
class ux_tx_templavoila_module1 extends tx_templavoila_module1
{
	/**
	 * Returns an HTMLized preview of a certain content element. If you'd like to register a new content type, you can easily use the hook
	 * provided at the beginning of the function.
	 *
	 * @param	array		$row: The row of tt_content containing the content element record.
	 * @return	string		HTML preview content
	 * @access protected
	 * @see		getContentTree(), render_localizationInfoTable()
	 */
	function render_previewContent($row) {
		global $TYPO3_CONF_VARS, $LANG;
		
		$meloBaseConf = unserialize($TYPO3_CONF_VARS['EXT']['extConf']['melo_base']);
		$trim = isset($meloBaseConf["trim"]) ? $meloBaseConf["trim"] : 2000;
		
		$hookObjectsArr = $this->hooks_prepareObjectsArray ('renderPreviewContentClass');
		$alreadyRendered = FALSE;
		$output = '';

			// Hook: renderPreviewContent_preProcess. Set 'alreadyRendered' to true if you provided a preview content for the current cType !
		reset($hookObjectsArr);
		while (list(,$hookObj) = each($hookObjectsArr)) {
			if (method_exists ($hookObj, 'renderPreviewContent_preProcess')) {
				$output .= $hookObj->renderPreviewContent_preProcess ($row, 'tt_content', $alreadyRendered, $this);
			}
		}

		if (!$alreadyRendered) {
				// Preview content for non-flexible content elements:
			switch($row['CType'])	{
				case 'text':		//	Text
				case 'table':		//	Table
				case 'mailform':	//	Form
					$output = $this->link_edit('<strong>'.$LANG->sL(t3lib_BEfunc::getItemLabel('tt_content','bodytext'),1).'</strong> '.htmlspecialchars(t3lib_div::fixed_lgd_cs(trim(strip_tags($row['bodytext'])),$trim)),'tt_content',$row['uid']).'<br />';
					break;
				case 'image':		//	Image
					$output = $this->link_edit('<strong>'.$LANG->sL(t3lib_BEfunc::getItemLabel('tt_content','image'),1).'</strong><br /> ', 'tt_content', $row['uid']).t3lib_BEfunc::thumbCode ($row, 'tt_content', 'image', $this->doc->backPath).'<br />';
					break;
				case 'textpic':		//	Text w/image
				case 'splash':		//	Textbox
					$thumbnail = '<strong>'.$LANG->sL(t3lib_BEfunc::getItemLabel('tt_content','image'),1).'</strong><br />';
					$thumbnail .= t3lib_BEfunc::thumbCode($row, 'tt_content', 'image', $this->doc->backPath);
					$text = $this->link_edit('<strong>'.$LANG->sL(t3lib_BEfunc::getItemLabel('tt_content','bodytext'),1).'</strong> '.htmlspecialchars(t3lib_div::fixed_lgd_cs(trim(strip_tags($row['bodytext'])),$trim)),'tt_content',$row['uid']);
					$output='<table><tr><td valign="top">'.$text.'</td><td valign="top">'.$thumbnail.'</td></tr></table>'.'<br />';
					break;
				case 'bullets':		//	Bullets
					$htmlBullets = '';
					$bulletsArr = explode ("\n", t3lib_div::fixed_lgd_cs($row['bodytext'],$trim));
					if (is_array ($bulletsArr)) {
						foreach ($bulletsArr as $listItem) {
							$htmlBullets .= htmlspecialchars(trim(strip_tags($listItem))).'<br />';
						}
					}
					$output = $this->link_edit('<strong>'.$LANG->sL(t3lib_BEfunc::getItemLabel('tt_content','bodytext'),1).'</strong><br />'.$htmlBullets, 'tt_content', $row['uid']).'<br />';
					break;
				case 'uploads':		//	Filelinks
					$output = $this->link_edit('<strong>'.$LANG->sL(t3lib_BEfunc::getItemLabel('tt_content','media'),1).'</strong><br />'.str_replace (',','<br />',htmlspecialchars(t3lib_div::fixed_lgd_cs(trim(strip_tags($row['media'])),$trim))), 'tt_content', $row['uid']).'<br />';
					break;
				case 'multimedia':	//	Multimedia
					$output = $this->link_edit ('<strong>'.$LANG->sL(t3lib_BEfunc::getItemLabel('tt_content','multimedia'),1).'</strong><br />' . str_replace (',','<br />',htmlspecialchars(t3lib_div::fixed_lgd_cs(trim(strip_tags($row['multimedia'])),$trim))), 'tt_content', $row['uid']).'<br />';
					break;
				case 'menu':		//	Menu / Sitemap
					$output = $this->link_edit ('<strong>'.$LANG->sL(t3lib_BEfunc::getItemLabel('tt_content','menu_type')).'</strong> '.$LANG->sL(t3lib_BEfunc::getLabelFromItemlist('tt_content','menu_type',$row['menu_type'])).'<br />'.
						'<strong>'.$LANG->sL(t3lib_BEfunc::getItemLabel('tt_content','pages')).'</strong> '.$row['pages'], 'tt_content', $row['uid']).'<br />';
					break;
				case 'list':		//	Insert Plugin
					$extraInfo = $this->render_previewContent_extraPluginInfo($row);
					$output = $this->link_edit('<strong>'.$LANG->sL(t3lib_BEfunc::getItemLabel('tt_content','list_type')).'</strong> ' . htmlspecialchars($LANG->sL(t3lib_BEfunc::getLabelFromItemlist('tt_content','list_type',$row['list_type']))).' &ndash; '.htmlspecialchars($extraInfo ? $extraInfo : $row['list_type']), 'tt_content', $row['uid']).'<br />';
					break;
				case 'html':		//	HTML
					$output = $this->link_edit('<strong>'.$LANG->sL(t3lib_BEfunc::getItemLabel('tt_content','bodytext'),1).'</strong> ' . htmlspecialchars(t3lib_div::fixed_lgd_cs(trim($row['bodytext']),$trim)),'tt_content',$row['uid']).'<br />';
					break;
				case 'header': // Header
					$output = $this->link_edit('<strong>'.$LANG->sL(t3lib_BEfunc::getItemLabel('tt_content','header'),1).'</strong> ' . htmlspecialchars(t3lib_div::fixed_lgd_cs(trim(strip_tags($row['header'])),$trim)),'tt_content',$row['uid']).'<br />';
					break;
				case 'search':			//	Search Box
				case 'login':			//	Login Box
				case 'shortcut':		//	Insert records
				case 'div':				//	Divider
				case 'templavoila_pi1': //	Flexible Content Element: Rendered directly in getContentTree*()
					break;
				default:
						// return CType name for unhandled CType
					$output='<strong>'.htmlspecialchars ($row['CType']).'</strong><br />';
			}
		}
		return $output;
	}
}
