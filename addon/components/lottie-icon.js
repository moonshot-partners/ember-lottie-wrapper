import Component from '@glimmer/component';
import { action } from '@ember/object';
import { isPresent } from '@ember/utils';

export default class LottieIconComponent extends Component {
  defaultSpeed = 1;
  defaultTotalFrames = 0;

  get totalFrames() {
    return this.args.totalFrames || this.defaultTotalFrames;
  }

  get animationSpeed() {
    return this.args.speed || this.defaultSpeed;
  }

  @action
  async doAnimation(element) {
    this.animation = await import('lottie-web').then((module) => module.default).then((lottie) => {
      const animation = lottie.loadAnimation({
        container: element,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: this.args.path
      });

      if (this.args.direction) {
        animation.goToAndStop(this.totalFrames, true);
      }

      animation.setSpeed(this.animationSpeed);
      return animation;
    });
  }

  @action
  click(direction) {
    if (isPresent(this.animation)) {
      this.animation.setDirection(direction);
      this.animation.play();
    }
  }
}
