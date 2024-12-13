import Navbar from '../components/Navbar'
import ServersList from '../components/ServersList'

const Servers = () => {
    return (
        <div>
            <Navbar/>
            <h1 className='flex justify-center align-center text-3xl font-bold'>Servers</h1>
            <ServersList/>
        </div>
    )
}

export default Servers
