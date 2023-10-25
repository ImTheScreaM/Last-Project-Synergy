import { useLocalStorage } from '../../../../hooks/UseLocalStorage'
import './style.css'

const User = () => {
	const [user, setUser] = useLocalStorage('USER')
	const [password, setPassword] = useLocalStorage('PASSWORD')

	const LogoutUserValue = () => {
		if (confirm('Logout?')) {
			setUser('')
			setPassword('')
			location.reload()
		} else {
			alert('Ok')
		}
	}

	return (
		<div>
			<form className='user-page'>
				<div className='border'>
					<h2>User info</h2>
					<hr></hr>
					<div>
						<label>User name:</label>
						<p>{user}</p>
					</div>
					<div>
						<label>Password:</label>
						<p>{password}</p>
					</div>
					<button onClick={LogoutUserValue}>Logout</button>
				</div>
			</form>
		</div>
	)
}

export default User
