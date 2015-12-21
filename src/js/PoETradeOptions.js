document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("saveBtn").addEventListener("click", saveOptions);

	storage.get(OPTIONS_KEY, optionsLoaded); 
});

function optionsLoaded(results) {
	var options = getOptions(results);
	document.getElementById("onlineOnlyChk").checked = options["onlineOnly"];
	document.getElementById("buyoutOnlyChk").checked = options["buyoutOnly"];
	document.getElementById("sortBuyoutChk").checked = options["sortBuyout"];
}

function saveOptions() {
	var options = {};
	options["onlineOnly"] = document.getElementById("onlineOnlyChk").checked;
	options["buyoutOnly"] = document.getElementById("buyoutOnlyChk").checked;
	options["sortBuyout"] = document.getElementById("sortBuyoutChk").checked;
	var storageObj = {};
	storageObj[OPTIONS_KEY] = options;
	storage.set(storageObj, optionsSaved);

}

function optionsSaved() {
	if(chrome.runtime.lastError == null) {
		document.getElementById("status").innerText = "Options saved successfully!";
	}
}