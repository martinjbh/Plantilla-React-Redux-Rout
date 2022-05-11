import './Home.scss'
import { useSelector } from 'react-redux'

const Home = () => {
    const state = useSelector(state => state.data)
    return (
        <div  >
            {console.log(state)}
            home
        </div>

    )
}
export default Home





