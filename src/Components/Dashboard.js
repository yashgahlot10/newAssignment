import React, { useState } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDollarSign,
  faFileLines,
  faCoins,
  faBagShopping,
} from '@fortawesome/free-solid-svg-icons';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Sector,
  Cell,
} from 'recharts';

function Dashboard() {
  const [totalEarning, setTotalEarning] = useState('198K');
  const [totalOrders, setTotalOrders] = useState('158');
  const [balance, setBalance] = useState('2.4k');
  const [totalSales, setTotalSales] = useState('89k');
  const [monthlyEarning, setMonthlyEarning] = useState([
    { name: 'Jan', earn: 3168 },
    { name: 'Feb', earn: 2897 },
    { name: 'Mar', earn: 1258 },
    { name: 'Apr', earn: 3278 },
    { name: 'May', earn: 1780 },
    { name: 'Jun', earn: 2563 },
    { name: 'July', earn: 4013 },
    { name: 'Aug', earn: 3710 },
    { name: 'Sep', earn: 3560 },
    { name: 'Oct', earn: 4575 },
    { name: 'Nov', earn: 0 },
    { name: 'Dec', earn: 0 },
  ]);
  const [customers, setCustomers] = useState([
    { name: 'New Customers', value: 172 },
    { name: 'Old Customers', value: 578 },
    { name: 'Not Buy', value: 368 },
  ]);
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div className="DashboardContainer">
      <div>
        <FontAwesomeIcon
          icon={faDollarSign}
          size="2xl"
          style={{
            background: 'rgb(233,255,243)',
            color: 'rgb(12,173,82)',
            height: '10vh',
            width: '5vw',
            borderRadius: '40px',
          }}
        />
        <div>
          Total Earning{' '}
          <p style={{ fontSize: '5vh', fontWeight: 'bolder' }}>
            ${totalEarning}
          </p>
        </div>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faFileLines}
          size="2xl"
          style={{
            background: 'rgb(231,219,255)',
            color: 'rgb(166,16,255)',
            height: '10vh',
            width: '5vw',
            borderRadius: '40px',
          }}
        />
        <div>
          Total Orders{' '}
          <p style={{ fontSize: '5vh', fontWeight: 'bolder' }}>{totalOrders}</p>
        </div>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faCoins}
          size="2xl"
          style={{
            background: 'silver',
            color: 'yellow',
            height: '10vh',
            width: '5vw',
            borderRadius: '40px',
          }}
        />
        <div>
          Balance{' '}
          <p style={{ fontSize: '5vh', fontWeight: 'bolder' }}>${balance}</p>
        </div>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faBagShopping}
          size="2xl"
          style={{
            background: 'lightyellow',
            color: 'brown',
            height: '10vh',
            width: '5vw',
            borderRadius: '40px',
          }}
        />
        <div>
          Total Sales{' '}
          <p style={{ fontSize: '5vh', fontWeight: 'bolder' }}>${totalSales}</p>
        </div>
      </div>
      <div style={{ width: '70%' }}>
        <h3>Monthly Earning</h3>
        <BarChart
          width={600}
          height={300}
          data={monthlyEarning}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="earn" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </div>
      <div style={{ width: '20%', display: 'flex', flexDirection: 'column' }}>
        <h3>Visited Customers</h3>
        <PieChart width={170} height={200}>
          <Pie
            data={customers}
            cx={90}
            cy={120}
            innerRadius={50}
            outerRadius={70}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {customers.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                name="hey"
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            <Legend />
          </Pie>
        </PieChart>
      </div>
    </div>
  );
}

export default Dashboard;
