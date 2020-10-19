$(document).ready(function(){
var cardType = parseInt(prompt("Enter the type of playing card you want(Club-1, Diamond-2, Heart-3, Spade-4):"));
console.log(cardType);

// if (cardType == 1) {
//   console.log("Clubs");
// } else if (cardType == 2) {
//   console.log("diamonds");
// } else if (cardType == 3) {
//   console.log("Hearts");
// } else if (cardType == 4) {
//   console.log("Spades");
// } else {
//   alert("Please enter numbers between 1 and 4");
// }

// control statement
var i,j;
var cardArray = ['j','q','k','a'];
switch (cardType) {
  case 1: {
            console.log("Clubs");
            $('#playCardHeading').text('Clubs');
            for (i = 2; i <= 10; i++) {
              $('#result').append('<img class="m-auto d-block col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 p-4 img-thumbnail" src="PNG/' + i + 'c.png" alt="Clubs"/>')
            }
            for (j = 0; j < cardArray.length; j++){
              $('#result').append('<img class="m-auto d-block col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 p-4 img-thumbnail" src="PNG/' + cardArray[j] + 'c.png" alt="Clubs"/>')
            }
            break; //break the flow of execution and go out of switch structure
          }

  case 2: {
            console.log("diamonds");
            $('#playCardHeading').text('Diamonds');
            for (i = 2; i <= 10; i++) {
              $('#result').append('<img class="m-auto d-block col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 p-4 img-thumbnail" src="PNG/' + i + 'd.png" alt="Diamonds"/>')
            }
            for (j = 0; j < cardArray.length; j++){
              $('#result').append('<img class="m-auto d-block col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 p-4 img-thumbnail" src="PNG/' + cardArray[j] + 'd.png" alt="Diamonds"/>')
            }
            break;
          }

  case 3: {
            console.log("Hearts");
            $('#playCardHeading').text('Hearts');
            for (i = 2; i <= 10; i++) {
              $('#result').append('<img class="m-auto d-block col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 p-4 img-thumbnail" src="PNG/' + i + 'h.png" alt="Hearts"/>')
            }
            for (j = 0; j < cardArray.length; j++){
              $('#result').append('<img class="m-auto d-block col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 p-4 img-thumbnail" src="PNG/' + cardArray[j] + 'h.png" alt="Hearts"/>')
            }
            break;
          }
  case 4: {
            console.log("Spades");
            $('#playCardHeading').text('Spades');
            for (i = 2; i <= 10; i++) {
              $('#result').append('<img class="m-auto d-block col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 p-4 img-thumbnail" src="PNG/' + i + 's.png" alt="Spades"/>')
            }
            for (j = 0; j < cardArray.length; j++){
              $('#result').append('<img class="m-auto d-block col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 p-4 img-thumbnail" src="PNG/' + cardArray[j] + 's.png" alt="Spades"/>')
            }
            break;
          }
  default : {
            alert("Please enter numbers between 1 and 4");
            break;
          }

} //end of switch

}); //document.ready()
