import './Login.component.css';
import { Form, Input, Button } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';


const Login = () => {
	const [loginForm] = Form.useForm();
	
	const handleLogin = (values) => {
		console.log('Received values of form: ', values);
	};

	return (
		<div id='login-page'>
			<h2> Universal Pro Login </h2>
			<Form
				className="login-form"
				onFinish={handleLogin}
				form={loginForm} 
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
					<a href="signup">
						New user? Signup!
					</a>
					<a href="resetPassword">
						Forgot password
					</a>
				</Form.Item>

				<Form.Item shouldUpdate>
					{() => 
						<Button
							type="primary"
							htmlType="submit"
							disabled={
								!loginForm.isFieldsTouched(true) ||
								!!loginForm.getFieldsError().filter(({ errors }) => errors.length).length
							}
						>
							Login
						</Button>
					}
				</Form.Item>
			</Form>
		</div>
	);
};

export default Login;
