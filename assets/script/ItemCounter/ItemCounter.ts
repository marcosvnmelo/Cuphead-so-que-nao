// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default abstract class ItemCounter extends cc.Component {
  protected count: number;
  protected abstract max: number;

  public get isFull() {
    return this.max != Infinity && this.count == this.max;
  }

  public abstract decrease(): void;
  public abstract increase(): void;
}
