// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ItemCounter from './ItemCounter';

const { ccclass, property } = cc._decorator;

@ccclass
export default class SharkCounter extends ItemCounter {
  max = Infinity;
  private sharkLabel: cc.Label;

  public increase(): void {
    if (this.count <= this.max) {
      this.count++;
      this.sharkLabel.string = 'x ' + this.count;
    }
  }

  public decrease(): void {}

  // LIFE-CYCLE CALLBACKS:

  public onLoad() {
    this.count = 0;
    this.sharkLabel = this.node.getChildByName('Label').getComponent(cc.Label);
    this.sharkLabel.string = 'x ' + this.count;
  }

  start() {}

  // update (dt) {}
}
