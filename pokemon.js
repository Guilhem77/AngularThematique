var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pokemon = /** @class */ (function () {
    function Pokemon(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    return Pokemon;
}());
exports.Pokemon = Pokemon;
var Ability = /** @class */ (function () {
    function Ability() {
    }
    return Ability;
}());
exports.Ability = Ability;
var Move = /** @class */ (function () {
    function Move(name, baseAccuracy, poke) {
        this.name = name;
        if (this instanceof DefensiveMove && poke.abilities.wonderSkin === true)
            this.baseAccuracy = 50;
        else
            this.baseAccuracy = baseAccuracy;
    }
    return Move;
}());
exports.Move = Move;
var OffensiveMove = /** @class */ (function (_super) {
    __extends(OffensiveMove, _super);
    function OffensiveMove(name, baseAccuracy, poke) {
        return _super.call(this, name, baseAccuracy, poke) || this;
    }
    return OffensiveMove;
}(Move));
exports.OffensiveMove = OffensiveMove;
var DefensiveMove = /** @class */ (function (_super) {
    __extends(DefensiveMove, _super);
    function DefensiveMove(name, baseAccuracy, poke) {
        return _super.call(this, name, baseAccuracy, poke) || this;
    }
    return DefensiveMove;
}(Move));
exports.DefensiveMove = DefensiveMove;
var Pikachu = /** @class */ (function (_super) {
    __extends(Pikachu, _super);
    function Pikachu(name) {
        var _this = _super.call(this, name, 70) || this;
        _this.abilities.wonderSkin = true;
        return _this;
    }
    return Pikachu;
}(Pokemon));
exports.Pikachu = Pikachu;
var Rondoudou = /** @class */ (function (_super) {
    __extends(Rondoudou, _super);
    function Rondoudou(name) {
        return _super.call(this, name, 50) || this;
    }
    return Rondoudou;
}(Pokemon));
exports.Rondoudou = Rondoudou;
var Dracofeu = /** @class */ (function (_super) {
    __extends(Dracofeu, _super);
    function Dracofeu(name) {
        return _super.call(this, name, 20) || this;
    }
    return Dracofeu;
}(Pokemon));
exports.Dracofeu = Dracofeu;
function priority(pokeOne, pokeTwo) {
    return pokeOne.speed < pokeTwo.speed ? pokeTwo : pokeOne;
}
exports.priority = priority;
function baseAccuracy(pokeOne, pokeTwo) {
    return pokeOne.currentMove.baseAccuracy < pokeTwo.currentMove.baseAccuracy ? pokeTwo : pokeOne;
}
