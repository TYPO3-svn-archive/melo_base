<?php
if (!defined ('TYPO3_MODE')) {
    die ('Access denied.');
}
$tempColumns = array (
    'tx_melobase_newsfolder' => array (        
        'exclude' => 0,        
        'label' => 'LLL:EXT:melo_base/locallang_db.xml:pages.tx_melobase_newsfolder',        
        'config' => array (
            'type' => 'group',    
            'internal_type' => 'db',    
            'allowed' => 'pages',    
            'size' => 1,    
            'minitems' => 0,
            'maxitems' => 1,
			'selectedListStyle' => "height:18px;width:300px"
        )
    ),
    'tx_melobase_newsdetail' => array (        
        'exclude' => 0,        
        'label' => 'LLL:EXT:melo_base/locallang_db.xml:pages.tx_melobase_newsdetail',        
        'config' => array (
            'type' => 'group',    
            'internal_type' => 'db',    
            'allowed' => 'pages',    
            'size' => 1,    
            'minitems' => 0,
            'maxitems' => 1,
			'selectedListStyle' => "height:18px;width:300px"
        )
    ),
    'tx_melobase_home' => array (        
        'exclude' => 0,        
        'label' => 'LLL:EXT:melo_base/locallang_db.xml:pages.tx_melobase_home',        
        'config' => array (
            'type' => 'group',    
            'internal_type' => 'db',    
            'allowed' => 'pages',    
            'size' => 1,    
            'minitems' => 0,
            'maxitems' => 1,
			'selectedListStyle' => "height:18px;width:300px"
        )
    ),
    'tx_melobase_servicefolder' => array (        
        'exclude' => 0,        
        'label' => 'LLL:EXT:melo_base/locallang_db.xml:pages.tx_melobase_servicefolder',        
        'config' => array (
            'type' => 'group',    
            'internal_type' => 'db',    
            'allowed' => 'pages',    
            'size' => 1,    
            'minitems' => 0,
            'maxitems' => 1,
			'selectedListStyle' => "height:18px;width:300px"
        )
    ),
    'tx_melobase_footerfolder' => array (        
        'exclude' => 0,        
        'label' => 'LLL:EXT:melo_base/locallang_db.xml:pages.tx_melobase_footerfolder',        
        'config' => array (
            'type' => 'group',    
            'internal_type' => 'db',    
            'allowed' => 'pages',    
            'size' => 1,    
            'minitems' => 0,
            'maxitems' => 1,
			'selectedListStyle' => "height:18px;width:300px"
        )
    ),
    'tx_melobase_devpage' => array (        
        'exclude' => 0,        
        'label' => 'LLL:EXT:melo_base/locallang_db.xml:pages.tx_melobase_devpage',        
        'config' => array (
            'type' => 'group',    
            'internal_type' => 'db',    
            'allowed' => 'pages',    
            'size' => 1,    
            'minitems' => 0,
            'maxitems' => 1,
			'selectedListStyle' => "height:18px;width:300px"
        )
    ),
    'tx_melobase_searchpage' => array (        
        'exclude' => 0,        
        'label' => 'LLL:EXT:melo_base/locallang_db.xml:pages.tx_melobase_searchpage',        
        'config' => array (
            'type' => 'group',    
            'internal_type' => 'db',    
            'allowed' => 'pages',    
            'size' => 1,    
            'minitems' => 0,
            'maxitems' => 1,
			'selectedListStyle' => "height:18px;width:300px"
        )
    ),
    'tx_melobase_404' => array (        
        'exclude' => 0,        
        'label' => 'LLL:EXT:melo_base/locallang_db.xml:pages.tx_melobase_404',        
        'config' => array (
            'type' => 'group',    
            'internal_type' => 'db',    
            'allowed' => 'pages',    
            'size' => 1,    
            'minitems' => 0,
            'maxitems' => 1,
			'selectedListStyle' => "height:18px;width:300px"
        )
    ),
);


t3lib_div::loadTCA('pages');
t3lib_extMgm::addTCAcolumns('pages',$tempColumns,1);
t3lib_extMgm::addToAllTCAtypes('pages','tx_melobase_newsfolder;;;;1-1-1, tx_melobase_newsdetail, tx_melobase_home, tx_melobase_servicefolder, tx_melobase_footerfolder, tx_melobase_devpage, tx_melobase_searchpage, tx_melobase_404');
?>