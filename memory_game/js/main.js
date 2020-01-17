const cards = [{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png",
	}, {
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png",
	}, {
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png",
	}, {
		rank: "king",
		suit: "diamonds"
		cardImage: "images/king-of-diamonds.png",
	},];
const cardsInPlay = [];

const checkForMatch = function () {
	if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		alert("You found a match!");
		} else {
  			alert("Sorry, try again.");
	};
};
const flipCard = function() {
	const cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId.cardImage]);
	console.log("User flipped" + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	if (cardsInPlay.length === 2) {
		checkForMatch ();
	} else {
		flipCard ();
	}
};
