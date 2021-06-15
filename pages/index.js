import Image from 'next/image'
import Layouts from "../Layouts"
import Particles from 'react-particles-js';
import particleConfig from '../config/particle-config';
const img = '/images/warning.png';

export default function Home() {
  return (
    <div>
      <Layouts>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', height: '100vh'}}>
          <div style={{backgroundColor: '#131010', position:'absolute', width: '100vw', height: '100vh' }}>
            <Particles params={particleConfig} />
          </div>
          <div style={{position: 'relative', display:'flex', alignItems: 'center'}}>
            <Image style={{height: 80, width: 80}} src={img} alt='not found' />
            <p style={{color: 'white', fontSize: 60}}>Under Construction</p>
          </div>
        </div>
      </Layouts>
    </div>
  )
}
