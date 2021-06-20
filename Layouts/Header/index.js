import React from 'react';
import { LogoIcon, MenuItems } from '../../components';

const Header = () => {
    return (
        <div className={'relative z-20 mt-10 ml-5 grid grid-cols-12 content-between'}>
            <div className={'col-span-12'}><LogoIcon /></div>
            {/* <div className={'col-span-12'}><MenuItems /></div> */}
        </div>
    )
}

export default Header;
