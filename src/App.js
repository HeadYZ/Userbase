import React, { useState } from 'react'
import NewUser from './components/NewUsers/NewUser'
import CurrentUsers from './components/CurrentUsers/CurrentUsers'

function App() {
	const DUMMY_USERS = [
		{ key: Math.random() * 1000, name: 'Patryk', age: 28 },
		{ key: Math.random() * 1000, name: 'Aleksandra', age: 30 },
		{ key: Math.random() * 1000, name: 'Kacper', age: 3 },
	]

	const [users, setUsers] = useState(DUMMY_USERS)

	const getEnteredUser = enteredUser => {
		const newUser = enteredUser
		setUsers(prevDUMMY_USERS => {
			return [enteredUser, ...prevDUMMY_USERS]
		})
	}

	return (
		<div>
			<NewUser onGetEnteredUser={getEnteredUser} />
			<CurrentUsers users={users} />
		</div>
	)
}

export default App
