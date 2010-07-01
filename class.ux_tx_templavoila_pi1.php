<?php

/**
* 
*/
class ux_tx_templavoila_pi1 extends tx_templavoila_pi1
{
	/**
	 * Will set up various stuff in the class based on input TypoScript
	 *
	 * @param	array		TypoScript options
	 * @return	void
	 */
	function initVars($conf)	{
		$this->inheritValueFromDefault = $conf['dontInheritValueFromDefault'] ? 0 : 1;
		$this->conf=$conf;

        #$rows = $GLOBALS["TYPO3_DB"]->exec_SELECTgetRows("*", "tt_address","1=1");
		#foreach ($rows as $row) {
        #    foreach($row as $key => $value)
        #        $row[$key] = utf8_encode($value);
		#	$GLOBALS['TYPO3_DB']->exec_UPDATEquery('tt_address', 'uid='.intval($row["uid"]), $row);
		#}
		
		$rows = $GLOBALS["TYPO3_DB"]->exec_SELECTgetRows("*", "tx_templavoila_tmplobj","1=1");
		foreach ($rows as $row) {
			if(unserialize($row["templatemapping"]) == false){
				$repaired = serialize(repairSerializedArray($row["templatemapping"]));
				$GLOBALS['TYPO3_DB']->exec_UPDATEquery('tx_templavoila_tmplobj', 'uid='.intval($row["uid"]), array('templatemapping' => $repaired));
			}
		}
	}
}
