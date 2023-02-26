import styles from './NewUser.module.css'
import Card from '../UI/Card'

const NewUser = () => {
	return (
		<Card>
			<form className={styles.form}>
				<label className={styles.form__heading}>Username</label>
				<input className={styles.form__input} type='text'></input>
				<label className={styles.form__heading}>Age (Years)</label>
				<input className={styles.form__input} type='number'></input>
				<button className={styles.form__button}>Add User</button>
			</form>
		</Card>
	)
}

export default NewUser
