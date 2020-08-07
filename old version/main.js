

//I used https://covid-19-apis.postman.com/ to get the api
function submit() {
	$("#output").show();

	let country = $("#insert").val().toString();
	let url = "#API_URL";
	url = url+country;
	$.get(url, function(data){
 			displayResults(data);
      //mapper(data);
		});
}

function displayResults(data){
	let cases= data.cases.toLocaleString();
	let deaths = data.deaths.toLocaleString();
	let recovered = data.recovered.toLocaleString();
    	let recentcase= data.active.toLocaleString();
    	let tests= data.tests.toLocaleString();
	$("#cases").html(cases);
	$("#death").html(deaths);
	$("#recovered").html(recovered);
    	$("#newcase").html(recentcase);
    	$("#tests").html(tests);

		//I used map from https://leafletjs.com to display location on my project
    var marker = L.marker([data.countryInfo.lat, data.countryInfo.long], { title: "country" }) .bindTooltip(data.country+" | Cases: "+data.cases,
    {
        permanent: true,
        direction: 'right'
    }
).addTo(map);
}
