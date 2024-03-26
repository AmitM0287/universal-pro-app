import './Signup.component.css';
import { Form, Input, Button } from 'antd';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';


const Signup = () => {
	const [signupForm] = Form.useForm();
	
	const handleSignup = (values) => {
		console.log('Received values of form: ', values);
	};

	return (
		<div id='signup-page'>
			<h2> Universal Pro Signup </h2>
			<Form
				className="signup-form"
				onFinish={handleSignup}
				form={signupForm} 
			>
				<Form.Item
					name="firstname"
					rules={[
						{ required: true, message: 'Please enter your firstname!' },
					]}
				>
					<Input 
						prefix={ <UserOutlined className="site-form-item-icon" /> } 
						type='text'
						placeholder="Please enter your firstname" 
					/>
				</Form.Item>
				<Form.Item
					name="lastname"
					rules={[
						{ required: true, message: 'Please enter your lastname!' },
					]}
				>
					<Input 
						prefix={ <UserOutlined className="site-form-item-icon" /> } 
						type='text'
						placeholder="Please enter your lastname" 
					/>
				</Form.Item>

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
						Existing user? Login!
					</a>
				</Form.Item>

				<Form.Item shouldUpdate>
					{() => 
						<Button
							type="primary"
							htmlType="submit"
							disabled={
								!signupForm.isFieldsTouched(true) ||
								!!signupForm.getFieldsError().filter(({ errors }) => errors.length).length
							}
						>
							Signup
						</Button>
					}
				</Form.Item>
			</Form>
		</div>
	);
};

export default Signup;
