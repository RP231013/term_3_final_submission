// cruise array
const arrCruises = [
  {
    image: "assets/cruiseImgs/boat1.jpg",
    name: "Luxury Oasis",
    description: "Experience the ultimate in luxury and relaxation on our Luxury Oasis cruise. Sail through crystal-clear waters, enjoy gourmet dining, and indulge in world-class spa treatments.",
    price: 32000,
    location: "Maldives",
    temp: "",
    return: true, 
    length: 7, 
    destinations: ["Malé", "Ari Atoll", "Baa Atoll"]
  },
  {
    image: "assets/cruiseImgs/boat2.jpg",
    name: "Tropical Paradise",
    description: "Escape to a tropical paradise on our Tropical Paradise cruise. Discover pristine beaches, vibrant coral reefs, and thrilling water sports for an unforgettable adventure.",
    price: 54000,
    location: "Vaitape",
    temp: "",
    return: false, 
    length: 10, 
    destinations: ["Bora Bora", "Moorea", "Tahiti", "Raiatea"]
  },
  {
    image: "assets/cruiseImgs/boat3.jpg",
    name: "Majestic Fjords",
    description: "Explore the breathtaking fjords and majestic landscapes on our Majestic Fjords cruise. Immerse yourself in the natural beauty and serene tranquility of these remarkable wonders.",
    price: 67000,
    location: "Norway",
    temp: "",
    return: true, 
    length: 14, 
    destinations: ["Oslo", "Bergen", "Geirangerfjord", "Tromsø"]
  },
  {
    image: "assets/cruiseImgs/boat4.jpg",
    name: "Cultural Odyssey",
    description: "Embark on a cultural odyssey on our Cultural Odyssey cruise. Delve into the rich history, art, and traditions of diverse cultures as you journey through enchanting cities.",
    price: 87000,
    location: "France",
    temp: "",
    return: true, 
    length: 12, 
    destinations: ["Marseille", "Nice"]
  },
  {
    image: "assets/cruiseImgs/boat5.jpg",
    name: "Polar Expedition",
    description: "Experience the thrill of a polar expedition on our Polar Expedition cruise. Witness stunning icebergs, encounter Arctic wildlife, and marvel at the vast, untouched landscapes.",
    price: 172000,
    location: "Antarctica",
    temp: "",
    return: false, 
    length: 21, 
    destinations: ["Antarctic Peninsula", "South Shetland Islands", "Deception Island", "King George Island"]
  },
  {
    image: "assets/cruiseImgs/boat6.jpg",
    name: "Enchanted Islands",
    description: "Discover the magic of the Enchanted Islands on our cruise. Encounter unique wildlife, pristine beaches, and captivating volcanic landscapes in this natural paradise.",
    price: 24000,
    location: "Guayaquil",
    temp: "",
    return: true, 
    length: 5, 
    destinations: ["Galápagos Islands", "Isabela Island"]
  },
  {
    image: "assets/cruiseImgs/boat7.jpg",
    name: "Mystical Rivers",
    description: "Embark on a journey along mystical rivers: immerse yourself in the allure of ancient civilizations, stunning architecture, and vibrant local cultures.",
    price: 80000,
    location: "Egypt",
    temp: "",
    return: true, 
    length: 11, 
    destinations: ["Cairo", "Luxor", "Aswan", "Kom Ombo"]
  },
  {
    image: "assets/cruiseImgs/boat8.jpg",
    name: "Secluded Retreat",
    description: "Escape to a secluded retreat on our Secluded Retreat cruise. Experience tranquility and relaxation in remote, untouched destinations away from the hustle and bustle.",
    price: 90000,
    location: "Seychelles",
    temp: "",
    return: false, 
    length: 13, 
    destinations: ["Mahé", "La Digue", "Praslin", "Félicité Island"]
  },
  {
    image: "assets/cruiseImgs/boat9.jpg",
    name: "Adventures at Sea",
    description: "Embark on thrilling adventures at sea on our cruise. Dive into exciting water sports, explore hidden coves, and enjoy breathtaking sunsets from the deck.",
    price: 56000,
    location: "Saint Lucia",
    temp: "",
    return: true, 
    length: 9, 
    destinations: ["Castries", "Gros Islet"]
  },
  {
    image: "assets/cruiseImgs/boat10.jpg",
    name: "Culinary Delights",
    description: "Savor exquisite culinary delights on our Culinary Delights cruise. Indulge in gourmet cuisine, wine tasting, and cooking classes as you sail through picturesque coastal towns.",
    price: 34000,
    location: "Greece",
    temp: "",
    return: false, 
    length: 6, 
    destinations: ["Athens", "Mykonos"]
  },
  {
    image: "assets/cruiseImgs/boat12.jpg",
    name: "Riverside Romance",
    description: "Experience riverside romance on our Riverside Romance cruise. Cruise along charming riverside towns, enjoy intimate dinners, and create cherished memories with your loved one.",
    price: 140000,
    location: "Zambezi",
    temp: "",
    return: true, 
    length: 18, 
    destinations: ["Victoria Falls", "Livingstone"]
  },
  {
    image: "assets/cruiseImgs/boat11.jpg",
    name: "Cultural Connections",
    description: "Forge cultural connections on our Cultural Connections cruise. Immerse yourself in local traditions, interact with artisans, and participate in meaningful community experiences.",
    price: 50000,
    location: "Thailand",
    temp: "",
    return: false, 
    length: 8, 
    destinations: ["Bangkok", "Chiang Mai"]
  }
];


// Variables for Sorting & Filtering
let currentFilter = "";
let currentSort = "low to high";




// When doc is ready
$(document).ready(function(){

  console.log("hello")

  // h1-tag that changes when doc is ready (disappears after delay)
  loadingText();
  // logo change upon hover added
  logoHover();

  
  
  //loads cruises
  loadCruises(arrCruises);

  //Loads featured trips on home page
  loadFeaturedTrips(arrCruises);

  
  

});


// function for logo hover
function logoHover() {
  // Logo Image hover
  $(".logo-image").hover(
    function(){
      $(this).attr('src', 'assets/logo2.png');
      $(this).css('position', 'relative');
      $(this).animate({right: '-=25px'});
    },
    function(){
      $(this).attr('src', 'assets/logo.png');
      $(this).css('position', 'relative');
      $(this).animate({right: '0'});
    });
}

// function for making required <h1> tag, "loaderText", change when doc has loaded, 
// also disappears after having been changed from "Loading Opulence..." (index.html:39) to "Welcome to OpalSeas."
function loadingText() {
  $("#loaderText").text("Welcome to OpalSeas.");

  const delay = 1000;
  setTimeout(function() {
    $("#loaderText").remove();
  }, delay);

}



// -------------------------------------------------------------------------------------------------------------------------
// Main load cruises method for trips page
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
      $(currentChild).find(".price").text('R ' + cruise.price);

      // add button index value
      $(currentChild).find(".add-to-trip").attr("data-cruise-index", i);

      // Hide info text until hover
      $(currentChild).find(".card-text-info").hide();

      // Add hover effect to cruise card
      $(currentChild).hover(
          function () { 
              // Toggle image size
              $(this).find(".card-img-top").toggleClass("small-image");
              // Toggle Location text
              //$(this).find(".location").toggle();
              // Toggle card title style
              $(this).find(".card-title").toggleClass("small-title");
              // Toggle Weather Icon
              $(currentChild).find(".weather-icon").toggle();
              
              // Switch description with info-text
              // changes false into no, and true into yes
              let ret = "";
              if(cruise.return){
                ret = "Round trip";
              }else{
                ret = "One way";
              }

              // populates string with all trip data
              let des = "";
              for(let i = 0; i < cruise.destinations.length; i++){
                if(i === (cruise.destinations.length - 1)){
                  des += cruise.destinations[i] + ' ';
                }else{
                  des += cruise.destinations[i] + '; ';
                }
                
              }

              $(currentChild).find(".card-text-info").html(
                '<p> <strong>Port: ' + cruise.location + '</strong></p>' + 
                '<p><strong>(' + ret + ')</strong></p>' + 
                '<p><strong>Duration: </strong>' + cruise.length + ' days </p>' +
                '<p><strong>Destinations (' + cruise.destinations.length + ')</strong>: ' + des + '</p>');
              $(currentChild).find(".card-text-info").toggle();
              $(currentChild).find(".card-text").toggle();

              // toggle button active
              $(currentChild).find(".add-to-trip").toggle();

          }
      );

      // hide weather icon
      $(currentChild).find(".weather-icon").hide();
      $(currentChild).find(".add-to-trip").toggle();
 
  } 
}
// -------------------------------------------------------------------------------------------------------------------------
// END Main load cruises method for trips page




// -------------------------------------------------------------------------------------------------------------------------
// When filter/sort is clicked

//radio clicked
$("input[name='filterRadio']").click(function() {
  currentFilter = $(this).attr('value');
  console.log(currentFilter);
  

  filterSortCruises();
});

//sort clicked
$("input[name='sortRadio']").click(function() {
  currentSort = $(this).attr('value');
  console.log(currentSort);

  filterSortCruises();
});
// END When filter/sort is clicked


// Function for filtering and sorting
function filterSortCruises() {

  // Filter array
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

  loadCruises(filteredSortedArrCruise);

}
// -------------------------------------------------------------------------------------------------------------------------
// END When filter/sort is clicked




// -------------------------------------------------------------------------------------------------------------------------
// Function to load featured trips on the home page
function loadFeaturedTrips(arrCruises) {
  
  // ensures that completely random trips are selected
  let randomTrips = [];
  for(let k = 0; k < 3; k++){
    randomTrips[k] = Math.round(Math.random()*12 + 0);

    while(k > 0 && randomTrips[k] === randomTrips[k-1]){
      randomTrips[k] = Math.round(Math.random()*12 + 0);
    }
  }

  let featuredCruises = [arrCruises[randomTrips[0]], arrCruises[randomTrips[1]], arrCruises[randomTrips[2]]];


  // Clear the container for the featured trips
  $("#featuredTripsContainer").empty();

  // Iterate through the selected featured cruises
  for(let i = 0; i < featuredCruises.length; i++)
  {
    cruise = featuredCruises[i];
    $("#featuredTripsContainer").append($("#cruiseCardTemp").html());

    let currentChild = $("#featuredTripsContainer").children().eq(i);

    // Customize the content of the cloned card to match the featured cruise
    $(currentChild).find("#cruiseImg").attr('src', cruise.image);
    $(currentChild).find(".card-title").text(cruise.name);
    $(currentChild).find(".card-text").text(cruise.description);
    $(currentChild).find(".price").text('R ' + cruise.price);

    // add button index value
    $(currentChild).find(".add-to-trip").attr("data-cruise-index", i);

    



    // Hide info text until hover
    $(currentChild).find(".card-text-info").hide();
    $(currentChild).find("#weather-icon-img").hide();
    $(currentChild).find("#weather-text").hide();

    

    // Add hover effect to cruise card
    $(currentChild).hover(
        function () { 
            // Toggle image size
            $(this).find(".card-img-top").toggleClass("small-image");
            // Toggle Location text
            //$(this).find(".location").toggle();
            // Toggle card title style
            $(this).find(".card-title").toggleClass("small-title");
            
            
            // Switch description with info-text
            // changes false into no, and true into yes
            let ret = "";
            if(cruise.return){
              ret = "Round trip";
            }else{
              ret = "One way";
            }

            // populates string with all trip data
            let des = "";
            for(let j = 0; j < featuredCruises[i].destinations.length; j++){
              if(j === (featuredCruises[i].destinations.length - 1)){
                des += featuredCruises[i].destinations[j] + ' ';
              }else{
                des += featuredCruises[i].destinations[j] + '; ';
              }
              
            }

            $(currentChild).find(".card-text-info").html(
              '<p> <strong>Port: ' + featuredCruises[i].location + '</strong></p>' + 
              '<p><strong>(' + ret + ')</strong></p>' + 
              '<p><strong>Duration: </strong>' + featuredCruises[i].length + ' days </p>' +
              '<p><strong>Destinations (' + featuredCruises[i].destinations.length + ')</strong>: ' + des + '</p>');
            $(currentChild).find(".card-text-info").toggle();
            $(currentChild).find(".card-text").toggle();

            // toggle button active
            $(currentChild).find(".add-to-trip").toggle();
            $(currentChild).find("#weather-text").text("" + featuredCruises[i].temp + "ºC");
            $(currentChild).find("#weather-text").toggle();

        }
    );

    
    $(currentChild).find(".add-to-trip").toggle();

  };

}
// -------------------------------------------------------------------------------------------------------------------------
// END Function to load featured trips on the home page




// Function to update the cart count in the navigation
//sets cart value in local storage, if there is no item stored yet, declare as 0
let cartCount = parseInt(localStorage.getItem("cartCount")) || 0;

//updates cart's nav-link to active if user has added a trip
function updateCartCount() {
  if (cartCount !== 0) {
    $("#cartPage").removeClass("disabled");
    $("#cartPage").text("Cart (" + cartCount + ")");
  }
}


//Add selected cruise object to local storage
$("#containerOfTripCards").on("click", ".add-to-trip", function () {
  // Retrieve the index of the cruise object from the data attribute
  const cruiseIndex = $(this).data("cruise-index");

  // get the corresponding cruise object
  const selectedCruise = arrCruises[cruiseIndex];

  // enable cart nav-link
  cartCount++;
  localStorage.setItem("cartCount", cartCount);
  updateCartCount();

  // cart array to be loaded here with selected cruise


  //user feedback
  alert(`Added "${selectedCruise.name}" to your cart.`);

  
});

//checks if cart should be updated when moving from page
$(".navbar").on("click", "#tripsPage",function() {
  updateCartCount();
});

//updates cart count on new page
updateCartCount();

