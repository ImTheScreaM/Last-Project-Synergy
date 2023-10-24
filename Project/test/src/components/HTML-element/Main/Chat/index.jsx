import { useState } from 'react'
import { useLocalStorage } from '../../../../hooks/UseLocalStorage'
import submit from '../../../../assets/submit.png'
import basket from '../../../../assets/basket.png'
import './style.css'

const Chat = () => {
	const [message, setMessage] = useLocalStorage('CHAT', [])
	const [inputValue, setInputValue] = useState('')
	const [user] = useLocalStorage('USER')

	const SendMessage = () => {
		setMessage([...message, `${user}: ${inputValue}`])
		setInputValue('')
	}

	return (
		<div className='chat-container'>
				<div className='title-chat'>Chat</div>
			<div className='chat'>
				<div className='logic-chat'>
					{message.map((el, i) => {
						return (
							<div key={i} className='logic-chat-key'>
									<p className='logic-chat-msg-text'>{el}</p>
							</div>
						)
					})}
				</div>
			</div>
			<div className='send'>
				<input
					type='text'
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
					maxLength={120}
				/>
				<img src={submit} alt="" onClick={SendMessage}/>
				<img src={basket} alt="" onClick={() => setMessage([])}/>
			</div>
		</div>
	)
}

export default Chat
