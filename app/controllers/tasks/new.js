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


// Todos.TodosController = Ember.ArrayController.extend({
//   actions: {
//     createTodo: function() {
//       // Get the todo title set by the "New Todo" text field
//       var title = this.get('newTitle');
//       if (!title.trim()) { return; }

//       // Create the new Todo model
//       var todo = this.store.createRecord('todo', {
//         title: title,
//         isCompleted: false
//       });

//       // Clear the "New Todo" text field
//       this.set('newTitle', '');

//       // Save the new model
//       todo.save();
//     }
//   }
// });