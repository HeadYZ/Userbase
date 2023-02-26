import styles from './CurrentUser.module.css'

const CurrentUser = props => {
	return (
		<li className={styles['user-list__item']}>
			{props.name} ({props.age} years old)
		</li>
	)
}

export default CurrentUser
