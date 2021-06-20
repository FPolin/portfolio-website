import style from './style.module.css';

const Intro = () => {
    return (
        <div className={'h-screen grid items-center'}>
            <div className={`${style['content']}`}>
                <p className={`${style['hello']}`}>Hi,</p>
                <p className={`${style['name']}`}>I'm Fuzail Polin</p>
                <p className={`${style['about']}`}>I am a Web Developer.</p>
            </div>
        </div>
    );
}

export default Intro;