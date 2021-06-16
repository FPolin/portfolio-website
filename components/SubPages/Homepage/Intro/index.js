import Image from 'next/image';
import img from '../../../../public/images/warning.png';


const Intro = () => {
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems: 'center'}}>
            <Image 
              width={60} 
              height={60} 
              src={img} 
              alt='not found' 
            />
            <p style={{color: 'white', fontSize: 60, marginLeft: 10}}>Under Construction</p>
        </div>
    );
}

export default Intro;