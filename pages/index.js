import Layouts from "../Layouts"
import Intro from "../components/SubPages/Homepage/Intro"
import Background from "../components/SubPages/Homepage/Background"

export default function Home() {
  return (
    <div>
      
      <Layouts>
        <div>
          <div className={'absolute'}>
            <Background />
          </div>
          <div className={'relative  w-3/4 '}>
            <Intro />
          </div>
        </div>
      </Layouts>
    </div>
  )
}
