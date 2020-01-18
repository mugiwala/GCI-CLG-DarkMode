$('#userinfo > div').after('<span class="jid-host" onclick="toggleMode()">Toggle Mode</span><span id="logout-divider">|</span>')

var light = "https://media.copyleftgames.org/css/site.css";
var dark = "https://mugiwala.github.io/GCI-CLG-DarkMode/dark-site.css"
var darkModeToggle = 0

function toggleMode(){
	if(darkModeToggle === 0){
		$('link[href*="site.css"]').prop("href", dark);
		darkModeToggle = 1;
	} else {
		$('link[href*="site.css"]').prop("href", light);
		darkModeToggle = 0;	
	}
}
