// Zalo integration
const path = require('path');

module.exports = (Franz, options) => {
	function getEntityFromCharacter(character) {
		var hexCode = character.replace(/['"]/g, '').charCodeAt(0).toString(16).toUpperCase();
		while (hexCode.length < 4) {
			hexCode = '0' + hexCode;
		}
		
		return '\\' + hexCode + ';';
	}
	
	function getMessages() {
		var count = 0;
		var badgeElement = document.querySelector("#message-tab > i.tab-red-dot.fa")
		if (badgeElement !== null) {
			var badge = getEntityFromCharacter(window.getComputedStyle(badgeElement, '::before').content);
			switch (badge) {
				case '\\EA06;':
					count = 5;
					break;
				case '\\EA05;':
					count = 5;
				break;
				case '\\EA04;':
					count = 4;
				break;
				case '\\EA03;':
					count = 3;
				break;
				case '\\EA02;':
					count = 2;
				break;
				case '\\EA01;':
					count = 1;
				break;
				default:
					break;
			}
		}

		Franz.setBadge(count);
	};
	Franz.loop(getMessages);
	Franz.injectCSS(path.join(__dirname, 'style.css'));
};
