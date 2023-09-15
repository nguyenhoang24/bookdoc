import { SecurityAction } from "./security-action.model";

export class SecurityPermission{
  id: string;
  name: string;
  code: string;
  actions: SecurityAction[];

  constructor() {
      this.id = "";
      this.name = "";
      this.code = "";
      this.actions = [];
  }
}
