window.Hack = (function( window, document, undefined ) {

	//htmlタグを変数に
	var htmlTag =  document.documentElement;

	//userAgentを変数に
	var userAgent = window.navigator.userAgent.toLowerCase();

	//OS,ブラウザを変数に
	var android = 'android',
		iphone = 'iphone',
		ipad = 'ipad',
		pc = 'pc',
		firefox = 'firefox';

	//クラス名間の区切りスペース
	var space = ' ';

	//Android
	if (userAgent.indexOf(android) != -1) {
		htmlTag.className = htmlTag.className + space + android;
	//iphone
	} else if(userAgent.indexOf(iphone) != -1) {
		htmlTag.className = htmlTag.className + space + iphone;
	//ipad
	} else if(userAgent.indexOf(ipad) != -1) {
		htmlTag.className = htmlTag.className + space + ipad;
	//PC
	} else{
		htmlTag.className = htmlTag.className + space + pc;
	}
	
	//firefox
	if (userAgent.indexOf(firefox) != -1) {
		htmlTag.className = htmlTag.className + space + firefox;
	}

})(this, this.document);