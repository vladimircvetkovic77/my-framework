import { Eventing, InterfaceEventing, Callback } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
import { AxiosResponse } from 'axios';

export interface UserProps {
      id?: number;
      name?: string;
      age?: number;
}
const rootUrl = 'http://localhost:3000/users';
export class User {
      public events: InterfaceEventing = new Eventing()
      public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl)
      public attributes: Attributes<UserProps>

      constructor(attrs: UserProps) {
            this.attributes = new Attributes<UserProps>(attrs)
      }
      get on() {
            return this.events.on
      }
      get trigger() {
            return this.events.trigger
      }
      get get() {
            return this.attributes.get
      }
      set(update: UserProps) {
            return this.attributes.set(update)
            this.events.trigger('change')
      }
      fetch(): void {
            const id = this.attributes.get('id')
            if (typeof id !== 'number') {
                  throw new Error('User must have an id')
            }
            this.sync.fetch(id).then((res: AxiosResponse): void => {
                  this.set(res.data)
            })
      }
}
