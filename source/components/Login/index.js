import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'

class Login extends React.Component {
	handleClick() {
		const {
			username,
			password
		} = this.refs
		const {
			sendLoginRequest
		} = this.props
		sendLoginRequest({
			username: username.value,
			password: password.value
		})
	}
	render() {
		const {
			loginAction
		} = this.props

		return (
            <div styleName="">
                <div styleName='username'>
                    <input ref='username' type="text" defaultValue='denny'/>
                </div>
                <div styleName='password'>
                    <input ref='password' type="password" defaultValue='1321313'/>
                </div>
                <button styleName='btn' onClick={this.handleClick.bind(this)}>
                    login
                </button>
            </div>
		)
	}
}

export default CSSModules(Login, styles)