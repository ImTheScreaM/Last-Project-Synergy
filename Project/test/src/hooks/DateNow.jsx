import { useEffect, useState } from 'react'

const useClock = () => {
	const [dateNow, setDateNow] = useState(new Date().toLocaleTimeString('en-US'))

	useEffect(() => {
		setTimeout(() => {
			setDateNow(new Date().toLocaleTimeString('en-US'))
		}, 1000)
	}, [dateNow])

	return [dateNow]
}

export default useClock
