import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
class PostsNew extends Component {
	renderField(field) {
		return (
			<div className={`form-group`}>
				<label>{field.label}</label>
				<input className={`form-control`} type={`text`} {...field.input} />
			</div>
		);
	}
	render() {
		return (
			<form>
				<Field name={'title'} component={this.renderField} label={`Title for Post`} />
				<Field name={'categories'} component={this.renderField} label={`Categories`} />
				<Field name={'content'} component={this.renderField} label={`Post Content`} />
			</form>
		);
	}
}

function validate(values) {
	const errors = {};
	if (!values.title) {
		errors.title = 'Please enter a title';
	}
	if (!values.categories) {
		errors.categories = 'Please enter some categories';
	}
	if (!values.content) {
		errors.content = 'Please enter some content';
	}
	return errors;
}
export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(PostsNew);
