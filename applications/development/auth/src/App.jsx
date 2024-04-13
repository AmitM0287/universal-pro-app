import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Auth from './components/Auth/Auth';

const App = () => 
	<BrowserRouter>
		<Routes>
			<Route path='/auth/' element={ <Navigate to={'/auth/login'} replace /> }></Route>
			<Route path='/auth/login' element={ <Auth /> }></Route>
			<Route path='/auth/register' element={ <Auth /> }></Route>
			<Route path='/auth/forgot-password' element={ <Auth /> }></Route>
			<Route path='/*' element={ <Navigate to={'/auth/login'} replace />}></Route>
		</Routes>
	</BrowserRouter>
;

export default App;
