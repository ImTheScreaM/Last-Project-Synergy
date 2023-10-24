import { useState } from 'react'
import { useLocalStorage } from '../../../../hooks/UseLocalStorage'
import './style.css'
const Counter = () => {
	const [user] = useLocalStorage('USER')
	const [count,setCount] = useState(0)
	
	const addCount = () => {
		setCount(count + 1)
	}

	const subCount = () => {
		setCount(count - 1)
	}

	const absCount = () => {
		setCount(count * -1)
	}

	const viewCounter = () => {
		alert(`Счетчик ${user} составляет: ${count}`)
	}

	return (
		<div>
			<div className='count-container'>
				<h2>Count</h2>
				<h3>{count}</h3>
				<div className='count-button-container'>
					<button onClick={addCount}> +1 </button>
					<button onClick={absCount}> +/-1 </button>
					<button onClick={subCount}> -1 </button>
				</div>
				<button className='view-count' onClick={viewCounter}>View your count</button>
			</div>
		</div>
	)
}

export default Counter