// @ts-nocheck
import Phaser from "phaser";
export default class AvarageGame extends Phaser.Scene {
  constructor() {
    super("Avarage-Game");
  }
  init() {
    this.nav_left = false;
    this.nav_right = false;
    this.shoot = false;
  }
  preload() {
    this.load.image("background", "image/SKY.png");
    this.load.image("shoot-btn", "image/On Off Square Button.png");
    this.load.image("left-btn", "image/Back Square Button.png");
    this.load.image("right-btn", "image/ Next Square Button.png");
  }
  create() {
    const gameWidth = this.scale.width * 0.5;
    const gameHeight = this.scale.height * 0.5;
    this.add.image(gameWidth, gameHeight, "background");

    this.createButton();
  }
  update(time) {}
  createButton() {
    this.input.addPointer(3);

    let shoot = this.add
      .image(290, 550, "shoot-btn")
      .setInteractive()
      .setDepth(0.5)
      .setScale(0.3)
      .setAlpha(0.8);
      

    let nav_left = this.add
      .image(190, 550, "left-btn")
      .setInteractive()
      .setDepth(0.5)
      .setScale(0.3)
      .setAlpha(0.8);

    let nav_right = this.add
      .image(nav_left.x + nav_left.displayWidth + 20, 20, "right-btn")
      .setInteractive()
      .setDepth(0.5)
      .setScale(0.5)
      .setAlpha(0.8);

    nav_left.on(
      "pointerdown",
      () => {
        this.nav_left = true;
      },
      this
    );
    nav_left.on(
      "pointerout",
      () => {
        this.nav_left = false;
      },
      this
    );

    this_right.on(
      "pointerdown",
      () => {
        this.nav_right = true;
      },
      this
    );

    this_right.on(
      "pointerout",
      () => {
        this.nav_right = false;
      },
      this
    );

    shoot.on(
      "pointerdown",
      () => {
        this.shoot = true;
      },
      this
    );

    shoot.on(
      "pointerout",
      () => {
        this.shoot = false;
      },
      this
    );
  }
}
