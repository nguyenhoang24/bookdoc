import { HealthOrganization } from "./health-organization.model";
import { User } from "./user.model";

export class UserHealthOrg{
    id?: string;
    user?: User;
    org?: HealthOrganization;
    constructor(){

    }
}
