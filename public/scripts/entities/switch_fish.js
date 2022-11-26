class SwitchFish extends Fish {

  constructor(options) {
    super(options);
    this.imageUri = '/images/switch-fish.png';
    this.width = 90;
  }

  onClick(event) {
    this.makeNewVelocity(50);
  }
}
