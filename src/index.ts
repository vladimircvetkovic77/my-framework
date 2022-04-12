import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const root = document.getElementById('root')
if (root) {
      const user = User.buildUser({ name: 'Ljiljana', age: 20 })
      const userEdit = new UserEdit(
            root,
            user
      );

      userEdit.render();
} else {
      throw new Error('No root element found');
}
