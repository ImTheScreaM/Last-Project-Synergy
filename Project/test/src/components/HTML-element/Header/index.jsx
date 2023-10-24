import { Link } from 'react-router-dom'
import useClock from '../../../hooks/DateNow'
import { useLocalStorage } from '../../../hooks/UseLocalStorage'
import './style.css'	

const Header = () => {
	const [user] = useLocalStorage('USER')

	return ( 
		<div>
			<div>
				<nav className='nav'>
					<ul>
						<div className='time'> {useClock().toString()} </div>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/weather'>Weather</Link>
						</li>
						<li>
						<Link to='/Football'>Football</Link>
						</li>
						{user && (
							<>
								<li>{user && <Link to='/chat'>Chat</Link>}</li>
								<li>{user && <Link to='/user'>Profile</Link>}</li>
								<li>{user && <Link to='/rickandmorty'>RickAndMorty</Link>}</li>
								<li>{user && <Link to='/counter'>Counter</Link>}</li>
							</>
						)}
						{!user && <li>{!user && <Link to='/login'>Login</Link>}</li>}
					</ul>
				</nav>
			</div>
		</div>
	)
}
export default Header
