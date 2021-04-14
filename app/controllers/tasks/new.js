import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class TasksNewController extends Controller {
  @action
  addTask() {
    let self = this;
    let newTask = this.store.createRecord('task', {
      title: this.title,
      deadline: this.deadline
    });

    newTask.save();

    self.transitionToRoute('tasks');
  }
}
