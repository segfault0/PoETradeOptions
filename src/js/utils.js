var storage = chrome.storage.sync;
var OPTIONS_KEY = "POE_TRADE_OPTIONS";
var defaultOptions = { "onlineOnly": true, "buyoutOnly": true, "sortBuyout": true };

// Returns either the options stored in results map or the default options
function getOptions(results) {
	var options = {};
	if(results == null || results[OPTIONS_KEY] == null) {
		// Save default options
		options = defaultOptions;
	} else {
		options = results[OPTIONS_KEY];
	}

	return options;
}