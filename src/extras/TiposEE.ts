export enum EETIPOS {
  EASTER_EGG = 0,
  WONDER_WEAPON = 1,
  UPGRADE_WONDER_WEAPON = 2,
  EXTRAS = 3
}

export function convertEE(tipo: string): EETIPOS {
  switch (tipo) {
    case "ee":
      return EETIPOS.EASTER_EGG;
    case "ww":
      return EETIPOS.WONDER_WEAPON;
    case "uww":
      return EETIPOS.UPGRADE_WONDER_WEAPON;
    case "extras":
      return EETIPOS.EXTRAS;
    default:
      return EETIPOS.EASTER_EGG;
  }
}

export function convertToName(tipo: EETIPOS): string {
  switch (tipo) {
    case 0:
      return "Easter Egg"
    case 1:
      return "Wonder Weapon"
    case 2:
      return "Upgrade Wonder Weapon"
    case 3:
      return "Extras"
    default:
      return "Easter Egg"
  }
}

export function convertToShortName(tipo: EETIPOS): string{
  switch (tipo) {
    case 0:
      return "ee"
    case 1:
      return "ww"
    case 2:
      return "uww"
    case 3:
      return "Extras"
    default:
      return "ee"
  }
}
