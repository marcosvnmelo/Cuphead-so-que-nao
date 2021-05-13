// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import COLLISION_TAGS from './Items/COLLISION_TAGS';

const { ccclass, property } = cc._decorator;

@ccclass
export default class Camera extends cc.Component {
  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  // start() {}

  // update (dt) {}

  onCollisionStay(other: cc.BoxCollider, _self: cc.BoxCollider) {
    if (other.tag == COLLISION_TAGS.PLAYER && this.node.x <= 388) {
      this.node.x += 3;
      this.node.getChildByName('NoBack').x = -474;
      this.node.getChildByName('NoForward').x = 474;
    }
  }
}
