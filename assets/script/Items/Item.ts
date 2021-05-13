// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ItemCounter from '../ItemCounter/ItemCounter';
import COLLISION_TAGS from './COLLISION_TAGS';

const { ccclass, property } = cc._decorator;

@ccclass
export default abstract class Item extends cc.Component {
  protected collisionBox: cc.BoxCollider;

  protected itemCounter: ItemCounter;

  @property
  counterName: string = '';

  onCollisionEnter(other: cc.BoxCollider, _self: cc.BoxCollider) {
    if (other.tag == COLLISION_TAGS.PLAYER && !this.itemCounter.isFull) {
      this.itemCounter.increase();
      this.node.destroy();
    }
  }

  // LIFE-CYCLE CALLBACKS:

  public onLoad() {
    this.collisionBox = this.node.getComponent(cc.BoxCollider);
    this.itemCounter = cc
      .find('Canvas/' + this.counterName)
      .getComponent(ItemCounter);
  }

  start() {}

  // update (dt) {}
}
