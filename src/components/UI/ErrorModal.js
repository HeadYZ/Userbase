import Card from './Card'
import Button from './Button'
import classes from './ErrorModal.module.css'

const ErrorModal = props => {
	return (
		<div>
			<div className={classes.modal__backdrop} onClick={props.onConfirm} />
			<Card className={classes.modal}>
				<div>
					<h2 className={classes.modal__heading}>{props.title}</h2>
					<div className={classes.modal__content}>
						<p>{props.information}.</p>
						<Button className={classes.modal__button} onClick={props.onConfirm}>
							Okay
						</Button>
					</div>
				</div>
			</Card>
		</div>
	)
}

export default ErrorModal
