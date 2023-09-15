export interface JwtResponse {
    token: string;
    type: string;
    username: string;
    email: string;
    phone: string;
    listRoles: string[];
  }