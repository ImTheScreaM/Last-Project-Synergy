import { useState } from 'react'
import './style.css'

const RickAndMorty = () => {
	const [character, setCharacter] = useState('')
	const [count, setCount] = useState(1)

	const randomNumberInRange = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}

	const getChart = () => {
		const url = `https://rickandmortyapi.com/api/character/${count}`
		fetch(url, {
			method: 'GET',
		})
			.then(res => res.json())
			.then(res => {
				setCount(randomNumberInRange(1, 826))
				setCharacter(res)
				console.log(res)
			})
	}


	return (
		<div className='da'>
			<div className='rick_and_morty'>
				{typeof character.name != 'undefined' ? (
					<div className='container'>
						<div className='container-cards'>
							<article className='CharacterCard'> 
								<div className='CharacterCardImg'>
									<img src={character.image} />
								</div>
								<div className='CharacterCardInfo'>
									<div className='section'>
										<p className='charac_name'>{character.name}</p>
										<span className='status'>
											<p
												className={`status_color ${
													character.status == 'Alive'
														? 'alive'
														: character.status == 'Dead'
														? 'dead'
														: 'unknow'
												}`}
											></p>
											<p>
												{character.species}({character.gender}) - {character.status}
											</p>
										</span>
									</div>
									<div className='section'>
										<span>Last know location:</span>
										<p className='last_loc'>{character.location.name}</p>
									</div>
									<div className='section'>
										<span>Species:</span>
										<p className='first_see'>{character.species}</p>
									</div>
								</div>
							</article>
						</div>
					</div>
				) : (
					''
				)}
			<button className='get_button' onClick={getChart}>
				Get
			</button>
			</div>
		</div>
	)
}

export default RickAndMorty
