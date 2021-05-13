// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default abstract class Actor extends cc.Component {
  protected _isJumping: boolean = false;

  public get isJumping(): boolean {
    return this._isJumping;
  }

  public set isJumping(value: boolean) {
    this._isJumping = value;
  }

  get isInTheFloor(): boolean {
    return this.rigidBody.linearVelocity.y === 0 && !this.isJumping;
  }

  @property(cc.Float)
  jumpForce: number = 0;

  @property(cc.Float)
  walkForce: number = 0;

  @property(cc.Float)
  maxSpeed: number = 0;

  rigidBody: cc.RigidBody;

  // LIFE-CYCLE CALLBACKS:

  public onLoad() {
    this.rigidBody = this.getComponent(cc.RigidBody);
  }

  // update(dt) {}
}
