// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Actor from '../Actor';
import DIRECTION, { DIRECTIONS } from '../DIRECTION';
import PLAYER_STATE from './PLAYER_STATE';

const { ccclass, property } = cc._decorator;

@ccclass
export default class Cuphead extends Actor {
  @property(cc.Prefab)
  public LandingDust: cc.Prefab = null;

  private _state: PLAYER_STATE = PLAYER_STATE.IDLE;
  private facing: DIRECTION = DIRECTIONS.RIGHT;

  public get state() {
    return this._state;
  }

  public set state(newState: PLAYER_STATE) {
    if (newState != this._state) {
      this.getComponent(cc.Animation).play(PLAYER_STATE[newState]);
      this._state = newState;
    }
  }

  public get isJumping() {
    return this._isJumping;
  }

  public set isJumping(value: boolean) {
    if (!value && this.state === PLAYER_STATE.JUMPING) {
      this.state = PLAYER_STATE.IDLE;
    }
    this._isJumping = value;
  }

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  start() {}

  public jump() {
    if (this.isInTheFloor) {
      this.state = PLAYER_STATE.JUMPING;
      this.isJumping = true;
      this.rigidBody.applyForceToCenter(cc.v2(0, this.jumpForce), true);
    }
  }

  private movePlayer(direction: DIRECTION) {
    if (
      Math.abs(this.rigidBody.linearVelocity.x) < this.maxSpeed &&
      Math.abs(this.rigidBody.linearVelocity.y) < this.maxSpeed
    ) {
      this.rigidBody.applyForceToCenter(
        cc.v2(direction.x * this.walkForce, direction.y * this.walkForce),
        true
      );
    }
  }

  public move(direction: DIRECTION) {
    this.movePlayer(direction);
    if (direction != this.facing) {
      this.reface(direction);
    } else {
      if (!this.isJumping) {
        this.state = PLAYER_STATE.RUNNING;
      }
    }
  }

  reface(direction: DIRECTION) {
    this.node.scaleX *= -1;
    this.facing = direction;
  }

  onBeginContact(
    contact: any,
    selfCollider: cc.Collider,
    otherCollider: cc.Collider
  ) {
    if (selfCollider.tag == 2 && this.isJumping) {
      this.isJumping = false;
      const particulas = cc.instantiate(this.LandingDust);
      particulas.x = this.node.x;
      particulas.y = this.node.y - 30;
      this.node.getParent().addChild(particulas);
    }
  }

  update(_dt: number) {
    if (
      this.rigidBody.linearVelocity.x === 0 &&
      this.rigidBody.linearVelocity.y === 0 &&
      !this.isJumping
    ) {
      this.state = PLAYER_STATE.IDLE;
    }
  }
}
