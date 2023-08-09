// cruise array
const arrCruises = [
    {
      image: "assets/boat1.jpg",
      name: "Luxury Oasis",
      description: "Experience the ultimate in luxury and relaxation on our Luxury Oasis cruise. Sail through crystal-clear waters, enjoy gourmet dining, and indulge in world-class spa treatments.",
      price: 32000
    },
    {
      image: "assets/boat1.jpg",
      name: "Tropical Paradise",
      description: "Escape to a tropical paradise on our Tropical Paradise cruise. Discover pristine beaches, vibrant coral reefs, and thrilling water sports for an unforgettable adventure.",
      price: 54000
    },
    {
      image: "assets/boat1.jpg",
      name: "Majestic Fjords",
      description: "Explore the breathtaking fjords and majestic landscapes on our Majestic Fjords cruise. Immerse yourself in the natural beauty and serene tranquility of these remarkable wonders.",
      price: 67000
    },
    {
      image: "assets/boat1.jpg",
      name: "Cultural Odyssey",
      description: "Embark on a cultural odyssey on our Cultural Odyssey cruise. Delve into the rich history, art, and traditions of diverse cultures as you journey through enchanting cities.",
      price: 87000
    },
    {
      image: "assets/boat1.jpg",
      name: "Polar Expedition",
      description: "Experience the thrill of a polar expedition on our Polar Expedition cruise. Witness stunning icebergs, encounter Arctic wildlife, and marvel at the vast, untouched landscapes.",
      price: 172000
    },
    {
      image: "assets/boat1.jpg",
      name: "Enchanted Islands",
      description: "Discover the magic of the Enchanted Islands on our cruise. Encounter unique wildlife, pristine beaches, and captivating volcanic landscapes in this natural paradise.",
      price: 24000
    },
    {
      image: "assets/boat1.jpg",
      name: "Mystical Rivers",
      description: "Embark on a journey along mystical rivers on our Mystical Rivers cruise. Immerse yourself in the allure of ancient civilizations, stunning architecture, and vibrant local cultures.",
      price: 80000
    },
    {
      image: "assets/boat1.jpg",
      name: "Secluded Retreat",
      description: "Escape to a secluded retreat on our Secluded Retreat cruise. Experience tranquility and relaxation in remote, untouched destinations away from the hustle and bustle.",
      price: 90000
    },
    {
      image: "assets/boat1.jpg",
      name: "Adventures at Sea",
      description: "Embark on thrilling adventures at sea on our cruise. Dive into exciting water sports, explore hidden coves, and enjoy breathtaking sunsets from the deck.",
      price: 56000
    },
    {
      image: "assets/boat1.jpg",
      name: "Culinary Delights",
      description: "Savor exquisite culinary delights on our Culinary Delights cruise. Indulge in gourmet cuisine, wine tasting, and cooking classes as you sail through picturesque coastal towns.",
      price: 34000
    },
    {
      image: "assets/boat1.jpg",
      name: "Riverside Romance",
      description: "Experience riverside romance on our Riverside Romance cruise. Cruise along charming riverside towns, enjoy intimate dinners, and create cherished memories with your loved one.",
      price: 140000
    },
    {
      image: "assets/boat1.jpg",
      name: "Cultural Connections",
      description: "Forge cultural connections on our Cultural Connections cruise. Immerse yourself in local traditions, interact with artisans, and participate in meaningful community experiences.",
      price: 50000
    }
  ];



// doc ready
$(document).ready(function(){

    console.log("hello")
    loadCruises();

});


// load cruises method
function loadCruises() {
    for(let i = 0; i < arrCruises.length; i++){

        const cruise = arrCruises[i];

        $("#cruiseContainer").append($("#cruiseCardTemp").html());

        let currentChild = $("#cruiseContainer").children().eq(i+1);

        $(currentChild).find("#cruiseImg").attr('src', cruise.image);
        $(currentChild).find(".card-title").text(cruise.name);
        $(currentChild).find(".card-text").text(cruise.description);
        $(currentChild).find(".price").text('R' + cruise.price);


    }
}