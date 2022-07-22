import {Fragment, ReactNode} from "react";

import MainNavigation from "./MainNavigation";

import classes from "./Layout.module.css";


interface LayoutProps{
    children: ReactNode
}

function Layout(props: LayoutProps){
    return (
        <Fragment>
            <MainNavigation/>
            <main className={classes.main}>
                {props.children}
            </main>
        </Fragment>
    );
}

export default Layout;
