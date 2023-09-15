export class SecurityAction {
  id: string;
  actionName: string;
  actionURL: string;
  actionMethod: string;
  isChecked: boolean;

  constructor() {
      this.id = "";
      this.actionName = "";
      this.actionURL = "";
      this.actionMethod = "";
      this.isChecked= false;
  }
}
