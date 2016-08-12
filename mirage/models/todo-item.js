import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  title:
  group: belongsTo('todo-group')
});
