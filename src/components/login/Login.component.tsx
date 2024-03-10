import React from 'react';
import './Login.component.css';
import { Button, Checkbox, Form, type FormProps, Input } from 'antd';


type FieldType = {
	username?: string;
	password?: string;
	remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
	console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
	console.log('Failed:', errorInfo);
};

const Login: React.FC = () => 
	<div id='login-page'>
		<h2> Universal Pro | Login </h2>
		<div className='login-form'>
			<Form
				name="basic"
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item<FieldType>
					label="Username"
					name="username"
					rules={[{ required: true, message: 'Please input your username!' }]}
				>
					<Input />
				</Form.Item>

				<Form.Item<FieldType>
					label="Password"
					name="password"
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item<FieldType>
					name="remember"
					valuePropName="checked"
				>
					<Checkbox>Remember me</Checkbox>
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit">
						Login
					</Button>
				</Form.Item>
			</Form>
		</div>
	</div>
;

export default Login;
