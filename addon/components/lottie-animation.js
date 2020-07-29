import Component from '@glimmer/component';
import { action } from '@ember/object';
import { isPresent } from '@ember/utils';

export default class LottieAnimationComponent extends Component {
  defaultSpeed = 1;

  @action
  async doAnimation(element) {
    this.animation = await import('lottie-web').then((module) => module.default).then((lottie) => {
      const animation = lottie.loadAnimation({
        container: element,
        renderer: 'svg',
        loop: this.args.loop || false,
        autoplay: this.args.autoplay || false,
        path: this.args.path
      });

      animation.setSpeed(this.args.speed || this.defaultSpeed);
      return animation;
    });
  }
}
