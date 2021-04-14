import Route from '@ember/routing/route';
// import { action } from '@ember/object';

export default class TasksRoute extends Route {
  model() {
    return this.store.findAll('task');
  }
  // @action
  // do() {
  //   let doneTask = this.set('done', true)
  //   doneTask.save();
  // }
}
