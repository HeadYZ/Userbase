import classes from './CurrentUsers.module.css'
import Card from '../UI/Card'

const CurrentUsers = props => {
	return (
		<Card>
			<ul>
				{props.users.map(user => (
					<li className={classes['user-list__item']} key={user.key}>
						{user.name} ({user.age} years old)
					</li>
				))}
			</ul>
		</Card>
	)
}

export default CurrentUsers
