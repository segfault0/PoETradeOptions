var storage = chrome.storage.sync;
var OPTIONS_KEY = "POE_TRADE_OPTIONS";
var defaultOptions = { "onlineValue": true, "buyoutValue": "1" };

// Returns either the options stored in results map or the default options

/* TODO: Instead of having getOptions be manually called after the storage get, have it do the storage get, set
 * defaults if no options are found, and then return that
 */
// TODO: Check for each options and if any single option is missing set its default?
function getOptions(callbackFn) {
    storage.get(OPTIONS_KEY, function(results) {
        var options = {};
        if(results == null || results[OPTIONS_KEY] == null) {
            // If no options saved, return default options
            options = defaultOptions;
        } else {
            options = results[OPTIONS_KEY];
        }

        if(callbackFn != null) {
            callbackFn(options);
        }
    });
}