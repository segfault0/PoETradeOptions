getOptions(optionsLoaded);

function optionsLoaded(options) {
	// Only set buyout and online if on the main search page (not a results page)
	var curPath = window.location.pathname;
	if(curPath == "/" || curPath == "") {
        // online1 and online2 are the mysterious input fields that control the on/off slider behavior for "Online Only"
        // basically, if we want "Online Only" to be on, online2 needs to be checked and online1 is always the opposite
        // of online2
		document.getElementById("online1").checked = !options["onlineValue"];
        document.getElementById("online2").checked = options["onlineValue"];

        // Set the hidden input field for buyout value that is used for actual submit
		document.getElementsByName("has_buyout")[0].value = options["buyoutValue"];
		// Update the visual element by triggering event for Chosen js library
		document.getElementsByName("has_buyout")[0].dispatchEvent(new Event("chosen:updated"));
		// Make sure the box is not randomly highlighted.  This is real ugly but there aren't many IDs...
		document.getElementsByName("has_buyout")[0].nextSibling.children[0].classList.remove("nonempty-select");
	}
}
