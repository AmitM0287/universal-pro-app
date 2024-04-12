import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => 
	<BrowserRouter>
		<Routes>
			<Route path='/' element={ <Navigate to={'/dashboard'} replace /> }></Route>
			<Route path='dashboard' element={ <Dashboard /> }></Route>
			<Route path='*' element={ <Navigate to={'/dashboard'} replace />}></Route>
		</Routes>
	</BrowserRouter>
;

export default App;
