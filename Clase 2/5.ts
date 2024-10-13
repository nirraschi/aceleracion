// ### Juego de cartas simple

// ```typescript
// type Suit = "hearts" | "diamonds" | "clubs" | "spades";

// interface Card {
//   value: number;
//   suit: Suit;
// }

// class Deck {
//   private cards: Card[] = [];

//   constructor() {
//     // Implementar: Inicializar la baraja con todas las cartas
//   }

//   shuffle(): void {
//     // Implementar: Mezclar las cartas de la baraja
//   }

//   deal(numCards: number): Card[] {
//     // Implementar: Repartir un número específico de cartas
//   }
// }

// class CardGame {
//   private deck: Deck;
//   private players: Card[][];

//   constructor(numPlayers: number) {
//     this.deck = new Deck();
//     this.players = [];
//     // Implementar: Inicializar el juego
//   }

//   playRound(): string {
//     // Implementar: Jugar una ronda y determinar el ganador
//   }
// }
// ```
//Tipo de una función

type Suit = "hearts" | "diamonds" | "clubs" | "spades";

interface Card {
    value: number;
    suit: Suit;
}

class Deck {
    private cards: Card[] = []; //solo se puede acceder dentro del contexto

    constructor() {
        // Implementar: Inicializar la baraja con todas las cartas
        const suits: Suit[] = ['hearts', 'diamonds', 'clubs', 'spades'];
        const cards: Card[] = []
        suits.forEach((suit) => {
            for(let value = 1; value <= 13; value++) {
                cards.push({value, suit});
            }
            
        })
        this.cards = cards;
    }

    shuffle(): void {
        // Implementar: Mezclar las cartas de la baraja
        for(let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }

    deal(numCards: number): Card[] {
        // Implementar: Repartir un número específico de cartas
    }
}

class CardGame {
    private deck: Deck;
    private players: Card[][];

    constructor(numPlayers: number) {
        this.deck = new Deck();
        this.players = [];
        // Implementar: Inicializar el juego
    }

    playRound(): string {
        // Implementar: Jugar una ronda y determinar el ganador
    }