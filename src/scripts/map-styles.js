var bluishStyle = [
	{
		stylers: [
			{hue: "#009999"},
			{saturation: -5},
			{lightness: -40}
		]
	},
	{
		featureType: "road",
		elementType: "geometry",
		stylers: [
			{lightness:100},
			{visibility:"simplified"}
		]
	},
	{
		featureType: "water",
		elementType: "geometry",
		stylers: [
			{hue: "#0000FF"},
			{saturation:-40}
		]
	},
	{
		featureType:"administrative.neighborhood",
		elementType:"labels.text.stroke",
		stylers:[
			{color:"#E8000"},
			{weight:1}
		]
	},
	{
		featureType:"road.highways",
		elementType:"geometry.fill",
		stylers:[
			{color:"#FF00FF"},
			{weight:2}
		]
	}
]