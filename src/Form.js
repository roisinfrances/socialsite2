import React from 'react'
import Button from 'react-bootstrap/button';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'

class Form extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			user: '',
			post: '',
		}
	}

	handleUserChange = event => {
		this.setState({
			user: event.target.value
		})
	}

	handlePostChange = event => {
		this.setState({
			post: event.target.value
		})
	}

	handleSubmit = event => {
        this.props.handlePost({author: this.state.user, message: this.state.post})
		event.preventDefault()
		toastr.success("post added")

	}

	render() {
		const { user, post } = this.state
		return (
		
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>User:</label>
					<input
						type="text"
						value={user}
						onChange={this.handleUserChange}
					/>
				</div>
				<div>
					<label>Post:</label>
					<textarea
						value={post}
						onChange={this.handlePostChange}
					/>
				</div>
				<Button type="submit">Submit</Button>
			</form>
		)
	}
}

toastr.options = {
	closeButton: true,
	debug: false,
	extendedTimeOut: "1000",
	hideDuration: "1000",
	hideEasing: "linear",
	hideMethod: "fadeOut",
	newestOnTop: false,
	onclick: null,
	positionClass: "toast-top-full-width",
	preventDuplicates: true,
	progressBar: true,
	showDuration: "300",
	showEasing: "swing",
	showMethod: "fadeIn",
	timeOut: "5000",
  };
  toastr.clear();

export default Form; 