// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Item from '../../script/Items/Item';
import HeartCounter from '../ItemCounter/HeartCounter';

const { ccclass, property } = cc._decorator;

@ccclass
export default class Heart extends Item {
  itemCounter: HeartCounter;

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  start() {}

  // update (dt) {}
}
