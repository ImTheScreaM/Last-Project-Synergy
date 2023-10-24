import { useState } from 'react'
import Valid from '../LoginValidation/LoginValidation'
import {Link} from 'react-router-dom';
import './login.css'
import axios from 'axios'
import { useLocalStorage } from '../../../../hooks/UseLocalStorage'


const Login = () => {
	const [user,setUser] = useLocalStorage('USER')
	const [password,setPassword] = useLocalStorage('PASSWORD')
	const [errors, setError] = useState({})
	const [textError,setTextError] = useState('')
	const [values, setValues] = useState({
		name: '',
		password: '',
	})
	const handleInput = event => {
		setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
	}

	axios.defaults.withCredentials = true
	const handleSubmit = event => {
		event.preventDefault()
		setError(Valid(values))
		axios
		.post('http://localhost:8081/login', values)
		.then(res => {
			if(res.data === 'Not found') {
				console.log('Не правильный пользователь');
				setTextError('Не правильный пользователь')
			} else if(res.data === 'Error'){
				console.log('Error');
				setTextError('Error')
			} else {
				setUser(values.name[0]);
				setPassword(values.password[0])
				window.location.reload()
			}
			console.log(res);
		})
		.catch(err => console.log(err)) 
	}

	return (
		<div>
			<div>
				<form action='/login' method='POST' onSubmit={handleSubmit} className='login-form'>
					<h2 style={{color:'red'}}>{textError}</h2>
					<h2 className='login-title-form'>Login</h2>
					<div className='label'>
						<label htmlFor='name'>Name</label>
						<input
							type='name'
							name='name'
							placeholder='Name...'
							onChange={handleInput}
						/>
						{<span>{errors.name && <span>{errors.name}</span>}</span>}
					</div>
					<div className='label'>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							name='password'
							placeholder='Password...'
							onChange={handleInput}
						/>
						{<span>{errors.password && <span>{errors.password}</span>}</span>}
					</div>
					<button type='submit' className='btn-login-accaunt-login'>Log in</button>
					<p>If u don't have acc</p>
					<Link to='/sign-up'>
						<button className='btn-create-accaunt'>Create accaunt</button>
					</Link>
				</form>
			</div>
		</div>
	)
}

export default Login