getOptions(optionsLoaded);

function optionsLoaded(options) {
	// Only set buyout and online if on the main search page (not a results page)
	var curPath = window.location.pathname;
	if(curPath == "/" || curPath == "") {
        // online1 and online2 are the mysterious input fields that control the on/off slider behavior for "Online Only"
        // basically, if we want "Online Only" to be on, online2 needs to be checked and online1 is always the opposite
        // of online2
		document.getElementById("online1").checked = !options["onlineOnly"];
        document.getElementById("online2").checked = options["onlineOnly"];

        // Same as above but with bo1 and bo2
		document.getElementById("bo1").checked = !options["buyoutOnly"];
		document.getElementById("bo2").checked = options["buyoutOnly"];

	} else if(curPath.startsWith("/search")) {
		if(options["sortBuyout"]) {
			var buyoutSpans = document.querySelectorAll("[data-name='price_in_chaos']");
			if(buyoutSpans.length != 0) {
				buyoutSpans[0].click();
			}
		}
	}
}
