import './Dashboard.component.css';
import { Card } from 'antd';


const Dashboard = () => {
	console.log('hey');
	return (
		<div className='dashboard'>
			<Card className='card' title="Card title" bordered={false} style={{ width: 250 }}>
				<p>Card content</p>
			</Card>
		</div>
	);
};

export default Dashboard;
