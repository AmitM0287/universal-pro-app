import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Auth from './components/Auth/Auth';

const App = () => 
	<BrowserRouter>
		<Routes>
			<Route path='/' element={ <Navigate to={'/login'} replace /> }></Route>
			<Route path='login' element={ <Auth /> }></Route>
			<Route path='register' element={ <Auth /> }></Route>
			<Route path='forgot-password' element={ <Auth /> }></Route>
			<Route path='*' element={ <Navigate to={'/login'} replace />}></Route>
		</Routes>
	</BrowserRouter>
;

export default App;
