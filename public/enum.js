"use strict";
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Yellow"] = "Yellow";
    Color["Green"] = "Green";
})(Color || (Color = {}));
const trafficLight = (color) => {
    switch (color) {
        case Color.Red:
            console.log('du måste stanna"');
            break;
        case Color.Yellow:
            console.log('Kör om du inte hinner stanna!');
            break;
        case Color.Green:
            console.log('kör så det ryker!');
            break;
    }
};
