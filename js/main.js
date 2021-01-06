// show and hide panel with the hamburguer library
import { panelMenu } from './exercises/panel.js';
// section 1--> date and time
import { digitalClock, alarm } from './exercises/date_time.js';
// section 2-> countdown and message
import { endOfTheWorld } from './exercises/countdown.js';
// exercise 3-> scroll button to the top
import { toTheSky } from './exercises/scroll_btn.js';
// exercise 4-> dark theme
import { theDarkSide } from './exercises/dark_theme.js';
// section 3 -> responsive thinking in users
import { toyChiquito } from './exercises/good_responsive.js';
// section 4-> responsive tester, see a page in different sizes
import { responsiveTester } from './exercises/resposive_tester.js';
// section 5-> ball moving in map
import { sun } from './exercises/keyboard_event.js';
// section 6-> show in what device user is on
import { iKnowYou } from './exercises/detect_device.js';
// exercise 7-> show if you have connecetion to internet
import { areYouThere } from './exercises/conection_status.js';
// exercise 8-> show a live if you have camera
// import { iSeeYou } from './exercises/detect_webcam.js';
// exercise 9-> latitude-coordinates
import { getGeolocation } from './exercises/geolocation.js';
// exercise 10-> filter- intern searcher
import { colador } from './exercises/filter_search.js';
// 11-> raffle/draw.
import { amongUs } from './exercises/raffle.js';
// 12->carousel
import { swimming } from './exercises/carousel.js';
// 13-> scrollspy
import { iFollowYou } from './exercises/scroll_spy.js';
// 14-> vode¿s}ad}asdsa
import { videoTape } from './exercises/intelligent_video.js';
// 15-<>valudacion
import { feedback } from './exercises/form_validation.js';
import { a } from './exercises/speech.js';

document.addEventListener('DOMContentLoaded', () => {
	panelMenu('#panel-btn', '#panel', '.menu__a');
	digitalClock();
	alarm('../assets/audio/alarm.mp3', '#start-alarm', '#stop-alarm');
	sun('#map');
	endOfTheWorld('#countdown-text', "WAIT, THERE'S NO END OF THE WORLD? ");
	toTheSky('.toTheSky');
	theDarkSide('.theDarkSide-btn', 'dark-mode', '#body');
	toyChiquito(
		'youtube',
		'(min-width:1025px)',
		'<a href="https://www.youtube.com/embed/FfjNCEVM2Mw" target="_blank">see cute video on yotuve</a>',
		'<iframe width="560" height="315" src="https://www.youtube.com/embed/FfjNCEVM2Mw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
	);
	toyChiquito(
		'twitter',
		'(min-width:1025px)',
		'<a href="https://twitter.com/MacMiller/status/1024527616789889024?ref_src=twsrc%5Etfw" target="_blank">see the saddest tweet on the internet</a>',
		'<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Be you. <br><br>You’ll be fine.</p>&mdash; Mac (@MacMiller) <a href="https://twitter.com/MacMiller/status/1024527616789889024?ref_src=twsrc%5Etfw">August 1, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> '
	);
	responsiveTester('form-responsive-tester');
	iKnowYou('user-device');
	// iSeeYou('webcam');
	getGeolocation('.geolocation-btn');
	// me funciona maso creo
	colador('filter-input', '.filter__item');
	amongUs(
		'inputAmongUs',
		'btnAddToAmongUs',
		'btnSeeImpostor',
		'playerList',
		'impostor-result'
	);
	swimming();
	iFollowYou();
	videoTape();
	feedback();
});
//  funca maso maso
areYouThere();
// tiene que estar aca
a();
