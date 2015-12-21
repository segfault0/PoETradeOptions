storage.get(OPTIONS_KEY, optionsLoaded);

function optionsLoaded(results) {
	// TODO: Abstract?
	var options = getOptions(results);

	if(options["onlineOnly"]) {
		document.getElementById("online1").checked = false;
		document.getElementById("online2").checked = true;
	}

	if(options["buyoutOnly"]) {
		document.getElementById("bo1").checked = false;
		document.getElementById("bo2").checked = true;	
	}
}
