import { test } from 'qunit';
import moduleForAcceptance from 'todo-groups/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | todo group/edit');

test('visiting /todo-group/edit', function(assert) {
  visit('/todo-group/edit');

  andThen(function() {
    assert.equal(currentURL(), '/todo-group/edit');
  });
});
