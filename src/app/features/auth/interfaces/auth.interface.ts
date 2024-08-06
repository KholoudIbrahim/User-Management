import { LoginComponent } from "../components/login/login.component";

LoginComponent

export interface LoginResponse {
    
    
        "id": number,
        "username": string,
        "email": string,
        "firstName": string,
        "lastName": string,
        "gender": string,
        "image": string,
        "token": string,
        "refreshToken": string
    
}

export interface LoginPayload {
    username:string;
    password:string;
    expiresInMins:number;
}