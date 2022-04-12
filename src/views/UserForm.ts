import { User, UserProps } from "../models/User";
import { View } from "../models/View";

export class UserForm extends View<User, UserProps> {

      eventsMap(): { [key: string]: () => void } {
            return {
                  'click:.set-age': this.onSetAgeClick,
                  'click:.set-name': this.onSetNameClick,
                  'click:.save-model': this.onSaveClick,
            }
      }

      onSetAgeClick = (): void => {
            this.model.setRandomAge();
      }

      onSetNameClick = (): void => {
            const input = this.parent.querySelector('input');
            if(input) {
                  this.model.set({name: input.value});
                  input.value = '';
            }
      }

      onSaveClick = (): void => {
            this.model.save();
      }

      template(): string {
            return `
                  <div>
                        <input placeholder="${this.model.get('name')}"/>
                        <div>${this.model.get('id')}</div>
                        <button class="set-name">Change Name</button>
                        <br/>
                        <button class="save-model">Save User</button>

                  </div>
            `
      }


}
