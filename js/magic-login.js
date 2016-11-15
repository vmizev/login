window.addEventListener('load', function () {
	var getUserName = document.getElementById('username');
	var btn = document.getElementById('get-cookie');
	var setUser = document.getElementById('set-user');	

	function setCookie() {
		var res = encodeURIComponent(getUserName.value);
		document.cookie = 'login='+ res + ';max-age=100;';
		var writeCookie = findCookieValue('login');
		setUser.innerHTML = writeCookie;
		// console.log(writeCookie);
	}	

	function findCookieValue(cookieName){
		var allCookies = document.cookie;
		var pos = allCookies.indexOf(cookieName + '=');

		if (pos != -1) {
			var start = pos + cookieName.length+1;
			var end = allCookies.indexOf(':', start);

			if (end == -1){
				end = allCookies.length;
			}
			var value = allCookies.substring(start,end);

			return decodeURIComponent(value);
		}
	}
	btn.onclick = setCookie;				
})
