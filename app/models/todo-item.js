import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  group: DS.belongsTo('todo-group')
});
