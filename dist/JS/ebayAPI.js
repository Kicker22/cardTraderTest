


// UI vars
const searchBtn = document.querySelector('.btn')

loadEventListeners();

function loadEventListeners(){
  searchBtn.addEventListener('click',searchOnSubmit)
}


function searchOnSubmit(e){
  e.preventDefault();

 searchEbayAPI();
}






function searchEbayAPI() {

  let formData = document.getElementById('cardName').value;
  let queryURL =
  "https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=MatthewS-CardCole-PRD-f69eabc60-cdbe5730&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords="+formData;
  
  function Player_Card(
    cardName,
    cardImg,
    cardConvertedCost,
    cardLocation,
    goToItem
  ) {
    this.name = cardName;
    this.img = cardImg;
    this.cost = cardConvertedCost;
    this.location = cardLocation;
    this.itemURL = goToItem;
  }

  axios
    .get("https://cors-anywhere.herokuapp.com/" + queryURL)
    .then(function(response) {
      let item = " ";

      // loop through response and pull 4 results for searched term
      for (i = 0; i < 4; i++) {
        let searchedItem =
          response.data.findItemsByKeywordsResponse[0].searchResult[0].item[i];
        item = searchedItem;

        // card var's
        let card_Name = item.title[0];
        let card_Img = item.galleryURL[0];
        let card_Cost =
          item.sellingStatus[0].convertedCurrentPrice[0].__value__;
        let card_location = item.location[0];
        let item_URL = item.viewItemURL[0];
        let card_condition = item.condition[0].conditionDisplayName[0];
        console.log(item);

        // create new card object using Card_results constructor
        const cardResults = new Player_Card(
          card_Name,
          card_Img,
          card_Cost,
          card_location,
          item_URL
        );
        console.log(cardResults);

        // create a div to use as card
        const div1 = document.createElement("div");
        // add classes to the div
        div1.classList.add("card", "queryResults");
        // append div1 to pre-existing results div found within index.html
        document.getElementById("results").prepend(div1);

        // creating img element for the card
        const cardImg = document.createElement("img");
        // adding class to cardImg
        cardImg.classList.add("card-img-top");
        // adding src of img to cardImg
        cardImg.src = card_Img;
        // append card img to div1 as child
        div1.appendChild(cardImg);

        // create the card body
        const cardBody = document.createElement("div");
        cardBody.classList.add("card_body");
        div1.appendChild(cardBody);

        // adding header for card title
        const cardTitle = document.createElement("h5");
        // adding class to header
        cardTitle.classList.add("card_header", "text-center");
        // creating text node for header
        const titleText = document.createTextNode(card_Name);
        cardTitle.appendChild(titleText);
        // append card title to card div
        cardBody.appendChild(cardTitle);

        // creats button for card
        const cardButton = document.createElement("a");
        // adding href to link
        cardButton.href = item_URL;

        // open link in new page
        cardButton.target = 'blank'
        // add bootstrap classes to button
        cardButton.classList.add("card_button", "btn", "btn-primary");
        // add text to the button
        cardButton.innerText = "Go to card";
        // add button to cardBody
        cardBody.appendChild(cardButton);

        // display listing price for card on ebay
        const cardPrice = document.createElement("div");
        // add class to cardPrice div
        cardPrice.classList.add("card_price");
        // add card text === card price
        cardPrice.innerText = "$" + card_Cost;
        cardBody.appendChild(cardPrice);

        //  card conition on card
        const cardCondition = document.createElement("div");
        // add class
        cardCondition.classList.add("card_condition");
        // add text to conditon div
        cardCondition.innerText = card_condition;
        cardBody.appendChild(cardCondition);

        // add card location to card
        const itemLocation = document.createElement("div");
        // add class to itemLocation div
        itemLocation.classList.add("card_location");
        // add text to card location
        itemLocation.innerText = card_location;
        cardBody.appendChild(itemLocation);
      }
    });
}
