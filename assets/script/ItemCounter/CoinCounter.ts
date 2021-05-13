// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ItemCounter from './ItemCounter';

const { ccclass, property } = cc._decorator;

@ccclass
export default class CoinCounter extends ItemCounter {
  max = Infinity;
  private coinLabel: cc.Label;

  public increase(): void {
    if (this.count <= this.max) {
      this.count++;
      this.coinLabel.string = 'x ' + this.count;
    }
  }

  public decrease(): void {}

  // LIFE-CYCLE CALLBACKS:

  public onLoad() {
    this.count = 0;
    this.coinLabel = this.node.getChildByName('Label').getComponent(cc.Label);
    this.coinLabel.string = 'x ' + this.count;
  }

  start() {}

  // update (dt) {}
}
