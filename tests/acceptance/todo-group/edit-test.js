import { test } from 'qunit';
import moduleForAcceptance from 'todo-groups/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | todo group/edit');

test('user can edit title of selected todo-group', function(assert) {
  server.createList('todo-group', 4);
  visit('/todo-groups');

  click('.edit-btn:eq(3)');

  andThen(function() {
    assert.equal(currentRouteName(), 'todo-group.edit',
    'Clicking on the fourth element with the class "edit-btn" should redirect to the route "todo-group.edit"');
    assert.equal(currentURL(), '/todo-groups/4/edit',
      'Clicking on the fourth element with the class "edit-btn" should redirect to the URL "/todo-groups/3/edit"');
  });
});

test('user can navigate back to index without making changes', function(assert) {
  visit('/todo-groups')

  andThen(function() {

  });
});
