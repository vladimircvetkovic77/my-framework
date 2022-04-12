import { User, UserProps } from "../models/User";
import { View } from "../models/View";

export class UserShow extends View<User, UserProps> {

      template(): string {
            return `
                  <div>
                        <h1>User Details</h1>
                        <div>User id: ${this.model.get('id') ?? '<span style="font-weight: bold;">not saved to database yet</span>'}</div>
                        <div>User name: ${this.model.get('name')}"</div>
                        <div>User age: ${this.model.get('age')}"</div>
                  </div>
            `
      }
}
