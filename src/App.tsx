import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login.component';
import Signup from './components/signup/Signup.component';
import Logout from './components/logout/Logout.component';
import Dashboard from './components/dashboard/Dashboard.component';


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={ <Navigate to={'user/login'} />} />
				<Route path='user/login' element={ <Login /> } />
				<Route path='user/signup' element={ <Signup /> } />
				<Route path='user/logout' element={ <Logout /> } />
				<Route path='user/dashboard' element={ <Dashboard /> } />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
