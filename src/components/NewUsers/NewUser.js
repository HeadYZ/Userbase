import { useState } from 'react'
import classes from './NewUser.module.css'
import ErrorModal from '../UI/ErrorModal'
import Button from '../UI/Button'
import Card from '../UI/Card'

const NewUser = props => {
	const [enteredName, setEnteredName] = useState('')
	const [enteredAge, setEnteredAge] = useState('')

	const [error, setError] = useState()

	const usernameChangeHandler = e => {
		setEnteredName(e.target.value)
	}
	const ageChangeHandler = e => {
		setEnteredAge(e.target.value)
	}

	const onSubmitHandler = e => {
		e.preventDefault()

		if (enteredAge.trim().length === 0 || enteredName.trim().length === 0) {
			setError({
				title: 'Invalid input',
				information: 'Please enter a valid name and age (non-empty values)',
			})
		} else if (+enteredAge < 1) {
			setError({
				title: 'Invalid age',
				information: 'Please enter a valid age (> 0)',
			})
		} else {
			const userData = {
				key: Math.random() * 1000,
				name: enteredName,
				age: enteredAge,
			}

			props.onGetEnteredUser(userData)

			setEnteredName('')
			setEnteredAge('')
		}
	}

	const onConfirmHandler = () => {
		setError(null)
	}

	return (
		<Card>
			{error && (
				<ErrorModal
					onConfirm={onConfirmHandler}
					title={error.title}
					information={error.information}
				/>
			)}
			<form onSubmit={onSubmitHandler} className={classes.form}>
				<label className={classes.form__heading}>Username</label>
				<input className={classes.form__input} type='text' onChange={usernameChangeHandler} value={enteredName}></input>
				<label className={classes.form__heading}>Age (Years)</label>
				<input className={classes.form__input} type='number' onChange={ageChangeHandler} value={enteredAge}></input>
				<Button type='submit'>Add User</Button>
			</form>
		</Card>
	)
}

export default NewUser
