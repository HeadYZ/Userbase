import styles from './CurrentUsers.module.css'
import Card from '../UI/Card'
import CurrentUser from './CurrentUser'

const CurrentUsers = () => {
	const users = [
		{ name: 'Patryk', age: 28 },
		{ name: 'Aleksandra', age: 30 },
		{ name: 'Kacper', age: 3 },
	]

	return (
		<Card>
			<ul>
				{users.map(user => (
					<CurrentUser name={user.name} age={user.age} />
				))}
			</ul>
		</Card>
	)
}

export default CurrentUsers
