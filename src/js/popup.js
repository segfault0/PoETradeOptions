function getPrice() {
	$.post("http://poe.trade/search/omoniitamonita", 
		{ 
			sort: "price_in_chaos", 
			bare: true 
		},
		function(data, status, jqXHR) {
			var lowestPrice = $(data).find("[data-name='price_in_chaos'] span").first().attr("title");
			console.log("lowest price: " + lowestPrice)
		},
		"html");
}