$(function() {
	$("#searchList").sortable({
			//stop: saveSearchListState,
			containment: "document",
			axis: "y",
			distance: 5,
			scroll: true,
			items: ".search-entry:not(:first)"
		}
	);
	$("#searchList").disableSelection();
});

function updateLowestPrice(url) {
	$.post(url, 
		{ 
			sort: "price_in_chaos", 
			bare: true 
		},
		function(data, status, jqXHR) {
			var lowestPrice = $(data).find("[data-name='price_in_chaos'] span").first().attr("title");
			console.log("lowest price: " + lowestPrice);
			$("#searchList").find("[search-url='" + this.url + "']").append(" -- " + lowestPrice);
		},
		"html");
}