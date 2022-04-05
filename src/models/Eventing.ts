export type Callback = () => void;

type Events = {
      [key: string]: Callback[];
}

// create EventingClass interface
export interface InterfaceEventing {
      on(eventName: string, callback: Callback): void;
      trigger(eventName: string): void;
      events: Events;
}

export class Eventing implements InterfaceEventing {
      events: Events = {};
      on = (eventName: string, callback: Callback): void => {
            this.events[eventName] = this.events[eventName] || [];
            this.events[eventName].push(callback);
       }
      trigger = (eventName: string): void => {
            if (this.events[eventName]) {
                  console.log(`### ${eventName.toUpperCase()} ### event triggered`);
                  this.events[eventName].forEach(callback => callback());
            }
      }
}
