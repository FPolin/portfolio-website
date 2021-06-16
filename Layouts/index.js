import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layouts = ({children}) => {
    return (
        <div className={'grid grid-cols-12'}>
            <div className={'col-span-3'}>
                <Header />
            </div>
            <div className={'col-span-9 container mx-auto'}>
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default Layouts;
