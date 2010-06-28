<?php

include_once(t3lib_extMgm::extPath("pagenotfound_handler")."class.tx_pagenotfoundhandler.php");

class user_tx_pagenotfoundhandler extends tx_pagenotfoundhandler
{
	function main($param, $ref) {
		// reset pageNotFound_handling, otherwise an endless loop in determineId() occurs for one level .html urls
		$GLOBALS['TSFE']->TYPO3_CONF_VARS['FE']['pageNotFound_handling'] = null;
		
		// setup to get plugin configurations
		$GLOBALS['TSFE']->determineId();
		$GLOBALS['TSFE']->getCompressedTCarray();
		$GLOBALS['TSFE']->fetch_the_id();
		$GLOBALS['TSFE']->getPageAndRootline();
		$GLOBALS['TSFE']->initTemplate();
		$GLOBALS['TSFE']->getConfigArray();
		
		// set member variables
		$this->param = $param;
		$this->ref = $ref;
		$this->conf = $GLOBALS['TSFE']->tmpl->setup['plugin.']['tx_pagenotfoundhandler.'];
		$this->processConfiguration();
		$this->cObj = t3lib_div::makeInstance('tslib_cObj');
		$this->base = str_replace(t3lib_div::getIndpEnv('TYPO3_REQUEST_HOST'), '', t3lib_div::getIndpEnv('TYPO3_REQUEST_DIR'));
		$searchVars = $this->getSearchVars();
		$this->searchVars = $this->ignoreValues($searchVars);
		
		$redirect = false;
		
		// interpret indexed_search results
		if (intval($this->conf['redirect'])) {
			$results = $this->doIndexedSearch($this->searchVars);
			if ($this->conf['maxHighestRatingResults'] >= 0) {
				if (count($results) == 1 && $results[0]['rating'] >= $this->conf['minRating']) {
					$redirect = true;
				}
				else if ($results[0]['rating'] != $results[count($results) - 1]['rating'] && $results[0]['rating'] >= $this->conf['minRating']) {
					$redirect = true;
				}
			}
			else if ($results[0]['rating'] >= $this->conf['minRating']) {
				$redirect = true;
			}
		}
		
		// redirect to page or search
		if ($redirect) {
			$header = $this->conf['redirectHeader'];
			$location = t3lib_div::getIndpEnv('TYPO3_REQUEST_DIR') . $this->cObj->getTypoLink_URL($results[0]['page_id']);
		}
		else {
			$header = $this->conf['searchHeader'];
			$sword = urlencode(implode(' ' . $this->conf['operator'] . ' ', $this->searchVars));
			$location = t3lib_div::getIndpEnv('TYPO3_REQUEST_DIR') . $this->cObj->getTypoLink_URL($this->conf['searchPid']) . '?tx_pagenotfoundhandler=1&tx_indexedsearch[sword]=' . $sword;
		}
		
		$this->redirect($header, $location);
	}
	
	function processConfiguration(){
		$cObj = t3lib_div::makeInstance('tslib_cObj');
		$this->conf["searchPid"] = $cObj->stdWrap("TEXT",$this->conf["searchPid."]);
	}
}

