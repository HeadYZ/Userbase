import classes from './Button.module.css'

const Button = props => {

    const classN = `${classes.button} ${props.className}`

	return (
		<button className={classN} type={props.type || 'button'} onClick={props.onClick}>
			{props.children}
		</button>
	)
}

export default Button
