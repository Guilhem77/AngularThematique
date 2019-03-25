class Pokemon {
  public name: string;
  public speed: number;
  public abilities: Ability;
  public currentMove: Move;

  constructor(name: string, speed: number) {
    this.name = name
    this.speed = speed
  }
}
exports.Pokemon = Pokemon;

class Ability {
  public wonderSkin : boolean
}
exports.Ability = Ability;

class Move {
  public name: string
  public baseAccuracy: number

  constructor(name: string, baseAccuracy: number, poke: Pokemon) {
    this.name = name
    if(this instanceof DefensiveMove && poke.abilities.wonderSkin === true)
      this.baseAccuracy = 50;
    else
      this.baseAccuracy = baseAccuracy
  }
}
exports.Move = Move;

class OffensiveMove extends Move {
  constructor(name: string, baseAccuracy: number, poke: Pokemon) {
    super(name, baseAccuracy, poke)
  }
}
exports.OffensiveMove = OffensiveMove;

class DefensiveMove extends Move {
  constructor(name: string, baseAccuracy: number, poke: Pokemon) {
    super(name, baseAccuracy, poke)
  }
}
exports.DefensiveMove = DefensiveMove;

class Pikachu extends Pokemon {
  constructor(name: string) {
    super(name, 70);
    this.abilities.wonderSkin = true;
  }
}
exports.Pikachu = Pikachu

class Rondoudou extends Pokemon {
  constructor(name: string) {
    super(name, 50);
  }
}
exports.Rondoudou = Rondoudou

class Dracofeu extends Pokemon {
  constructor(name: string) {
    super(name, 20);
  }
}
exports.Dracofeu = Dracofeu

function priority(pokeOne: Pokemon, pokeTwo: Pokemon) {
  return pokeOne.speed < pokeTwo.speed ? pokeTwo : pokeOne;
}
exports.priority = priority

function baseAccuracy(pokeOne: Pokemon, pokeTwo: Pokemon) {
  return pokeOne.currentMove.baseAccuracy < pokeTwo.currentMove.baseAccuracy ? pokeTwo : pokeOne
}
