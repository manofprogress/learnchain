/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'crypto-fintech\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-abacus': '&#xe900;',
		'icon-api': '&#xe901;',
		'icon-assets': '&#xe902;',
		'icon-asymmetric-keys': '&#xe903;',
		'icon-atm': '&#xe904;',
		'icon-attorney': '&#xe905;',
		'icon-b2b': '&#xe906;',
		'icon-b2c': '&#xe907;',
		'icon-balance': '&#xe908;',
		'icon-bank': '&#xe909;',
		'icon-big-data': '&#xe90a;',
		'icon-billionaire': '&#xe90b;',
		'icon-bills': '&#xe90c;',
		'icon-bitcoin': '&#xe90d;',
		'icon-blockchain': '&#xe90e;',
		'icon-british-pound': '&#xe90f;',
		'icon-budgeting': '&#xe910;',
		'icon-calculator': '&#xe911;',
		'icon-chargeback': '&#xe912;',
		'icon-check': '&#xe913;',
		'icon-chinese-yuan': '&#xe914;',
		'icon-credit-card': '&#xe915;',
		'icon-crowdfunding': '&#xe916;',
		'icon-cryptocurrency': '&#xe917;',
		'icon-cvv': '&#xe918;',
		'icon-cyber-identity': '&#xe919;',
		'icon-data-mining': '&#xe91a;',
		'icon-deposit': '&#xe91b;',
		'icon-dollar': '&#xe91c;',
		'icon-education-savings': '&#xe91d;',
		'icon-email-transfer': '&#xe91e;',
		'icon-emergency-fund': '&#xe91f;',
		'icon-euro': '&#xe920;',
		'icon-exchange': '&#xe921;',
		'icon-funds-transfer': '&#xe922;',
		'icon-gazelle': '&#xe923;',
		'icon-gold': '&#xe924;',
		'icon-growth': '&#xe925;',
		'icon-handshake': '&#xe926;',
		'icon-home-loan': '&#xe927;',
		'icon-identity-theft': '&#xe928;',
		'icon-income': '&#xe929;',
		'icon-insurance': '&#xe92a;',
		'icon-interest-rates': '&#xe92b;',
		'icon-internet-banking': '&#xe92c;',
		'icon-internet-of-things': '&#xe92d;',
		'icon-investment': '&#xe92e;',
		'icon-japanese-yen': '&#xe92f;',
		'icon-leasing': '&#xe930;',
		'icon-management': '&#xe931;',
		'icon-mobile-banking': '&#xe932;',
		'icon-money-bag': '&#xe933;',
		'icon-money-growth': '&#xe934;',
		'icon-money-making': '&#xe935;',
		'icon-money': '&#xe936;',
		'icon-monitoring': '&#xe937;',
		'icon-p2p-lending': '&#xe938;',
		'icon-payment': '&#xe939;',
		'icon-piggy-bank': '&#xe93a;',
		'icon-planning': '&#xe93b;',
		'icon-profit': '&#xe93c;',
		'icon-report': '&#xe93d;',
		'icon-retirement-savings': '&#xe93e;',
		'icon-revenue': '&#xe93f;',
		'icon-saas': '&#xe940;',
		'icon-safe-box': '&#xe941;',
		'icon-savings': '&#xe942;',
		'icon-secure': '&#xe943;',
		'icon-sharing-economy': '&#xe944;',
		'icon-statistics': '&#xe945;',
		'icon-stocks': '&#xe946;',
		'icon-strategy': '&#xe947;',
		'icon-success': '&#xe948;',
		'icon-taxes': '&#xe949;',
		'icon-transfer': '&#xe94a;',
		'icon-unicorn': '&#xe94b;',
		'icon-value': '&#xe94c;',
		'icon-wallet': '&#xe94d;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
