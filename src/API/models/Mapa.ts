import SubMapa from "./Submapa";

export default class Mapa {
  id: string;
  name: string;
  ee: Array<SubMapa>;
  ww: Array<SubMapa>;
  uww: Array<SubMapa>;
  extras: Array<SubMapa>;

  constructor(name: string, easterEgg: Array<SubMapa>, wonderWeapon: Array<SubMapa>, upgradeWonderWeapon: Array<SubMapa>, extras: Array<SubMapa>) {
    this.name = name;
    this.ee = easterEgg;
    this.ww = wonderWeapon;
    this.uww = upgradeWonderWeapon;
    this.extras = extras;
  }
}
