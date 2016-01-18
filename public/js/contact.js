$(document).ready(function() {
	function createInfoWindowContent() {
		return [
			'RR#2 1253 Concession 4',
			'Teeswater, Ontario',
			'N0G 2S0'
		].join('<br>');
	}

	function initialize() {
		var teeswater = new google.maps.LatLng(43.989094, -81.235936);
		var mapOptions = {
			zoom: 13,
			center: teeswater
		};

		var map = new google.maps.Map(document.getElementById('map'), mapOptions);

		var coordInfoWindow = new google.maps.InfoWindow();
		coordInfoWindow.setContent(createInfoWindowContent());
		coordInfoWindow.setPosition(teeswater);
		coordInfoWindow.open(map);

		google.maps.event.addListener(map, 'zoom_changed', function() {
			coordInfoWindow.setContent(createInfoWindowContent());
			coordInfoWindow.open(map);
		});
	}

	google.maps.event.addDomListener(window, 'load', initialize);
});