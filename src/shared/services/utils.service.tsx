import { Redirect } from "react-router";
import * as React from 'react';
// import { LoginResponse } from "../interfaces/login";

/**
 *
 * @param props Props of the component
 * @param shouldBeAuth if the user should be auth to see the page, shouldBeAuth = true
 * @param pathToRedirect redirect to Path doesn't pass shouldBeAuth condition
 * @param Component component itself ex: LoginPage
 * @param loginResponse object received after logging in
 * Checks on Route mounting if the user is logged in or not and if the user should be allowed to visit the page or not
 */
export function renderPage(
    props: any,
    shouldBeAuth: boolean,
    pathToRedirect: string,
    Component: React.ComponentClass,
    // loginResponse: LoginResponse,
) {
    // let isAuth = loginResponse && loginResponse.token ? true : false;

    // return isAuth === shouldBeAuth ?
    //     <Component {...props} /> : <Redirect to={pathToRedirect} />;

    return shouldBeAuth === true? 
    <Component {...props} /> : <Redirect to={pathToRedirect} />;
}