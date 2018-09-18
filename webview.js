// Zalo integration
const path = require('path');

module.exports = (Franz, options) => {
	function getMessages() {
		var count = Array.from(document.querySelectorAll('.li:not(.active) .count.unread')).reduce((total, current) => total += parseInt(current.innerText), 0);
		Franz.setBadge(count);
	};

	// Becase have problem when SSO redirecting. So hack this
	function init() {
		setTimeout(function(){
			if (window.location.href === 'https://account.base.vn/account') {
				window.location.href = 'https://message.base.vn/home'
			}
		}, 1000);
	};

	Franz.loop(getMessages);
	Franz.initialize(init);
};
