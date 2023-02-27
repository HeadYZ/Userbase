import styles from './CurrentUsers.module.css'
import Card from '../UI/Card'
import CurrentUser from './CurrentUser'

const CurrentUsers = props => {
	return (
		<Card>
			<ul>
				{props.users.map(user => (
					<CurrentUser key={user.key} name={user.name} age={user.age} />
				))}
			</ul>
		</Card>
	)
}

export default CurrentUsers
