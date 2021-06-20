import style from './style.module.css';
import { BsLayers } from "react-icons/bs";

const MenuItems = () => {
    return (
        <div>
            <div className={'relative z-20 m-10'}>
                <ul className={`${style['items']}`}>
                    <li><BsLayers className={'m-1 mr-4'} /> HOME</li>
                    <li><BsLayers className={'m-1 mr-4'} /> SERVICES</li>
                    <li><BsLayers className={'m-1 mr-4'} /> WORKS</li>
                    <li><BsLayers className={'m-1 mr-4'} /> PERSONAL</li>
                    <li><BsLayers className={'m-1 mr-4'} /> CONTACTS</li>
                </ul>
            </div>
        </div>
    );
}

export default MenuItems;