import styles from './NewUser.module.css'
import { useState } from 'react'
import Card from '../UI/Card'

const NewUser = props => {
	const [enteredName, setEnteredName] = useState('')
	const [enteredAge, setEnteredAge] = useState('')

	const usernameChangeHandler = e => {
		setEnteredName(e.target.value)
	}
	const ageChangeHandler = e => {
		setEnteredAge(e.target.value)
	}

	const onSubmitHandler = e => {
		e.preventDefault()

		const userData = {
			key: Math.random() * 1000,
			name: enteredName,
			age: enteredAge,
		}

		props.onGetEnteredUser(userData)

		setEnteredName('')
		setEnteredAge('')
	}

	return (
		<Card>
			<form onSubmit={onSubmitHandler} className={styles.form}>
				<label className={styles.form__heading}>Username</label>
				<input className={styles.form__input} type='text' onChange={usernameChangeHandler} value={enteredName}></input>
				<label className={styles.form__heading}>Age (Years)</label>
				<input className={styles.form__input} type='number' onChange={ageChangeHandler} value={enteredAge}></input>
				<button className={styles.form__button}>Add User</button>
			</form>
		</Card>
	)
}

export default NewUser
