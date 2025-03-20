declare module "#not-for-import/login/stores/types" {
    export interface UserLoginInfo {
        email: string;
        username: string;
        password: string;
    }
}
declare module "#not-for-import/login/stores/useUsersLoginInfoStore" {
    export const useUsersLoginInfoStore: any;
}
declare module "#not-for-import/login/services/usersLoginInfoService" {
    import { UserLoginInfo } from "#not-for-import/login/stores/types";
    export function addUserLoginInfo(user: UserLoginInfo): void;
    export function removeUserLoginInfo(email: string): void;
    export function emailOrUsernameAndPasswordMatch(emailOrUsername: string, password: string): UserLoginInfo | undefined;
}
declare module "login/useAuthStore" {
    export const useAuthStore: any;
}
declare module "#not-for-import/login/components/LoginForm" {
    import React from "react";
    import "../styles/login.css";
    export const LoginForm: React.FC;
}
declare module "login/App" {
    import React from "react";
    const App: React.FC;
    export default App;
}
