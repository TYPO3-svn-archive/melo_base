<?php

require_once (t3lib_extMgm::extPath('templavoila').'mod1/class.tx_templavoila_mod1_sidebar.php');

class tx_melobase_sidebar {
    function init() {
        #$thisObj = &t3lib_div::getUserObj ('&tx_melobase_sidebar', '');
        #$sideBarObj = &t3lib_div::getUserObj ('&tx_templavoila_mod1_sidebar', '');
        #$sideBarObj->addItem ('tx_melobase_sidebar_condensed', $thisObj, 'renderItem_myext', 'Advanced functions', 50);
    }

    function renderItem_myext(&$pObj) {
        return $pObj->id;
    }

}