<?php
if (!defined ('TYPO3_MODE')) 	die ('Access denied.');

function user_match($cmd) {
	global $BE_USER;
	switch($cmd) { 
		case 'checkBEUserIsAdmin':
			if(is_object($BE_USER)) {
				return $BE_USER->isAdmin();
			}
			break;
		case 'checkBEUserIsLoggin':
			if(is_object($BE_USER)) {
				if($BE_USER->user['uid']) return true;
			}
			break;
	}
}