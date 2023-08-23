// cruise array
const arrCruises = [
  {
    image: "assets/boat1.jpg",
    name: "Luxury Oasis",
    description: "Experience the ultimate in luxury and relaxation on our Luxury Oasis cruise. Sail through crystal-clear waters, enjoy gourmet dining, and indulge in world-class spa treatments.",
    price: 32000,
    location: "Maldives",
    temp: ""
  },
  {
    image: "assets/boat1.jpg",
    name: "Tropical Paradise",
    description: "Escape to a tropical paradise on our Tropical Paradise cruise. Discover pristine beaches, vibrant coral reefs, and thrilling water sports for an unforgettable adventure.",
    price: 54000,
    location: "Vaitape",
    temp: ""
  },
  {
    image: "assets/boat1.jpg",
    name: "Majestic Fjords",
    description: "Explore the breathtaking fjords and majestic landscapes on our Majestic Fjords cruise. Immerse yourself in the natural beauty and serene tranquility of these remarkable wonders.",
    price: 67000,
    location: "Norway",
    temp: ""
  },
  {
    image: "assets/boat1.jpg",
    name: "Cultural Odyssey",
    description: "Embark on a cultural odyssey on our Cultural Odyssey cruise. Delve into the rich history, art, and traditions of diverse cultures as you journey through enchanting cities.",
    price: 87000,
    location: "France",
    temp: ""
  },
  {
    image: "assets/boat1.jpg",
    name: "Polar Expedition",
    description: "Experience the thrill of a polar expedition on our Polar Expedition cruise. Witness stunning icebergs, encounter Arctic wildlife, and marvel at the vast, untouched landscapes.",
    price: 172000,
    location: "Antarctica",
    temp: ""
  },
  {
    image: "assets/boat1.jpg",
    name: "Enchanted Islands",
    description: "Discover the magic of the Enchanted Islands on our cruise. Encounter unique wildlife, pristine beaches, and captivating volcanic landscapes in this natural paradise.",
    price: 24000,
    location: "Guayaquil",
    temp: ""
  },
  {
    image: "assets/boat1.jpg",
    name: "Mystical Rivers",
    description: "Embark on a journey along mystical rivers on our Mystical Rivers cruise. Immerse yourself in the allure of ancient civilizations, stunning architecture, and vibrant local cultures.",
    price: 80000,
    location: "Egypt",
    temp: ""
  },
  {
    image: "assets/boat1.jpg",
    name: "Secluded Retreat",
    description: "Escape to a secluded retreat on our Secluded Retreat cruise. Experience tranquility and relaxation in remote, untouched destinations away from the hustle and bustle.",
    price: 90000,
    location: "Seychelles",
    temp: ""
  },
  {
    image: "assets/boat1.jpg",
    name: "Adventures at Sea",
    description: "Embark on thrilling adventures at sea on our cruise. Dive into exciting water sports, explore hidden coves, and enjoy breathtaking sunsets from the deck.",
    price: 56000,
    location: "Saint Lucia",
    temp: ""
  },
  {
    image: "assets/boat1.jpg",
    name: "Culinary Delights",
    description: "Savor exquisite culinary delights on our Culinary Delights cruise. Indulge in gourmet cuisine, wine tasting, and cooking classes as you sail through picturesque coastal towns.",
    price: 34000,
    location: "Greece",
    temp: ""
  },
  {
    image: "assets/boat1.jpg",
    name: "Riverside Romance",
    description: "Experience riverside romance on our Riverside Romance cruise. Cruise along charming riverside towns, enjoy intimate dinners, and create cherished memories with your loved one.",
    price: 140000,
    location: "Zambezi",
    temp: ""
  },
  {
    image: "assets/boat1.jpg",
    name: "Cultural Connections",
    description: "Forge cultural connections on our Cultural Connections cruise. Immerse yourself in local traditions, interact with artisans, and participate in meaningful community experiences.",
    price: 50000,
    location: "Thailand",
    temp: ""
  }
];

// Sorting & Filtering
let currentFilter = "";
let currentSort = "low to high";




// doc ready
$(document).ready(function(){

    console.log("hello")


    loadCruises(arrCruises);



});


// load cruises method
function loadCruises(showCruises) {

  $("#cruiseContainer").empty();


  for (let i = 0; i < showCruises.length; i++) {
      const cruise = showCruises[i];

      $("#cruiseContainer").append($("#cruiseCardTemp").html());

      let currentChild = $("#cruiseContainer").children().eq(i);

      

    // Weather API
    $.ajax({
      type: "GET",
      url:"https://api.openweathermap.org/data/2.5/weather?q=" + cruise.location + "&appid=0c8a911e5c7f8e5a03991afe2075de21",
      success: function(data){
          weatherData = data;

          console.log(data);
      }
        
    }).done(function(){
        $(currentChild).find("#weather-icon-img").attr('src', 'https://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '@2x.png');
        $(currentChild).find("#weather-text").text(Math.round(weatherData.main.temp - 273) + "ºC");
        
        let temp = Math.round(weatherData.main.temp - 273);
      
        showCruises[i].temp = temp;
        console.log(showCruises[i].temp);

        
    })

      // Add cruise details to card
      $(currentChild).find("#cruiseImg").attr('src', cruise.image);
      $(currentChild).find(".card-title").text(cruise.name);
      $(currentChild).find(".card-text").text(cruise.description);
      $(currentChild).find(".price").text('R' + cruise.price);

      // Add hover effect to cruise card
      $(currentChild).hover(
          function () { 
              // Toggle image size
              $(this).find(".card-img-top").toggleClass("small-image");
              // Toggle Location text
              $(this).find(".location").toggle();
              // Toggle card title style
              $(this).find(".card-title").toggleClass("small-title");
              // Toggle Weather Icon
              $(currentChild).find(".weather-icon").toggle();
              
              

          }
      );

      // Add Location text to card
      $(currentChild).find(".card-text").prepend('<span class="location">Location: ' + cruise.location + '</span>');
      $(currentChild).find(".location").hide(); 
      $(currentChild).find(".weather-icon").hide();

      
  }
  
}

// -----------------
// When filter/sort is clicked
$("input[name='filterRadio']").click(function() {
  currentFilter = $(this).attr('value');
  console.log(currentFilter);
  

  filterSortCruises();
});

$("input[name='sortRadio']").click(function() {
  currentSort = $(this).attr('value');
  console.log(currentSort);

  filterSortCruises();
});

// Function for filtering and sorting
function filterSortCruises() {

  // Filter
  let filteredSortedArrCruise = [];

  // Filtering
  if(currentFilter === "cold"){
    filteredSortedArrCruise = arrCruises.filter(cruise => +(cruise.temp) < 20);
  }else if(currentFilter === "warm"){
    filteredSortedArrCruise = arrCruises.filter(cruise => +(cruise.temp) >= 20);
  }else{
    filteredSortedArrCruise = arrCruises;
  }

  // Sort
  if(currentSort === "low to high"){
    filteredSortedArrCruise = filteredSortedArrCruise.sort((a, b) => {
      return a.price - b.price;
    });
  }else if(currentSort === "a to z"){
    filteredSortedArrCruise = filteredSortedArrCruise.sort((a, b) => {
      const nameA = a.name.toLowerCase(); 
      const nameB = b.name.toLowerCase();
    
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }else{
    filteredSortedArrCruise = filteredSortedArrCruise;
  }
  

  console.log("Filtered Array-----------------")
  console.log(filteredSortedArrCruise);
  loadCruises(filteredSortedArrCruise);

}