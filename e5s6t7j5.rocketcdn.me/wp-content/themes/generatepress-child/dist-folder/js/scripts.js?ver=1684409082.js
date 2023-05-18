/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 272:
/***/ (function() {

(function () {
	// set video popup
	MediaBox('.mediabox');

	// remove onclick Attr. from mediabox class after 2 sec.
	function remove_attr() {
		$('.mediabox').removeAttr('onclick');
	}
	window.setTimeout(remove_attr, 1000);

	$('.full-scope-mobile-arrow').on('click', function () {
		const _this = $(this);
		const _bottom = _this.closest('.bottom');

		if (_bottom.hasClass('open')) {
			_bottom.toggleClass('open');
		} else {
			$('.bottom').removeClass('open');
			_bottom.toggleClass('open');
		}
	});
})();


/***/ }),

/***/ 34:
/***/ (function() {

BlogAds = (function () {
  const init = () => {
    setBlogAds();
  };

  const setBlogAds = () => {
    const elm = $('.blog-ads-wrap.with-content');
    elm.each(function (index, item) {
      let _this = $(item);
      let _prev = _this.prev();
      if ($(_prev).text().trim().length < 20) {
        _prev = _prev.prev();
      }
      _prev.detach().appendTo(_this.find('.blog-ads-wrap__content'));
    });
  };

  return {
    init
  };
})();
BlogAds.init();


/***/ }),

/***/ 483:
/***/ (function() {

Career = (function () {
	// vars
	let departments = 'all';
	let locations = 'all';
	let counter = 0;

	// initialization
	const init = () => {
		// set selectors components
		setJobsSelects();

		// drow all positions by department
		drawJobs();

		// set vimoe popup and set video link
		setVimeo();

		setHeroHeight();

		$('#mino-gallery').minoGallery({ duration: 1500 });

		$('#video-wrap').fadeIn(1500);

		if (getAllUrlParams().department) {
			departments = decodeURIComponent(
				getAllUrlParams().department.replace(/\+/g, ' ')
			);

			console.log('departments', departments);

			$('.custom-selector.departments ul li').each(function () {
				if ($(this).text() === departments) {
					$(this).trigger('click');
				}
			});
		}

		// get position_status parameter from URL
		var positionStatus = null;
		if (getAllUrlParams().department_status) {
			positionStatus = decodeURIComponent(
				getAllUrlParams().department_status.replace(/\+/g, ' ')
			);
		}

		if (positionStatus && positionStatus === 'open') {
			$('.category-wrap').addClass('open');
		}

		if ($('body').hasClass('page-template-career-page-tpl')) {
			$('html').css('overflow-x', 'hidden');
		}
	};

	const setHeroHeight = () => {
		const header = $('.site-header').height() - 10;
		let top_strip = 0;

		if (screen.width <= 680) {
			$('#career-video #video-wrap').css('height', '660px');
			$('#career-video').css('height', '660px');
		} else {
			if ($('body').hasClass('show-top-strip')) {
				top_strip = $('.hp-top').height();
			}
			const spaceFromTop = header + top_strip;
			const height = $(window).height() - spaceFromTop;

			$('#career-video #video-wrap').css('height', height + 'px');
			$('#career-video').css('height', height + 'px');
		}
	};

	$(window).on('resize', function () {
		setHeroHeight();
	});

	// set selector component
	const setJobsSelects = () => {
		// set departments options
		$('#all-departments-selector').selectric({
			maxHeight: 400,
			onChange: function (e) {
				departments = $(this).val();
				drawJobs();
			}
		});

		// set locations options
		$('#all-locations-selector').selectric({
			maxHeight: 400,
			onChange: function (e) {
				locations = $(this).val();
				drawJobs();
			}
		});
	};

	// on department change set department and draw jobs list
	$('#all-departments-selector').on('change', function () {
		departments = $(this).val();
		drawJobs();
	});

	// on location change set location and draw jobs list
	$('#all-locations-selector').on('change', function () {
		locations = $(this).val();
		drawJobs();
	});

	// set vimeo video path
	const setVimeo = () => {
		const video_path = $('.vimeo-career-video').attr('href');

		$('.vimeo-career-video').magnificPopup({
			type: 'iframe',
			iframe: {
				patterns: {
					vimeo: {
						index: 'vimeo.com/',
						id: '/',
						src: video_path
					}
				}
			}
		});
	};

	// toggle (show/hide) positions
	$('.join__result').on('click', '.category-wrap', function () {
		if ($(this).hasClass('open')) {
			$(this).toggleClass('open');
		} else {
			$('.category-wrap').removeClass('open');
			$(this).toggleClass('open');
		}
	});

	// get all jobs from 'window.all_jobs'
	const getAllJobs = () => {
		const jobs = window.all_jobs;
		return jobs;
	};

	// filter job list by department and location
	const jobsFilter = () => {
		let jobList = getAllJobs();

		// department loop
		for (const property in jobList) {
			if (departments === 'all') {
				jobList[property].is_show = true;
			} else {
				if (property !== departments) {
					jobList[property].is_show = false;
				} else {
					jobList[property].is_show = true;
				}
			}

			// location loop
			jobList[property].items.forEach(function (item, index) {
				if (locations === 'all') {
					jobList[property].items[index].is_show = true;
				} else {
					if (locations !== item.location) {
						jobList[property].items[index].is_show = false;
					} else {
						jobList[property].items[index].is_show = true;
					}
				}
			});
		}

		return jobList;
	};

	// draw jobs by departments and locations
	const drawJobs = () => {
		let jobs = jobsFilter();
		let result = '';
		counter = 0;

		for (const property in jobs) {
			var itemsResult = '';
			var count = 0;

			// create positions HTML
			jobs[property].items.forEach(function (item) {
				if (item.is_show) {
					count++;
					itemsResult += `
                    <div class="position-wrap">
                        <a class="position-link stop-propagation" href="${item.link}"></a>
                        <div class="position-title font-exo-500">${item.title}</div>
                        <span class="position-location font-oxygen-400">${item.location}</span>
                    </div>
                    `;
				}
			});

			// create departments HTML
			if (jobs[property].is_show && count > 0) {
				const positions = count > 1 ? 'Positions' : 'Position';

				result += `
                <div class="category-wrap">
                    <div class="category_flex">
                        <div class="divider"></div>
                        <div class="category-title font-exo-500">${jobs[property].department_name}</div>
                        <span class="category-open-positions font-oxygen-400">
                            <span class="number">${count}</span> <span class="text">${positions}</span>
                        </span>
                    </div>
                    <div class="positions-wrap">
                        ${itemsResult}
                    </div>
                </div>
                `;

				counter += count;
			}
		}

		// set positions number
		$('.open-positions-number').html(counter);

		// set job result
		$('.join__result').html(result);
	};

	// stop propagation when click on open position
	$('.join__result').on('click', '.stop-propagation', (event) => {
		event.stopPropagation();
	});

	$('.scroll-to-career-hero, .anchor-scroll').on('click', function (e) {
		e.preventDefault();
		const this_id = $(this).attr('href');
		const this_time = $(this).data('time');
		const this_space = $(this).data('space');

		$('html, body').animate(
			{
				scrollTop: $(this_id).offset().top - this_space
			},
			this_time
		);
	});

	$('.anchor-scroll-wrap').on('click', function (e) {
		e.preventDefault();
		const this_id = $(this).find('a').attr('href');

		$('html, body').animate(
			{
				scrollTop: $(this_id).offset().top - 70
			},
			1000
		);
	});

	$('.open-comeet-form').on('click', function () {
		$('#comeet-popup-form-wrap').addClass('open');
		$('body').addClass('disabled-scrolling');
	});

	$('#comeet-popup-form-wrap').on('click', function () {
		$('#comeet-popup-form-wrap').removeClass('open');
		$('body').removeClass('disabled-scrolling');
	});

	$('#comeet-popup-form-wrap .form').on('click', function (e) {
		e.stopPropagation();
	});

	return {
		init,
		drawJobs
	};
})();

Career.init();

// Helper function
function getAllUrlParams(url, low) {
	// get query string from url (optional) or window
	var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

	// we'll store the parameters here
	var obj = {};

	// if query string exists
	if (queryString) {
		// stuff after # is not part of query string, so get rid of it
		queryString = queryString.split('#')[0];

		// split our query string into its component parts
		var arr = queryString.split('&');

		for (var i = 0; i < arr.length; i++) {
			// separate the keys and the values
			var a = arr[i].split('=');

			// set parameter name and value (use 'true' if empty)
			var paramName = a[0];
			var paramValue = typeof a[1] === 'undefined' ? true : a[1];

			// (optional) keep case consistent

			if (low) {
				paramName = paramName.toLowerCase();
			}

			if (typeof paramValue === 'string') {
				if (low) {
					paramValue = paramValue.toLowerCase();
				}
			}

			// if the paramName ends with square brackets, e.g. colors[] or colors[2]
			if (paramName.match(/\[(\d+)?\]$/)) {
				// create key if it doesn't exist
				var key = paramName.replace(/\[(\d+)?\]/, '');
				if (!obj[key]) obj[key] = [];

				// if it's an indexed array e.g. colors[2]
				if (paramName.match(/\[\d+\]$/)) {
					// get the index value and add the entry at the appropriate position
					var index = /\[(\d+)\]/.exec(paramName)[1];
					obj[key][index] = paramValue;
				} else {
					// otherwise add the value to the end of the array
					obj[key].push(paramValue);
				}
			} else {
				// we're dealing with a string
				if (!obj[paramName]) {
					// if it doesn't exist, create property
					obj[paramName] = paramValue;
				} else if (
					obj[paramName] &&
					typeof obj[paramName] === 'string'
				) {
					// if property does exist and it's a string, convert it to an array
					obj[paramName] = [obj[paramName]];
					obj[paramName].push(paramValue);
				} else {
					// otherwise add the property
					obj[paramName].push(paramValue);
				}
			}
		}
	}

	return obj;
}


/***/ }),

/***/ 434:
/***/ (function() {

const GitGuardian = (function ($) {
	'use strict';

	const init = () => {
		toggleTableItem();
	};

	const toggleTableItem = () => {
		$('.toggle-table-body-info').on('click', function () {
			$(this).toggleClass('open');
		});
	};

	window.addEventListener('scroll', () => {
		const scroll = document.documentElement.scrollTop;

		if (scroll >= 130) {
			$('.minimal-header.scrollable-heasder').addClass(
				'show-header-on-fix-position'
			);
		} else {
			$('.minimal-header.scrollable-heasder').removeClass(
				'show-header-on-fix-position'
			);
		}

		if (scroll >= 520) {
			$('.minimal-header.scrollable-heasder').addClass(
				'show-header-button'
			);
		} else {
			$('.minimal-header.scrollable-heasder').removeClass(
				'show-header-button'
			);
		}

		// on mobile add stiky table header
		if (
			scroll >= 1078 &&
			scroll < 1078 + $('.mobile-table-wrap').height() + 20
		) {
			$('.mobile-table-wrap .item-header').addClass('sticky-tb-header');
			if (scroll >= 1078) {
				$('.mobile-table-wrap .item-header').addClass('show');
			}
		} else {
			$('.mobile-table-wrap .item-header').removeClass('show');

			if (scroll < 1154 + $('.mobile-table-wrap').height() + 10) {
				$('.mobile-table-wrap .item-header').removeClass(
					'sticky-tb-header'
				);
			}
		}

		if (scroll >= 711) {
			$('#menu-minimal-header .book-a-demo').addClass('show');
		} else {
			$('#menu-minimal-header .book-a-demo').removeClass('show');
		}
	});

	return {
		init
	};
})(jQuery);

//Init
GitGuardian.init();


/***/ }),

/***/ 48:
/***/ (function() {



/***/ }),

/***/ 189:
/***/ (function() {

$(function() {
    $('iframe').each(function(){
        function injectCSS(){
            const basePath = '/wp-content/themes/generatepress-child/src-folder/extra-file/css/';
            $iframe.contents().find('head').append(
                $('<link/>', { 
                    rel: 'stylesheet', 
                    href: `${basePath}iframe_thank_you_page.css?var=1`, 
                    type: 'text/css' 
                })
            );
        }
        const $iframe = $(this);
        $iframe.on('load', injectCSS);
        injectCSS();
    });
});

/***/ }),

/***/ 874:
/***/ (function() {

/**
 * paramsBetweenPages will add GET parameter on redirect between pages
 * The data saved on session storage
 * When user will close current tab the data will delete
 */
const paramsBetweenPages = (function () {
	const excludeKeys = [
		'pos_id',
		'preview',
		'department',
		'location',
		'department_status'
	];

	// init
	const init = () => {
		const params = getParameters();
		setParamTosSessionStorage(params);
		setGetParameterToLinks();
	};

	/**
	 * GET parameter from url and from session storage
	 * @returns object of GET parameter
	 */
	const getParameters = () => {
		// current GET parameters
		const current = getCurrentParameters();
		// GET parameters from session storage
		const storage = getParamFromsSessionStorage();
		return Object.assign(storage, current);
	};

	/**
	 * set parameter to session storage and save by saveData func.
	 * @param {*} data
	 */
	const setParamTosSessionStorage = (data) => {
		const isLogin = $('body').hasClass('customize-support');
		if (!isLogin) {
			let temp = {};

			Object.keys(data).forEach(function (key) {
				if (!excludeKeys.includes(key)) {
					temp[key] = data[key];
				}
			});

			if (Object.keys(temp).length > 0) {
				saveData('between_pages', temp);
			}
		}
	};

	/**
	 * GET parameter only from url
	 * @returns object of parameters
	 */
	const getCurrentParameters = () => {
		const params = window.location.search.substring(1);
		return params !== null && params !== ''
			? transformToAssocArray(params)
			: {};
	};

	/**
	 * GET parameter only from session storage
	 * @returns object of parameters
	 */
	const getParamFromsSessionStorage = () => {
		if (sessionStorage.getItem('between_pages')) {
			return JSON.parse(sessionStorage.getItem('between_pages'));
		}
		return {};
	};

	/**
	 * convert GET parameter to assoc array
	 * @param {*} prmstr
	 * @returns params
	 */
	const transformToAssocArray = (prmstr) => {
		var params = {};
		var prmarr = prmstr.split('&');
		for (var i = 0; i < prmarr.length; i++) {
			var tmparr = prmarr[i].split('=');
			params[tmparr[0]] = tmparr[1];
		}
		return params;
	};

	/**
	 * save data in session storage by key and value
	 * @param {*} k
	 * @param {*} v
	 */
	const saveData = (k, v) => {
		sessionStorage.setItem(k, JSON.stringify(v));
	};

	/**
	 * set parameter to all link on current page
	 */
	const setGetParameterToLinks = () => {
		const isLogin = $('body').hasClass('customize-support');
		if (!isLogin) {
			const readyParameter = getReadyParameter();

			// if parameter exist set to each link of page
			if (readyParameter && readyParameter.length > 2) {
				let data = document.body.getElementsByTagName('a');
				for (let i = 0; i < data.length; i++) {
					data[i].href = data[i].href + '?' + readyParameter;
				}
			}
		}
	};

	/**
	 * get GET parameter as string
	 * @returns string of parameter
	 */
	const getReadyParameter = () => {
		const obj = getParameters();

		const paramStr = Object.keys(obj)
			.map(function (key) {
				if (!excludeKeys.includes(key)) {
					return key + '=' + obj[key];
				}
			})
			.join('&');

		return paramStr;
	};

	/**
	 * init func.
	 */
	return {
		init
	};
})().init();


/***/ }),

/***/ 619:
/***/ (function() {

const App = (function ($) {
	'use strict';

	const init = () => {
		// set  Post Image PopUp if is large screen > 991px
		if (isLargeScreen()) {
			setPostImagePopUp();
		}

		chackPostTitle();

		hideElementsForAnimate();

		setTopStrip();

		setNavButtonLinks();

		closePoppForm();

		window.addEventListener('scroll', onScroll);

		// about team images parallex
		if (
			document.getElementById('lax-parallax-team-image') &&
			window.innerWidth > 900
		) {
			window.addEventListener('scroll', function () {
				let topPos = 40 - $(window).scrollTop() / 10;
				$('.lax-front').css('top', topPos);
			});
		}
	};

	$('.rt-wp-menu-custom-fields-image').on('click', function (e) {
		e.preventDefault();
		e.stopPropagation();
	});

	const setNavButtonLinks = () => {
		$('.top-trial.menu-item').clone().appendTo('.inside-navigation');
	};

	/**
	 * option for zoom in the images on post page by popup
	 */
	const setPostImagePopUp = () => {
		$('.single-blog .page-content img')
			.not('.ads')
			.addClass('magnific-popup');
		$('.single-blog .page-content img')
			.not('.ads')
			.click(function () {
				let src = jQuery(this).attr('src');
				const srcset = $(this).attr('srcset');

				if (srcset) {
					src = getTheBiggestPathFromSrcsetArray(
						getSrcsetArrayImagesFromSrcSet(srcset)
					);
				}

				$('#blog-popup-image-wrap .blog-popup-image__show img').attr(
					'src',
					src
				);
				$('#blog-popup-image-wrap').addClass('show');
				$('body').addClass('disable-scrolling');

				resizeMagnificPopUpSize();
				removePostImagePopUp();
			});
	};

	const resizeMagnificPopUpSize = () => {
		const wrap_width = $('.blog-popup-image__show').width();
		const image_width = $('.blog-popup-image__show').find('img').width();

		if (wrap_width !== image_width) {
			$('.blog-popup-image__show').addClass('small');
		}
	};

	// close popupp form and emprt error field
	const closePoppForm = () => {
		$('.events-popup-form-close').on('click', function (e) {
			e.preventDefault();
			e.stopPropagation();

			if (document.body.classList.contains('display-events-popup-form')) {
				// 👇️ removing classes from body element
				document.body.classList.remove('display-events-popup-form');
				$('html, body').css({ overflow: 'auto' });
			} else {
				document.body.classList.add('display-events-popup-form');
				$('html, body').css({ overflow: 'hidden' });
			}

			$('.hs-error-msgs').hide();
		});

		$('.form-body').on('click', function (e) {
			e.stopPropagation();
		});
	};

	/**
	 * close popup image on post page
	 */
	const removePostImagePopUp = () => {
		$('#blog-popup-image-wrap').click(function () {
			$('#blog-popup-image-wrap').removeClass('show');
			$('body').removeClass('disable-scrolling');

			setTimeout(function () {
				$('.blog-popup-image__show').removeClass('small');
			}, 600);
		});
	};

	/**
	 * return array of objects with image path and size from image srcSet
	 * @param {*} srcset
	 * @returns
	 */
	const getSrcsetArrayImagesFromSrcSet = (srcset) => {
		const img_str = srcset;
		const img_arr_by_space = img_str.split(' ');
		const img_arr_length = img_arr_by_space.length / 2;
		var result = [];

		let index = 0;
		while (index < img_arr_by_space.length) {
			let path = img_arr_by_space[index];
			let size = img_arr_by_space[index + 1].replace('w,', '');
			size = size.replace('w', '');
			result.push({ path, size });
			index = index + 2;
		}
		return result;
	};

	/**
	 * return the bigger path image from image srcSet
	 * @param {*} arr
	 * @returns
	 */
	const getTheBiggestPathFromSrcsetArray = (arr) => {
		let size = 0;
		let path = '';

		arr.forEach((item) => {
			if (parseInt(item.size) > size) {
				size = parseInt(item.size);
				path = item.path;
			}
		});

		return path;
	};

	/**
	 * show elements with fade animation
	 * only elements have 'show-with-fade-anim' class
	 */
	const hideElementsForAnimate = () => {
		$('.show-with-fade-anim').addClass('hide-animation-step');
		/* Check the location of each desired element */
		$('.show-with-fade-anim').each(function (i) {
			var bottom_of_object =
				$(this).offset().top +
				($(this).outerHeight() - $(this).outerHeight() / 1.75);
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			$(this).toggleClass(
				'show-animation-step',
				bottom_of_window > bottom_of_object
			);
		});
	};

	// add specific class to title by title height
	const chackPostTitle = () => {
		const elm = $('.check-title-height');
		elm.each(function (index, item) {
			let title = $(item).find('.related-content-blog__body-title');
			let content = $(item).find('.related-content-blog__body-content');
			let height = $(title).height();

			content.removeClass('content-with-1-line');
			content.removeClass('content-with-2-line');
			content.removeClass('content-with-3-line');
			content.removeClass('content-with-4-line');

			if (isLargeScreen()) {
				if (height < 40) {
					content.addClass('content-with-4-line');
				} else if (height > 40 && height < 80) {
					content.addClass('content-with-3-line');
				} else if (height > 80 && height < 120) {
					content.addClass('content-with-2-line');
				} else {
					content.addClass('content-with-1-line');
				}
			} else {
				console.log('height', height);
				if (height > 96) {
					content.addClass('content-with-3-line');
				}
			}
		});
	};

	/* Every time the window is scrolled */
	$(window).scroll(function () {
		hideElementsForAnimate();
	});

	/* on window resize */
	$(window).resize(function () {
		chackPostTitle();
		setTopStrip();
	});

	// change if screen width is big than 991px
	const isLargeScreen = () => {
		return $(window).width() > 991;
	};

	const setTopStrip = () => {
		if ($('body').hasClass('show-top-strip')) {
			const hpHeight = $('.hp-top').outerHeight();
			$('body').css({ 'margin-top': hpHeight });
			$('header.site-header').css({ 'margin-top': hpHeight });
		}
	};

	const onScroll = () => {
		const navbar = document.getElementById('masthead');
		const scroll = document.documentElement.scrollTop;
		const showTop = document.querySelector('.hp-top');
		if (showTop && navbar) {
			if (scroll > 100) {
				navbar.classList.add('scrolled');
				showTop.classList.add('show-top-hide');
			} else {
				navbar.classList.remove('scrolled');
				showTop.classList.remove('show-top-hide');
			}
		}
	};

	return {
		init
	};
})(jQuery);
//Init
App.init();

/* ************************************** */
/* old Js code need to refactor this code */
var btn = jQuery('#back_to_top');
var showCats = jQuery('.show-cats');
var menuBtn = jQuery('.menu-toggle');

jQuery(window).scroll(function () {
	if (jQuery(window).scrollTop() > 100) {
		btn.addClass('show');
	} else {
		btn.removeClass('show');
	}
});

let cycodepediaDiscover = document.querySelector('.cycodepedia-discover');
if (cycodepediaDiscover) {
	cycodepediaDiscover.addEventListener('click', function (e) {
		e.preventDefault();
		console.log('sdfsd');
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
}

btn.on('click', function (e) {
	e.preventDefault();
	jQuery('html, body').animate({ scrollTop: 0 }, '300');
});

menuBtn.on('click', function (e) {
	jQuery('.site-logo, .top-bar.top-bar-align-right').toggle();
});

jQuery('.resources-cats-select option.current-menu-item').prop(
	'selected',
	true
);
jQuery(function () {
	// bind change event to select
	jQuery('.resources-cats-select').on('change', function () {
		var url = $(this).val();
		if (url) {
			window.location = url;
		}
		return false;
	});
});

if (jQuery('.blog_sidebar').length) {
	jQuery(window).scroll(function () {
		var scroll = jQuery('.blog_sidebar').offset().top;
		console.log('top' + scroll);
		//var scroll = jQuery(window).scrollTop();

		//>=, not <=
		if (scroll) {
			//clearHeader, not clearheader - caps H
			jQuery('.blog_sidebar').addClass('sticky_sidebar');
		}
	}); //missing );
}

var timeoutHandler = null;
jQuery('.wpcf7-submit').click(function () {
	jQuery(this).addClass('hideText');
	if (timeoutHandler) clearTimeout(timeoutHandler);

	timeoutHandler = setTimeout(function () {
		jQuery('.wpcf7-submit').removeClass('hideText');
	}, 800);
});

jQuery(document).ready(function () {
	function contains_heb(str) {
		return /[\u0590-\u05FF]/.test(str);
	}

	let allText = document.querySelectorAll('p, h2, h3');
	for (i = 0; i < allText.length; i++) {
		if (contains_heb(allText[i].textContent)) {
			allText[i].classList.add('hebrew');
		}
	}

	let headerMenuLinks = document.querySelectorAll(
		'.main-navigation .main-nav ul li.menu-item-has-children > a'
	);
	if ($(window).width() < 992) {
		for (i = 0; i < headerMenuLinks.length; i++) {
			headerMenuLinks[i].addEventListener('click', function (e) {
				e.target.parentNode.classList.toggle('show');
				e.preventDefault();
			});
		}
	}

	let footerParentLink = document.querySelectorAll(
		'.footer-widget-1 #menu-footer-menu > li.menu-item-has-children > a'
	);
	for (i = 0; i < footerParentLink.length; i++) {
		footerParentLink[i].addEventListener('click', function (e) {
			e.preventDefault();
		});
	}

	jQuery(window).resize(function () {
		MobileJobTrigger();
	});
	MobileJobTrigger();
	function MobileJobTrigger() {
		if (window.innerWidth < 767) {
			jQuery('.jobs_posts ul li').click(function () {
				var href = jQuery(this).attr('href');
				window.open(href);
			});
		}
	}

	$('body').addClass('js-load');
});

const navbarHeader = document.querySelector('header.site-header');
const onHeaderScroll = () => {
	const scrollHeader = document.documentElement.scrollTop;
	if (scrollHeader > 100) {
		navbarHeader.classList.add('scrolled');
	} else {
		navbarHeader.classList.remove('scrolled');
	}
};
window.addEventListener('scroll', onHeaderScroll);


/***/ }),

/***/ 476:
/***/ (function() {

const LoadingScreen = (function ($) {
	'use strict';

	document.addEventListener(
		'DOMContentLoaded',
		function () {
			$('.loading-screen').addClass('hide');
		},
		false
	);
})(jQuery);


/***/ }),

/***/ 544:
/***/ (function() {

const taxonomyResourcescats = (function () {
	const el = document.querySelector(
		'.menu-resources-cats-container ul li:nth-child(1) a'
	);
	if (el) {
		const str = el.textContent.trim(); //get the text content and remove any leading/trailing spaces
		const res = str.split(/\s+/); //split by any whitespace
		res.pop(); //remove last element
		el.textContent = res.join(' '); //set the text content back to the modified string

		let catTitle = jQuery('#page-data-from-php').data('title');
		if (!catTitle) {
			catTitle = 'All categories';
		}

		document.querySelector('.fake-select span').textContent = catTitle;
	}

	const post_per_page = 9; // Post per page
	const total_pages = jQuery('#page-data-from-php').data('pages');
	const term = jQuery('#page-data-from-php').data('term');
	let page_number = 1;

	const init = () => {
		if (page_number >= total_pages) {
			jQuery('#more_posts_2').remove();
		}

		let activeItem = document.querySelector('#menu-item-222');
		if (activeItem) {
			if (window.location.href.indexOf('resourcescats') == -1) {
				activeItem.classList.add('current-menu-item');
			}
		}
	};

	const load_posts = () => {
		page_number++;

		const str =
			'&cat=' +
			term +
			'&pageNumber=' +
			page_number +
			'&ppp=' +
			post_per_page +
			'&action=more_resourcescats_ajax';

		jQuery.ajax({
			type: 'POST',
			dataType: 'html',
			url: jQuery('#page-data-from-php').data('url'),
			data: str,
			success: (data) => {
				jQuery('#loader').css('display', 'none');
				var data = jQuery(data);
				if (data.length) {
					jQuery('#more_posts_2').removeClass('loader');
					jQuery('.custom_blog').append(data);
				}
				if (page_number >= total_pages) {
					jQuery('#more_posts_2').remove();
				}
			}
		});

		return false;
	};

	jQuery('#more_posts_2').on('click', function () {
		jQuery('#more_posts_2').addClass('loader');
		load_posts();
	});

	/**
	 * init func.
	 */
	return {
		init
	};
})().init();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// App Scripts
__webpack_require__(619);
__webpack_require__(874);
__webpack_require__(544);
__webpack_require__(272);
__webpack_require__(34);
__webpack_require__(483);
__webpack_require__(48);
__webpack_require__(189);
__webpack_require__(434);
__webpack_require__(476);

}();
/******/ })()
;
//# sourceMappingURL=scripts.js.map