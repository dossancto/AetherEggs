"use strict";
exports.__esModule = true;
exports.convertToShortName = exports.convertToName = exports.convertEE = exports.EETIPOS = void 0;
var EETIPOS;
(function (EETIPOS) {
    EETIPOS[EETIPOS["EASTER_EGG"] = 0] = "EASTER_EGG";
    EETIPOS[EETIPOS["WONDER_WEAPON"] = 1] = "WONDER_WEAPON";
    EETIPOS[EETIPOS["UPGRADE_WONDER_WEAPON"] = 2] = "UPGRADE_WONDER_WEAPON";
    EETIPOS[EETIPOS["EXTRAS"] = 3] = "EXTRAS";
    EETIPOS[EETIPOS["NONE"] = 4] = "NONE";
})(EETIPOS = exports.EETIPOS || (exports.EETIPOS = {}));
function convertEE(tipo) {
    switch (tipo) {
        case "ee":
            return EETIPOS.EASTER_EGG;
        case "ww": return EETIPOS.WONDER_WEAPON;
        case "uww":
            return EETIPOS.UPGRADE_WONDER_WEAPON;
        case "extras":
            return EETIPOS.EXTRAS;
        default:
            return EETIPOS.NONE;
    }
}
exports.convertEE = convertEE;
function convertToName(tipo) {
    switch (tipo) {
        case 0:
            return "Easter Egg";
        case 1:
            return "Wonder Weapon";
        case 2:
            return "Upgrade Wonder Weapon";
        case 3:
            return "Extras";
        default:
            return "Não definido";
    }
}
exports.convertToName = convertToName;
function convertToShortName(tipo) {
    switch (tipo) {
        case 0:
            return "ee";
        case 1:
            return "ww";
        case 2:
            return "uww";
        case 3:
            return "extras";
        default:
            return "none";
    }
}
exports.convertToShortName = convertToShortName;
