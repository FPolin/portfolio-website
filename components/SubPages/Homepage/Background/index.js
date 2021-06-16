import Particles from 'react-particles-js';
import particleConfig from '../../../../config/particle-config';


const Background = () => {
    return (
        <div>
            <div className={'z-0'} style={{backgroundImage: 'linear-gradient(to right, #131010 , #524f4f)',     position:'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}>
                <Particles className={'h-screen'} params={particleConfig} />
            </div>
        </div>
    );
}

export default Background;