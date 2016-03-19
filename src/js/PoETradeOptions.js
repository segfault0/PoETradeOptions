document.addEventListener("DOMContentLoaded", function() {
	var optionsArray = [
        {
            "text": "On",
            "value": true
        },
        {
            "text": "Off",
            "value": false
        }
    ];

    var onlineSelect = document.getElementById("onlineOnlyId");
    var buyoutSelect = document.getElementById("buyoutOnlyId");

    for(var i = 0; i < optionsArray.length; i++) {
        var curOption = optionsArray[i];
        onlineSelect.options.add(new Option(curOption.text, curOption.value));
        buyoutSelect.options.add(new Option(curOption.text, curOption.value));
    }

	document.getElementById("saveBtn").addEventListener("click", saveOptions);

	getOptions(optionsLoaded);
});

function optionsLoaded(options) {
	document.getElementById("onlineOnlyId").value = options["onlineOnly"];
	document.getElementById("buyoutOnlyId").value = options["buyoutOnly"];
	document.getElementById("sortBuyoutId").checked = options["sortBuyout"];
}

function saveOptions() {
	var options = {};
	options["onlineOnly"] = document.getElementById("onlineOnlyId").value === "true";
	options["buyoutOnly"] = document.getElementById("buyoutOnlyId").value === "true";
	options["sortBuyout"] = document.getElementById("sortBuyoutId").checked;
	var storageObj = {};
	storageObj[OPTIONS_KEY] = options;
	storage.set(storageObj, optionsSaved);

}

function optionsSaved() {
	if(chrome.runtime.lastError == null) {
		document.getElementById("status").innerText = "Options saved successfully!";
	}
}