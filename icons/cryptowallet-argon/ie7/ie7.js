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
		el.innerHTML = '<span style="font-family: \'cryptowallet-argon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-24': '&#xe900;',
		'icon-ad-1': '&#xe901;',
		'icon-add-pluss-1': '&#xe902;',
		'icon-add-pluss-2': '&#xe903;',
		'icon-add-pluss-3': '&#xe904;',
		'icon-alarm-1': '&#xe905;',
		'icon-alarm-clock': '&#xe906;',
		'icon-arrow-down-1': '&#xe907;',
		'icon-arrow-down-2': '&#xe908;',
		'icon-arrow-down-3': '&#xe909;',
		'icon-arrow-left-1': '&#xe90a;',
		'icon-arrow-left-2': '&#xe90b;',
		'icon-arrow-left-3': '&#xe90c;',
		'icon-arrow-right-1': '&#xe90d;',
		'icon-arrow-right-2': '&#xe90e;',
		'icon-arrow-right-3': '&#xe90f;',
		'icon-arrow-up-1': '&#xe910;',
		'icon-arrow-up-2': '&#xe911;',
		'icon-arrow-up-3': '&#xe912;',
		'icon-backspace': '&#xe913;',
		'icon-battery-charge': '&#xe914;',
		'icon-battery-discharged': '&#xe915;',
		'icon-battery-full': '&#xe916;',
		'icon-battery-half': '&#xe917;',
		'icon-battery-low': '&#xe918;',
		'icon-bin': '&#xe919;',
		'icon-board': '&#xe91a;',
		'icon-boat': '&#xe91b;',
		'icon-book-1': '&#xe91c;',
		'icon-book-2': '&#xe91d;',
		'icon-bookmark-1': '&#xe91e;',
		'icon-bookmark-add': '&#xe91f;',
		'icon-bookmark-added': '&#xe920;',
		'icon-bowtie': '&#xe921;',
		'icon-box-1': '&#xe922;',
		'icon-box-2': '&#xe923;',
		'icon-box-3': '&#xe924;',
		'icon-box-4': '&#xe925;',
		'icon-brief-bag': '&#xe926;',
		'icon-browser': '&#xe927;',
		'icon-bubble-1': '&#xe928;',
		'icon-bubble-2': '&#xe929;',
		'icon-bubble-rounded-1': '&#xe92a;',
		'icon-bubble-rounded-2': '&#xe92b;',
		'icon-bubble-rounded-chat': '&#xe92c;',
		'icon-bubbles-chat': '&#xe92d;',
		'icon-bus': '&#xe92e;',
		'icon-calculator-1': '&#xe92f;',
		'icon-calendar-1': '&#xe930;',
		'icon-calendar-2': '&#xe931;',
		'icon-car': '&#xe932;',
		'icon-card': '&#xe933;',
		'icon-cards': '&#xe934;',
		'icon-chart-1': '&#xe935;',
		'icon-chart-2': '&#xe936;',
		'icon-chart-3': '&#xe937;',
		'icon-chart-4': '&#xe938;',
		'icon-chart-5': '&#xe939;',
		'icon-chart-diagram-1': '&#xe93a;',
		'icon-chart-diagram-2': '&#xe93b;',
		'icon-chart-down-1': '&#xe93c;',
		'icon-chart-down-2': '&#xe93d;',
		'icon-chart-up-1': '&#xe93e;',
		'icon-chart-up-2': '&#xe93f;',
		'icon-check-1': '&#xe940;',
		'icon-check-2': '&#xe941;',
		'icon-check-3': '&#xe942;',
		'icon-clip': '&#xe943;',
		'icon-clock-1': '&#xe944;',
		'icon-clock-2': '&#xe945;',
		'icon-cloud-download': '&#xe946;',
		'icon-cloud-upload': '&#xe947;',
		'icon-cloud': '&#xe948;',
		'icon-coin-1': '&#xe949;',
		'icon-coins-1': '&#xe94a;',
		'icon-coins-2': '&#xe94b;',
		'icon-color-picker': '&#xe94c;',
		'icon-colors': '&#xe94d;',
		'icon-compass': '&#xe94e;',
		'icon-coordinate': '&#xe94f;',
		'icon-crown': '&#xe950;',
		'icon-cup-1': '&#xe951;',
		'icon-dashboard-1': '&#xe952;',
		'icon-delivery-1': '&#xe953;',
		'icon-diamond-1': '&#xe954;',
		'icon-dollar-1': '&#xe955;',
		'icon-dollar-2': '&#xe956;',
		'icon-double-arrow-down-1': '&#xe957;',
		'icon-double-arrow-left-1': '&#xe958;',
		'icon-double-arrow-right-1': '&#xe959;',
		'icon-double-arrow-up-1': '&#xe95a;',
		'icon-download-1': '&#xe95b;',
		'icon-edit-1': '&#xe95c;',
		'icon-edit-ruler': '&#xe95d;',
		'icon-edit-write': '&#xe95e;',
		'icon-education': '&#xe95f;',
		'icon-enlarge': '&#xe960;',
		'icon-envelope-open-message': '&#xe961;',
		'icon-envelope-open': '&#xe962;',
		'icon-envelope': '&#xe963;',
		'icon-equalizer': '&#xe964;',
		'icon-error-1': '&#xe965;',
		'icon-error-2': '&#xe966;',
		'icon-error-3': '&#xe967;',
		'icon-error-4': '&#xe968;',
		'icon-error-5': '&#xe969;',
		'icon-euro-1': '&#xe96a;',
		'icon-euro-2': '&#xe96b;',
		'icon-eye': '&#xe96c;',
		'icon-favorite': '&#xe96d;',
		'icon-female': '&#xe96e;',
		'icon-file-1': '&#xe96f;',
		'icon-file-2': '&#xe970;',
		'icon-file-3': '&#xe971;',
		'icon-filing-cabinet': '&#xe972;',
		'icon-filter-1': '&#xe973;',
		'icon-filter-2': '&#xe974;',
		'icon-filter-3': '&#xe975;',
		'icon-flag-1': '&#xe976;',
		'icon-flag-2': '&#xe977;',
		'icon-flash-card': '&#xe978;',
		'icon-flight': '&#xe979;',
		'icon-folder-1': '&#xe97a;',
		'icon-folder-2': '&#xe97b;',
		'icon-folder-3': '&#xe97c;',
		'icon-folder-4': '&#xe97d;',
		'icon-folder-5': '&#xe97e;',
		'icon-folder-6': '&#xe97f;',
		'icon-games-2': '&#xe980;',
		'icon-games': '&#xe981;',
		'icon-glasses': '&#xe982;',
		'icon-globe': '&#xe983;',
		'icon-guard-1': '&#xe984;',
		'icon-guard-2': '&#xe985;',
		'icon-hand-dislike': '&#xe986;',
		'icon-hand-forward': '&#xe987;',
		'icon-hand-like': '&#xe988;',
		'icon-hand-rock': '&#xe989;',
		'icon-hand-tap-1': '&#xe98a;',
		'icon-hand-tap-2': '&#xe98b;',
		'icon-headphones-1': '&#xe98c;',
		'icon-headphones-2': '&#xe98d;',
		'icon-home': '&#xe98e;',
		'icon-hourglass-1': '&#xe98f;',
		'icon-hourglass-2': '&#xe990;',
		'icon-html-1': '&#xe991;',
		'icon-html-2': '&#xe992;',
		'icon-inbox-1': '&#xe993;',
		'icon-inbox-2': '&#xe994;',
		'icon-info-1': '&#xe995;',
		'icon-info-2': '&#xe996;',
		'icon-ingerprint': '&#xe997;',
		'icon-keyboard': '&#xe998;',
		'icon-lan-1': '&#xe999;',
		'icon-laptop': '&#xe99a;',
		'icon-like': '&#xe99b;',
		'icon-link-1': '&#xe99c;',
		'icon-locked': '&#xe99d;',
		'icon-logout': '&#xe99e;',
		'icon-mail-at': '&#xe99f;',
		'icon-male': '&#xe9a0;',
		'icon-map--1': '&#xe9a1;',
		'icon-medal-1': '&#xe9a2;',
		'icon-megaphone': '&#xe9a3;',
		'icon-microphone-1': '&#xe9a4;',
		'icon-microphone-2': '&#xe9a5;',
		'icon-minus-1': '&#xe9a6;',
		'icon-minus-2': '&#xe9a7;',
		'icon-minus-3': '&#xe9a8;',
		'icon-money-dollar': '&#xe9a9;',
		'icon-mouse': '&#xe9aa;',
		'icon-music-albums': '&#xe9ab;',
		'icon-music-note-1': '&#xe9ac;',
		'icon-music-note-2': '&#xe9ad;',
		'icon-music-note-3': '&#xe9ae;',
		'icon-new-window-1': '&#xe9af;',
		'icon-new-window-2': '&#xe9b0;',
		'icon-new-window-3': '&#xe9b1;',
		'icon-newspaper': '&#xe9b2;',
		'icon-note-1': '&#xe9b3;',
		'icon-notification-2': '&#xe9b4;',
		'icon-notification': '&#xe9b5;',
		'icon-office-box': '&#xe9b6;',
		'icon-palette': '&#xe9b7;',
		'icon-pause-1': '&#xe9b8;',
		'icon-pc-monitor': '&#xe9b9;',
		'icon-pen-1': '&#xe9ba;',
		'icon-phone-1': '&#xe9bb;',
		'icon-phone-2': '&#xe9bc;',
		'icon-phone-3': '&#xe9bd;',
		'icon-phone-4': '&#xe9be;',
		'icon-phone-5': '&#xe9bf;',
		'icon-photography': '&#xe9c0;',
		'icon-picture-1': '&#xe9c1;',
		'icon-picture-2': '&#xe9c2;',
		'icon-pin-1': '&#xe9c3;',
		'icon-pin-2': '&#xe9c4;',
		'icon-pin-3': '&#xe9c5;',
		'icon-play-1': '&#xe9c6;',
		'icon-play-next-1': '&#xe9c7;',
		'icon-play-prev-1': '&#xe9c8;',
		'icon-playlist': '&#xe9c9;',
		'icon-pound-1': '&#xe9ca;',
		'icon-pound-2': '&#xe9cb;',
		'icon-power': '&#xe9cc;',
		'icon-present': '&#xe9cd;',
		'icon-print': '&#xe9ce;',
		'icon-propeller': '&#xe9cf;',
		'icon-radar': '&#xe9d0;',
		'icon-refresh-1': '&#xe9d1;',
		'icon-refresh-2': '&#xe9d2;',
		'icon-refresh-3': '&#xe9d3;',
		'icon-repeat-1': '&#xe9d4;',
		'icon-repeat-2': '&#xe9d5;',
		'icon-rewind-back-1': '&#xe9d6;',
		'icon-rewind-forward-1': '&#xe9d7;',
		'icon-rocket': '&#xe9d8;',
		'icon-rss': '&#xe9d9;',
		'icon-ruble-1': '&#xe9da;',
		'icon-ruble-2': '&#xe9db;',
		'icon-rupee-1': '&#xe9dc;',
		'icon-rupee-2': '&#xe9dd;',
		'icon-sale-1': '&#xe9de;',
		'icon-sale-2': '&#xe9df;',
		'icon-sale-3': '&#xe9e0;',
		'icon-sale-4': '&#xe9e1;',
		'icon-save': '&#xe9e2;',
		'icon-scan': '&#xe9e3;',
		'icon-scroll-paper': '&#xe9e4;',
		'icon-search-1': '&#xe9e5;',
		'icon-search-2': '&#xe9e6;',
		'icon-search-in-1': '&#xe9e7;',
		'icon-search-in-2': '&#xe9e8;',
		'icon-search-out-1': '&#xe9e9;',
		'icon-search-out-2': '&#xe9ea;',
		'icon-send-message-1': '&#xe9eb;',
		'icon-send-message-2': '&#xe9ec;',
		'icon-settings-2': '&#xe9ed;',
		'icon-settings-3': '&#xe9ee;',
		'icon-settings': '&#xe9ef;',
		'icon-shapes-1': '&#xe9f0;',
		'icon-shapes-2': '&#xe9f1;',
		'icon-shapes-3': '&#xe9f2;',
		'icon-share-2': '&#xe9f3;',
		'icon-share': '&#xe9f4;',
		'icon-shop-1': '&#xe9f5;',
		'icon-shop-cart-1': '&#xe9f6;',
		'icon-shop-cart-2': '&#xe9f7;',
		'icon-shop-cart-3': '&#xe9f8;',
		'icon-shop-cart-4': '&#xe9f9;',
		'icon-shop-cart-5': '&#xe9fa;',
		'icon-shop-cart-6': '&#xe9fb;',
		'icon-shop-cart-7': '&#xe9fc;',
		'icon-shop-check': '&#xe9fd;',
		'icon-shuffle-1': '&#xe9fe;',
		'icon-sing-in-1': '&#xe9ff;',
		'icon-smartphone': '&#xea00;',
		'icon-smartwatch': '&#xea01;',
		'icon-sound-1': '&#xea02;',
		'icon-sound-2': '&#xea03;',
		'icon-sound-3': '&#xea04;',
		'icon-sound-down': '&#xea05;',
		'icon-sound-mute': '&#xea06;',
		'icon-sound-up': '&#xea07;',
		'icon-sticker-1': '&#xea08;',
		'icon-sticker-2': '&#xea09;',
		'icon-sticker-3': '&#xea0a;',
		'icon-suitcase': '&#xea0b;',
		'icon-sun': '&#xea0c;',
		'icon-support-1': '&#xea0d;',
		'icon-support-2': '&#xea0e;',
		'icon-switches-2': '&#xea0f;',
		'icon-switches-3': '&#xea10;',
		'icon-switches': '&#xea11;',
		'icon-tablet': '&#xea12;',
		'icon-tag-1': '&#xea13;',
		'icon-tag-2': '&#xea14;',
		'icon-target-1': '&#xea15;',
		'icon-target-2': '&#xea16;',
		'icon-target-link': '&#xea17;',
		'icon-test-tube-1': '&#xea18;',
		'icon-test-tube-2': '&#xea19;',
		'icon-test-tube-3': '&#xea1a;',
		'icon-text-page-1': '&#xea1b;',
		'icon-text-page-2': '&#xea1c;',
		'icon-text-pages': '&#xea1d;',
		'icon-ticket': '&#xea1e;',
		'icon-timer-1': '&#xea1f;',
		'icon-timer-2': '&#xea20;',
		'icon-train': '&#xea21;',
		'icon-umbrella': '&#xea22;',
		'icon-unlocked': '&#xea23;',
		'icon-upload-1': '&#xea24;',
		'icon-user-add': '&#xea25;',
		'icon-user-check': '&#xea26;',
		'icon-user-remove': '&#xea27;',
		'icon-user': '&#xea28;',
		'icon-users': '&#xea29;',
		'icon-video-camera': '&#xea2a;',
		'icon-wallet': '&#xea2b;',
		'icon-watch': '&#xea2c;',
		'icon-yen-1': '&#xea2d;',
		'icon-yen-2': '&#xea2e;',
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
