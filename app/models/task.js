import Model, { attr } from '@ember-data/model';

export default class TaskModel extends Model {
  @attr title;
  @attr deadline;
  @attr done;
}
