// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ItemCounter from './ItemCounter';

const { ccclass, property } = cc._decorator;

@ccclass
export default class HeartCounter extends ItemCounter {
  max = 3;

  @property(cc.SpriteFrame)
  heartSprite: cc.SpriteFrame = null;

  increase(): void {
    if (this.count <= this.max) {
      this.count++;
      this.setHeartsOnScreen(this.count);
    }
  }

  decrease(): void {}

  setHeartsOnScreen(numberOfHearts: number) {
    for (let i = 0; i < 3; i++) {
      this.node.getChildByName('' + i).getComponent(cc.Sprite).spriteFrame =
        null;
    }

    for (let i = 0; i < numberOfHearts; i++) {
      this.node.getChildByName('' + i).getComponent(cc.Sprite).spriteFrame =
        this.heartSprite;
    }
  }

  // LIFE-CYCLE CALLBACKS:

  public onLoad() {
    this.count = 2;
    this.setHeartsOnScreen(this.count);
  }

  start() {}

  // update (dt) {}
}
