function labelHand (hand) {

	function pairing (cards) {
		var counts = {};
		for (var i = 0; i < cards.length; i++) {
			var card = cards[i];
			if (card in counts) {
				counts[card]++;
			}else{
				counts[card] = 1;
			}
		}
		return counts;
	}

	function isFlush(cards) {
		cards = cards.split(" ");
		var suit = cards[0][1];
		for (var i = 1; i < cards.length; i++) {
			if (cards[i][1] != suit) {
				return false;
			}
		}
		return true;
	}

	function isStraight(cards) {
		if (cards[4] == 14) {
			if (cards[3] == 5) { 
				return true; 
			}
			else if(cards[0] == 10) { 
				return true; 
			}
		}
		return cards[4] - cards[0] == 4;
	}

	function formatHand (hand) {
		var cards = hand.split(" ");
		var results = [];
		for (var i = 0; i < cards.length; i++) {
			var card = cards[i][0];
			if (card === "T") { results.push(10); }
			else if (card === "J") { results.push(11); }
			else if (card === "Q") { results.push(12); }
			else if (card === "K") { results.push(13); }
			else if (card === "A") { results.push(14); }
			else { results.push(card); }

		}
		results = results.sort(function(a,b){ return a - b; });
		return results;
	}

	var flush = isFlush(hand);
	var cards = formatHand(hand);
	var straight = false;
	var pairedCards = pairing(cards);
	if (Object.keys(pairedCards).length == 5) {
		straight = isStraight(cards);
	} 
	if ( flush && straight ) { return "Straight Flush"; }
	else if (flush) { return "Flush"; }
	else if (straight) { return "Straight"; }
	else { return pairedCards ;}
	
}

function randomHand () {
	var suits = Math.random.floor() * 4;
}





var hand = '3D 4C 5S 6H 7D';
var suits = ['D', 'S', 'H', 'C'];
var vals = [2,3,4,5,6,7,8,9,'T','J','Q','K','A'];


var results = labelHand(hand);
if (typeof results == 'object') {
	for (var k in results) {
		show(k + ": " + results[k]);
	}
}
else {show(results);}

// var results = pairing(hand);
// for (var k in results) {
// 	show(k + ": " + results[k]);
// }
