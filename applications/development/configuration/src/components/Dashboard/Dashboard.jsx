import './Dashboard.css';
import { Avatar } from 'antd';

const Dashboard = () => {
	console.log('Dashboard');
	return (
		<div className="dashboard-page">
			<div className='navbar'>
				<h2> Book My Show </h2>
				<Avatar> AM </Avatar>
			</div>
			<h1> Dashboard </h1>
		</div>
	);
};

export default Dashboard;
