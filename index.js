function fetchData() {
  fetch("https://api.spaceXdata.com/v3/launches?limit=100")
    .then((Response) => {
      console.log(Response);
      if (!Response.ok) {
        throw Error("Error");
      }
      return Response.json();
    })
    .then((data) => {
      console.log(data);
      const html = data
        .map((launches) => {
        
          return ` 

                <div class="eachLaunch">
                    <div class="imageContainer"><img src="${launches.links.mission_patch}"
                            alt="launchimg" class="launchImage" /></div>
                    <div class="cardDetails">
                    <strong style="color: blue;">${launches.mission_name} #${launches.flight_number}</strong><br /><br />
                    <strong>Mission Ids :</strong>${launches.mission_id}<br />
                    <strong> Launch Year:</strong> ${launches.launch_year}<br />
                    <strong> Successful Launch: </strong>${launches.launch_success}<br />
                    <strong>Successful Landing: </strong> ${launches.rocket.first_stage.cores[0].land_success}
                    </div>
                
                </div>`;
            
        })
        .join("");
        
      console.log(html);
      document
        .querySelector("#main-app")
        .insertAdjacentHTML("afterbegin", html);
    })
    .catch((Error) => {
      console.log(Error);
    });
}
fetchData();

var mainUrl="https://api.spaceXdata.com/v3/launches?launch_year=";
var url1=mainUrl.concat(2006);
var url2=mainUrl.concat(2007);
var url3= mainUrl.concat(2008);
var url4= mainUrl.concat(2009);
var url5= mainUrl.concat(2010);
var url6= mainUrl.concat(2011);
var url7= mainUrl.concat(2012);
var url8= mainUrl.concat(2013);
var url9= mainUrl.concat(2014);
var url10= mainUrl.concat(2015);
var url11= mainUrl.concat(2016);
var url12= mainUrl.concat(2017);
var url13= mainUrl.concat(2018);
var url14= mainUrl.concat(2019);
var url15= mainUrl.concat(2020);

var url16="https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true";
var url17="https://api.spaceXdata.com/v3/launches?limit=100&land_success=true";

var url18="https://api.spaceXdata.com/v3/launches?limit=100&launch_success=false";
var url19="https://api.spaceXdata.com/v3/launches?limit=100&land_success=false";



//buttons
function buttonClick(url){

    fetch(url)
    .then((Response) => {
      console.log(Response);
      if (!Response.ok) {
        throw Error("Error");
      }
      return Response.json();
    })
    .then((data) => {
      console.log(data);
      
       const html = data
        .map((launches) => {   
      
          return ` 

                <div class="eachLaunch">
                    <div class="imageContainer"><img src="${launches.links.mission_patch}"
                            alt="launchimg" class="launchImage" /></div>
                    <div class="cardDetails">
                    <strong style="color: blue;">${launches.mission_name} #${launches.flight_number}</strong><br /><br />
                    <strong>Mission Ids :</strong>${launches.mission_id}<br />
                    <strong> Launch Year:</strong> ${launches.launch_year}<br />
                    <strong> Successful Launch: </strong>${launches.launch_success}<br />
                    <strong>Successful Landing: </strong> ${launches.rocket.first_stage.cores[0].land_success}
                    </div>
                
                </div>`;
          
        })
        .join("");
      
      console.log(html);
      document
        .querySelector("#main-app")
        .insertAdjacentHTML("afterbegin", html);
    })
    .catch((Error) => {
      console.log(Error);
    });
    
}

document.getElementById("myBtn1").addEventListener("click", function() {
    buttonClick(url1);
  });
  document.getElementById("myBtn2").addEventListener("click", function() {
    buttonClick(url2);
  });
  document.getElementById("myBtn3").addEventListener("click", function() {
    buttonClick(url3);
  });
  document.getElementById("myBtn4").addEventListener("click", function() {
    buttonClick(url4);
  });
  document.getElementById("myBtn5").addEventListener("click", function() {
    buttonClick(url5);
  });
  document.getElementById("myBtn6").addEventListener("click", function() {
    buttonClick(url6);
  });
  document.getElementById("myBtn7").addEventListener("click", function() {
    buttonClick(url7);
  });
  document.getElementById("myBtn8").addEventListener("click", function() {
    buttonClick(url8);
  });
  document.getElementById("myBtn9").addEventListener("click", function() {
    buttonClick(url9);
  });
  document.getElementById("myBtn10").addEventListener("click", function() {
    buttonClick(url10);
  });
  document.getElementById("myBtn11").addEventListener("click", function() {
    buttonClick(url11);
  });
  document.getElementById("myBtn12").addEventListener("click", function() {
    buttonClick(url12);
  });
  document.getElementById("myBtn13").addEventListener("click", function() {
    buttonClick(url13);
  });
  document.getElementById("myBtn14").addEventListener("click", function() {
    buttonClick(url14);
  });
  document.getElementById("myBtn15").addEventListener("click", function() {
    buttonClick(url15);
  });

  document.getElementById("myBtn16").addEventListener("click", function() {
    buttonClick(url16);
  });

  document.getElementById("myBtn17").addEventListener("click", function() {
    buttonClick(url17);
  });
  document.getElementById("myBtn18").addEventListener("click", function() {
    buttonClick(url18);
  });
  document.getElementById("myBtn19").addEventListener("click", function() {
    buttonClick(url19);
  });