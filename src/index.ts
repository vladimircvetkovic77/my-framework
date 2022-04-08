import { User } from './models/User';
import axios from 'axios';

const user = new User({ id: 16, name: 'Lolita', age: 15 });

user.on('change', () => {
      console.log('User changed');
});

user.trigger('change');

console.log(user.get('name'));
user.save();
