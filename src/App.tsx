import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login.component';
import Signup from './components/signup/Signup.component';
import Dashboard from './components/dashboard/Dashboard.component';
import ResetPassword from './components/resetPassword/ResetPassword.component';
import Counter from './components/counter/Counter.component';


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={ <Navigate to={'user/login'} />} />
				<Route path='user/login' element={ <Login /> } />
				<Route path='user/signup' element={ <Signup /> } />
				<Route path='user/resetPassword' element={ <ResetPassword /> } />
				<Route path='user/dashboard' element={ <Dashboard /> } />
				<Route path='counter-app' element={ <Counter /> } />
				<Route path='*' element={ <Navigate to={'user/login'} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
