import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { MenuItems } from '../components';

const Layouts = ({children}) => {
    return (
        <div className={'grid grid-cols-12'}>
            <div className={'col-span-3'}>
                <div className={'grid grid-cols-4 content-between h-screen'}>
                    <div className={'col-span-4'}><Header /></div>
                    <div className={'col-span-4'}><MenuItems /></div>
                </div>
            </div>
            <div className={'col-span-9 container mx-auto'}>
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default Layouts;
