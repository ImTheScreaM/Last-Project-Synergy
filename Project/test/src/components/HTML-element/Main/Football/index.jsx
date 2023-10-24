import axios from 'axios'
import { useEffect, useState } from 'react'
import './style.css'

const Football = () => {
	const [team, setTeam] = useState([])
	const [search, setSearch] = useState('')
	const [isLoad, setIsLoad] = useState(true)

	useEffect(() => {
		const options = {
			method: 'GET',
			url: 'https://free-nba.p.rapidapi.com/teams?page=0',
			headers: {
				'content-type': 'application/octet-stream',
				'X-RapidAPI-Key': 'b5ced782e2msh734b4b63151063ap133abejsna128ff37c080',
				'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
			},
		}

		axios
			.request(options)
			.then(res => {
				console.log(res.data.data)
				setTeam(res.data.data)
				setIsLoad(false)
			})
			.catch(err => {
				console.log(err)
			})
	}, [setTeam])

	return (
		<div>
			<div
				style={{
					display: 'grid',
					justifyContent: 'center',
					textAlign: 'center',
					gap: 15,
				}}
			>
				{isLoad && (
					<div style={{ fontSize: 50, color: 'red' }}>Loading... </div>
				)}
				{!isLoad && (
					<div>
						<input
							type='text'
							placeholder='Search'
							className='search-team'
							onChange={e => setSearch(e.target.value)}
						/>
						{team
							.filter(val => {
								if (search === '') {
									return val
								} else if (
									val.abbreviation
										.toLocaleLowerCase()
										.includes(search.toLocaleLowerCase())
								) {
									return val
								}
							})
							.map((el, i) => {
								return (
									<div key={el.id}>
										{i + 1}.{el.abbreviation}. {el.city}
										<button
											style={{ marginLeft: 10 }}
											onClick={() => {
												setTeam(
													team.filter(teamElement => el.id !== teamElement.id)
												)
											}}
										>
											Deleted
										</button>
									</div>
								)
							})}
					</div>
				)}
			</div>
		</div>
	)
}

export default Football
