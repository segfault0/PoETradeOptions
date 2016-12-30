document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("saveBtn").addEventListener("click", saveOptions);
	getOptions(optionsLoaded);
});

function optionsLoaded(options) {
	document.getElementById("onlineValueId").value = options["onlineValue"];
	document.getElementById("buyoutValueId").value = options["buyoutValue"];
}

function saveOptions() {
	var options = {};
	options["onlineValue"] = document.getElementById("onlineValueId").value === "true";
	options["buyoutValue"] = document.getElementById("buyoutValueId").value;
	var storageObj = {};
	storageObj[OPTIONS_KEY] = options;
	storage.set(storageObj, optionsSaved);

}

function optionsSaved() {
	if(chrome.runtime.lastError == null) {
		document.getElementById("status").innerText = "Options saved successfully!";
	}
}