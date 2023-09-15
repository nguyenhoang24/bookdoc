import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const IS_VAAC = "is-vaac";
const IS_HIV = "is-hiv";
const IS_TTYT = "is-ttyt";

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(): void {
    window.localStorage.clear();
  }

  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    return JSON.parse(localStorage.getItem(USER_KEY));
  }

  saveAccountIsHivInfo(value: any): void {
    window.localStorage.removeItem(IS_HIV);
    window.localStorage.setItem(IS_HIV, value);
  }
  saveAccountIsVaac(value: any): void {
    window.localStorage.removeItem(IS_VAAC);
    window.localStorage.setItem(IS_VAAC, value);
  }

  saveAccountIsTtyt(value: any): void {
    window.localStorage.removeItem(IS_TTYT);
    window.localStorage.setItem(IS_TTYT, value);
  }

  getIsTTYT(): boolean {
    return !!localStorage.getItem(IS_TTYT);
  }

  getIsHIV(): boolean {
    return !!localStorage.getItem(IS_HIV);
  }
  getIsVAAC(): boolean {
    return (localStorage.getItem(IS_VAAC)=="true")?true:false;
  }
}
