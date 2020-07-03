import { User } from "../interfaces/user";

export interface UsersState {

    /** List of all Users displayed on screen. */
    Users: User[];
    UsersAreLoading: boolean;
    UsersError: string;

    /** User currently displayed on screen. */
    User: User[];
    UserIsLoading: boolean;
    UserError: string;

    /** <!> Admin does not share state store with the public app */
    admin: {

        /** List of all Users displayed on screen. */
        Users: User[];
        UsersAreLoading: boolean;
        UsersError: string;

        /** User currently displayed on screen. */
        User: User[];
        UserIsLoading: boolean;
        UserError: string;
    }

}