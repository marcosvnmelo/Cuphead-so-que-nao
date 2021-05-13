// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Item from '../../script/Items/Item';
import FrogCounter from '../ItemCounter/FrogCounter';

const { ccclass, property } = cc._decorator;

@ccclass
export default class Frog extends Item {
  itemCounter: FrogCounter;

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  start() {}

  // update (dt) {}
}
