// Load options and set defaults accordingly
storage.get(OPTIONS_KEY, optionsLoaded);

function optionsLoaded(results) {
	var options = getOptions(results);
	// Only set buyout and online if on the main search page (not a results page)
	var curPath = window.location.pathname;
	if(curPath == "/" || curPath == "") {
		if(options["onlineOnly"]) {
			document.getElementById("online1").checked = false;
			document.getElementById("online2").checked = true;
		}

		if(options["buyoutOnly"]) {
			document.getElementById("bo1").checked = false;
			document.getElementById("bo2").checked = true;	
		}
	} else if(curPath.startsWith("/search")) {
		if(options["sortBuyout"]) {
			var buyoutSpans = document.querySelectorAll("[data-name='price_in_chaos']");
			if(buyoutSpans.length != 0) {
				buyoutSpans[0].click();
			}
		}
	}
}
