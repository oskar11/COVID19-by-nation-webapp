//oskar11 @github
//main.js file for version 2

let new_cases=document.getElementById("new_case");
let new_death=document.getElementById("new_death");
let total_death=document.getElementById("total_death");
let total_recovered=document.getElementById("total_recovered");
let total_cases=document.getElementById("total_cases");
let table=document.getElementById('countries_stat');
let table1=document.getElementById('prov');
let case_ca=document.getElementById('case_ca');
let death_ca=document.getElementById('death_ca');
let incu_ca=document.getElementById('incu_ca');
let critical=document.getElementById('critical_ca');


var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("{API-KEY}", requestOptions)
  .then(response => response.json().then(data =>{
  console.log(data);
  total_cases.textContent = data.cases.toLocaleString();
  total_death.textContent = data.deaths.toLocaleString();
  total_recovered.textContent = data.recovered.toLocaleString();
  new_case.textContent= data.active.toLocaleString()+"*";

  }))
  .catch(error => console.log('error', error));
//new
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("{API-KEY}", requestOptions)
  .then(response => response.json().then(data =>{
  console.log(data);
  let countries_stat = data;
  for(let i = 0; i<countries_stat.length;i++){

    var circle=L.circle([countries_stat[i].countryInfo.lat, countries_stat[i].countryInfo.long], {
      color: 'orange',
      fillColor: 'orange',
      fillOpacity: 0.5,
      radius: 200000
    }) .bindPopup("("+countries_stat[i].country+") "+"&#9763;Cases: "+countries_stat[i].cases.toLocaleString()+" | "+" &#9760;Deaths: "+countries_stat[i].deaths.toLocaleString()+" | &#x2705;Recovered: "+countries_stat[i].recovered.toLocaleString(),
    {
    }
).addTo(map);



      let row = table.insertRow(1+i);
      let order = row.insertCell(0);
      let country_name = row.insertCell(1);
      let activecase=row.insertCell(2);
      let neww=row.insertCell(3);
      let cases = row.insertCell(4);
      let deaths = row.insertCell(5);
      let serious_critical = row.insertCell(6);
      let recovered_per_country = row.insertCell(7);
      var img = document.createElement('img');
      img.src =  countries_stat[i].countryInfo.flag;
      img.setAttribute("height","15px");
      img.setAttribute("width","25px");
      order.appendChild(img);
      country_name.textContent = i+1+"."+countries_stat[i].country;
      cases.textContent = countries_stat[i].cases.toLocaleString();
      neww.innerHTML = "&#8593;"+countries_stat[i].todayCases.toLocaleString();
      deaths.textContent = countries_stat[i].deaths.toLocaleString();
      serious_critical.textContent = countries_stat[i].critical.toLocaleString();
      recovered_per_country.textContent = countries_stat[i].recovered.toLocaleString();
      activecase.textContent=countries_stat[i].active.toLocaleString()+"*";

  }



  }))
  .catch(error => console.log('error', error));




var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("{API-KEY}", requestOptions)
  .then(response => response.json().then(data =>{
  console.log(data);
  case_ca.textContent=data.cases.toLocaleString();
  death_ca.textContent=data.deaths.toLocaleString();
  incu_ca.textContent=data.recovered.toLocaleString();
  critical_ca.textContent=data.critical.toLocaleString();
  tests.textContent=data.tests.toLocaleString();

  }))
  .catch(error => console.log('error', error));
//new


var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("{API-KEY}", requestOptions)
  .then(response => response.json().then(data =>{
  console.log(data);
  let count=0;
  let reg=data.infectedByRegion;
  for(let i = 1; i<reg.length;i++){
      let row = table1.insertRow(1+count);
      let province = row.insertCell(0);
      let cases = row.insertCell(1);
      let deaths=row.insertCell(2);
      province.textContent = reg[i].region;
      cases.textContent = reg[i].infectedCount;
      deaths.innerHTML = reg[i].deceasedCount;
      count++;
  }

  }))
  .catch(error => console.log('error', error));
