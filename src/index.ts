import { User } from './models/User';

const collection = User.buildUserCollection();

collection.on('change', () => {
      const users = collection.models;
      console.log(collection);
      });
collection.fetch();
