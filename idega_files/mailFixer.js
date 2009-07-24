var maildivider="[at]" //enter divider you use to divide your email address strings

function descrambleEmail() {
	for (i=0; i<=(document.links.length-1); i++){
		if (document.links[i].href.indexOf(maildivider)!=-1)
			document.links[i].href=document.links[i].href.split(maildivider)[0]+"@"+document.links[i].href.split(maildivider)[1]
	}
}

function backToTop() {
    var x1 = x2 = x3 = 0;
    var y1 = y2 = y3 = 0;

    if (document.documentElement) {
        x1 = document.documentElement.scrollLeft || 0;
        y1 = document.documentElement.scrollTop || 0;
    }

    if (document.body) {
        x2 = document.body.scrollLeft || 0;
        y2 = document.body.scrollTop || 0;
    }

    x3 = window.scrollX || 0;
    y3 = window.scrollY || 0;

    var x = Math.max(x1, Math.max(x2, x3));
    var y = Math.max(y1, Math.max(y2, y3));

    window.scrollTo(Math.floor(x / 2), Math.floor(y / 2));

    if (x > 0 || y > 0) {
        window.setTimeout("backToTop()", 25);
    }
}

function showTab() {
	document.getElementById('openTab').style.display = 'none';	
	document.getElementById('closeTab').style.display = 'block';
	
	var marginChange = new Fx.Style('login', 'height', {duration:500, wait:true, onComplete: function(){new Fx.Style('login', 'opacity', {duration: 500}).start(0, 1)}});
	marginChange.start(0, 112);
	
	createCookie("tabShown", "true", 0);
}

function hideTab() {
	document.getElementById('closeTab').style.display = 'none';	
	document.getElementById('openTab').style.display = 'block';	

	var ms = new Fx.Style('login', 'opacity', {duration: 500, wait:true, onComplete: function(){new Fx.Style('login', 'height', {duration:500}).start(112,0)}});
	ms.start(1, 0);
	
	eraseCookie("tabShown");
}

function initializeTab() {
	var myFx = new Fx.Style('login', 'opacity').set(0);

	var cookieSet = readCookie("tabShown");
	if (cookieSet) {
		showTab();
	}
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}