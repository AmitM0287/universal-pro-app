

import React from 'react';
import './ResetPassword.component.css';
import { Form, Input, Button } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';


const ResetPassword: React.FC = () => {
	const [ResetPasswordForm] = Form.useForm();
	
	const handleResetPassword = (values: object) => {
		console.log('Received values of form: ', values);
	};

	return (
		<div id='reset-password-page'>
			<h2> Universal Pro Reset Password </h2>
			<Form
				name="reset-pass-form"
				onFinish={handleResetPassword}
				form={ResetPasswordForm} 
			>
				<Form.Item
					name="email"
					rules={[
						{ required: true, message: 'Please enter your email!' },
						{ type: 'email', message: 'Please enter a valid email address!' }
					]}
				>
					<Input 
						prefix={ <MailOutlined className="site-form-item-icon" /> } 
						type='text'
						placeholder="Please enter your email" 
					/>
				</Form.Item>

				<Form.Item
					name="password"
					rules={[
						{ required: true, message: 'Please enter your password!' },
						{ min: 8, message: 'Password must be at least 8 characters long!' },
						{ pattern: /(?=.*[a-z])/, message: 'Password must include at least one lowercase letter!' },
						{ pattern: /(?=.*[A-Z])/, message: 'Password must include at least one uppercase letter!' },
						{ pattern: /(?=.*\d)/, message: 'Password must include at least one number!' },
						{ pattern: /(?=.*[!@#$%^&*])/, message: 'Password must include at least one special character!' }
					]}
				>
					<Input.Password
						prefix={ <LockOutlined className="site-form-item-icon" /> }
						type="password"
						placeholder="Please enter your password"
					/>
				</Form.Item>
				
				<Form.Item>
					<a href="login">
						Remember password? Login!
					</a>
				</Form.Item>

				<Form.Item shouldUpdate>
					{() => 
						<Button
							type="primary"
							htmlType="submit"
							disabled={
								!ResetPasswordForm.isFieldsTouched(true) ||
								!!ResetPasswordForm.getFieldsError().filter(({ errors }) => errors.length).length
							}
						>
							Reset Password
						</Button>
					}
				</Form.Item>
			</Form>
		</div>
	);
};

export default ResetPassword;
