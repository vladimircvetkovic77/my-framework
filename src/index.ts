import { User } from './models/User';
import axios from 'axios';

const user = new User({ name: 'Max', age: 27 });

user.on('change', () => {
      console.log('User changed');
});

user.trigger('change');

console.log(user.get('name'));
