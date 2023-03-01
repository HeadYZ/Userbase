import React, { useState } from 'react'
import NewUser from './components/NewUsers/NewUser'
import CurrentUsers from './components/CurrentUsers/CurrentUsers'

function App() {
	const [users, setUsers] = useState([])

	const getEnteredUser = enteredUser => {
		setUsers(prevUsers => {
			return [...prevUsers, enteredUser]
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
