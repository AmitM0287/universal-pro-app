import './Auth.css';
import { Form, Button, Input, Segmented } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';

const Auth = () => {
	const [authState, setAuthState] = useState('Login');
	const navigate = useNavigate();
	const location = useLocation();	

	useEffect(() => {
		switch(location.pathname) {
		case '/auth/register':
			setAuthState('Register');
			break;
		case '/auth/forgot-password':
			setAuthState('Forgot Password');
			break;
		default:
			setAuthState('Login');
			break;
		}
	}, [location]);

	const handleSegmentedValue = (value) => {
		value === 'Login' ? navigate('/auth/login') : navigate('/auth/register');
	};

	const handleLogin = (e) => {
		e.preventDefault();
		setAuthState('Login');
		navigate('/auth/login');
	};

	const handleRegister = (e) => {
		e.preventDefault();
		setAuthState('Register');
		navigate('/auth/register');
	};

	const handleForgotPassword = (e) => {
		e.preventDefault();
		setAuthState('Forgot Password');
		navigate('/auth/forgot-password');
	};

	return (
		<div className='auth-page'>
			<div className='auth-form'>
				<h3> { authState === 'Login' ? 'Login' :  authState === 'Register' ? 'Register' : 'Forgot Password' } </h3>
				{ authState !== 'Forgot Password' && 
					<div className='login-register'>
						<Button 
							type="primary" 
							htmlType="submit"
							icon={<GoogleIcon />} 
						>
							Continue with Google 
						</Button>
						<p> 
							<span className='line'></span>
							<span className='or'> or </span>
							<span className='line'></span>
						</p>
						<Segmented
							value={authState}
							onChange={handleSegmentedValue}
							options={['Login', 'Register']}
						/>
						<Form variant="filled">
							{ authState === 'Register' && 
								<div style={{display: 'flex', gap: '1vmax'}}>
									<Form.Item 
										name="fname" 
										rules={[
											{ required: true, message: 'Enter first name' },
											{ pattern: '[A-Za-z]{1}', message: 'Enter a valid name' }
										]}
									>
										<Input 
											addonBefore={<PersonIcon />}
											placeholder="First Name" 
										/>
									</Form.Item>
									<Form.Item 
										name="lname" 
										rules={[
											{ required: true, message: 'Enter last name' },
											{ pattern: '[A-Za-z]{1}', message: 'Enter a valid name' }
										]}
									>
										<Input 
											addonBefore={<PersonIcon />}
											placeholder="Last Name" 
										/>
									</Form.Item>
								</div>
							}
							<Form.Item 
								name="email" 
								rules={[
									{ required: true, message: 'Enter email' },
									{ pattern: '[a-zA-Z0-9.-_+]{1,}@[a-zA-Z0-9.+-_]{2,}[.]{1}[a-zA-Z]{2,}', message: 'Enter a valid email' }
								]}
							>
								<Input 
									addonBefore={<EmailIcon />}
									placeholder="Email" 
								/>
							</Form.Item>
							<Form.Item
								name="pass" 
								rules={[
									{ required: true, message: 'Enter password' }
								]}
							>
								<Input.Password
									addonBefore={<VpnKeyIcon />}
									placeholder="Password"
									iconRender={ (visible) => visible ? <VisibilityIcon /> : <VisibilityOffIcon /> }
								/>
							</Form.Item>
							<Form.Item>
								<Button 
									type="primary" 
									htmlType="submit"
								>
									{ authState === 'Register' ? 'Register' : 'Login' }
								</Button>
							</Form.Item>
						</Form>
						<div className='other-options'>
							<a href="#" onClick={handleForgotPassword}> Forgot password ? </a>
							<span>
								Don&apos;t have an account? 
								<a href="#" onClick={handleRegister}> Register </a>
							</span>
						</div>
					</div>
				}
				{ authState === 'Forgot Password' && 
					<div className='forgot-pass'>
						<Form variant="filled">
							<Form.Item 
								name="emailp" 
								rules={[
									{ required: true, message: 'Enter email' },
									{ pattern: '[a-zA-Z0-9.-_+]{1,}@[a-zA-Z0-9.+-_]{2,}[.]{1}[a-zA-Z]{2,}', message: 'Enter a valid email' }
								]}
							>
								<Input 
									addonBefore={ <EmailIcon /> }
									placeholder="Email" 
								/>
							</Form.Item>
							<Form.Item>
								<Button 
									type="primary" 
									htmlType="submit"
								>
									Reset Password
								</Button>
							</Form.Item>
						</Form>
						<div className='other-options'>
							<span>
								Try logging in again? 
								<a href="#" onClick={handleLogin}> Login </a>
							</span>
						</div>
					</div>
				}
			</div>
		</div>
	);
};

export default Auth;
