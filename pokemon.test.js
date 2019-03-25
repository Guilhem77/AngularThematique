const pokemon = require('./pokemon');
const {Pikachu} = require('./pokemon');
const {Dracofeu} = require('./pokemon');
const {Rondoudou} = require('./pokemon');
const {priority} = require('./pokemon');
const {Move} = require('./pokemon');
const {DefensiveMove} = require('./pokemon');
const {OffensiveMove} = require('./pokemon');
const {Ability} = require('./pokemon');

describe('pokemonPriority',() => {
  it('Should return PikaPika as first attacking Pokemon',() => {
    let drac = new Dracofeu('Dracofeu')
    let pika = new Pikachu("PikaPika")
    expect(priority(drac, pika)).toBe(pika);
  })

  it('Should return Rondoudou as first attacking Pokemon',() => {
    let drac = new Dracofeu('Dracofeu')
    let rond = new Rondoudou("Rondoudou")
    expect(priority(drac, rond)).toBe(rond);
  })
});

describe('pokemonBaseAccuracy',() => {
  it('Should return PikaPika as highest base accuracy',() => {
    let drac = new Dracofeu('Dracofeu')
    let pika = new Pikachu("PikaPika")

    drac.currentMove = new OffensiveMove('Crache du feu', 30, drac)
    pika.currentMove = new DefensiveMove('Se cache comme un lâche', 30, pika)
    expect(baseAccuracy(drac, pika)).toBe(pika);
  })

  it('Should return Dracofeu as highest base accuracy',() => {
    let drac = new Dracofeu('Dracofeu')
    let pika = new Pikachu("PikaPika")

    drac.currentMove = new OffensiveMove('Crache du feu', 30, drac)
    pika.currentMove = new OffensiveMove('Essaye de faire pareil', 10, pika)
    expect(baseAccuracy(drac, pika)).toBe(drac);
  })
});
