import React from 'react';
import Header from './Header'
import Footer from './Footer'
import global from '../styles/Global.module.scss'
import { FC, ReactNode } from 'react';
import Link from 'next/link'

interface layoutProps {
    children:ReactNode,
}

const Layout:FC<layoutProps> = ({children}) => {
    return (
        <>
    <Header/>
    <div className={global.container}>
    {children}
    </div>
    <Footer/>
        </>
    );
};

export default Layout;