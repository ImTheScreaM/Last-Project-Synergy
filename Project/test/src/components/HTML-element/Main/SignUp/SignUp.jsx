import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Valid from '../SignUpValidation/SignUpValidation'
import './signup.css'

const SignUp = () => {
	const [values, setValues] = useState({
		name: '',
		email: '',
		password: '',
	})
	const [errors, setError] = useState({})
	const [success, setSuccess] = useState('')

	const handleInput = event => {
		setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
	}

	const handleSubmit = event => {
		event.preventDefault()
		setError(Valid(values))
		axios
			.post('http://localhost:8081/signup', values)
			.then(res => {
				setSuccess('Register Complete')
				console.log(res)
			})
			.catch(err => console.log(err)) 
	}

	return (
		<div>
			<div>
				<form action='/signup' method='POST' onSubmit={handleSubmit} className='register-form'>
				<h2 style={{color:'green',fontSize:55}}>{success}</h2>
					<h2>Sign-Up</h2>
					<div className='label'>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							placeholder='Name...'
							onChange={handleInput}
							name='name'
						/>
						{<span>{errors.name && <span>{errors.name}</span>}</span>}
					</div>
					<div className='label'>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							placeholder='Email...'
							name='email'
							onChange={handleInput}
						/>
						{<span>{errors.email && <span>{errors.email}</span>}</span>}
					</div>
					<div className='label'>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							placeholder='Password...'
							name='password'
							onChange={handleInput}
							minLength={10}
						/>
						{<span>{errors.password && <span>{errors.password}</span>}</span>}
					</div>
					<button type='submit' className='btn-register-accaunt'>
						Sign Up
					</button>
					<p>You have acc?</p>
					<Link to='/login'>
						<button className='btn-login-accaunt'>Login</button>
					</Link>
				</form>
			</div>
		</div>
	)
}

export default SignUp
