import { Route, Switch } from 'react-router-dom'
import './style.css'
import Home from '../Home'
import Chat from '../Chat'
import Login from '../Login/Login'
import Football from '../Football'
import User from '../User-page'
import SignUp from '../SignUp/SignUp'
import Weather from '../Weather'
import RickAndMorty from '../RickAndMorty'
import Counter from '../Counter/counter'

const Main = () => {
	return (
		<div className='Main'>
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route path='/weather' component={Weather}/>
				<Route path='/counter' component={Counter}/>
				<Route path='/chat' component={Chat}/>
				<Route path='/login' component={Login}/>				
				<Route path='/Football' component={Football}/>				
				<Route path='/user' component={User}/>				
				<Route path='/rickandmorty' component={RickAndMorty}/>
				<Route path='/sign-up' component={SignUp}/>				
			</Switch>
		</div>
	)
}

export default Main
