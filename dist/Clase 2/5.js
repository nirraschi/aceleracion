"use strict";
// ### Juego de cartas simple
class Deck {
    constructor() {
        this.cards = []; //solo se puede acceder dentro del contexto
        // Implementar: Inicializar la baraja con todas las cartas
        const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
        const cards = [];
        suits.forEach((suit) => {
            for (let value = 1; value <= 13; value++) {
                cards.push({ value, suit });
            }
        });
        this.cards = cards;
        this.shuffle();
    }
    shuffle() {
        // Implementar: Mezclar las cartas de la baraja
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
    deal(numCards) {
        // Implementar: Repartir un número específico de cartas
        if (numCards > this.cards.length) {
            throw new Error('No hay suficientes cartas en la baraja');
        }
        return this.cards.splice(0, numCards); //splice devuelve un array con las cartas que se han quitado
    }
}
class CardGame {
    constructor(numPlayers) {
        this.deck = new Deck();
        this.players = Array.from({ length: numPlayers }, () => []);
        this.players.forEach((player, index) => {
            this.players[index] = this.deck.deal(5);
        });
    }
    showHands() {
        return this.players;
    }
    playRound() {
        let highestCard = null;
        let winningPlayer = -1;
        this.players.forEach((player, index) => {
            const playerCard = player.pop(); // Cada jugador juega su última carta
            if (playerCard) {
                console.log(`Jugador ${index + 1} juega ${playerCard.value} de ${playerCard.suit}`);
                if (!highestCard || playerCard.value > highestCard.value) {
                    highestCard = playerCard;
                    winningPlayer = index;
                }
            }
        });
        return `¡El jugador ${winningPlayer + 1} gana esta ronda con la carta ${highestCard === null || highestCard === void 0 ? void 0 : highestCard.value} de ${highestCard === null || highestCard === void 0 ? void 0 : highestCard.suit}!`;
    }
}
const game = new CardGame(2);
console.log(game.showHands());
