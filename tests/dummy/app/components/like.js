import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LikeComponent extends Component {
  @tracked isLike = true;

  @action
  likeToogle() {
  	this.isLike = !this.isLike
  }
}
