import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';

const App = () => 
	<BrowserRouter>
		<Routes>
			<Route path='/' element={ <Navigate to={'/home'} replace /> }></Route>
			<Route path='/home' element={ <Home /> }></Route>
			<Route path='*' element={ <Navigate to={'/home'} replace />}></Route>
		</Routes>
	</BrowserRouter>
;

export default App;
