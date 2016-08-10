import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addItem(group, formValues) {
      const newItem = this.store.createRecord('todo-item', formValues);
      newItem.set('group', group);

      newItem.save;
    }
  }
});
