import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import TableList from '../../components/table/Table';
import './home.scss';
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className="widget-container">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="chart-container">
          <Featured />
          <Chart aspect={2 / 1} title="Last 6 Months Revenue" />
        </div>
        <div className="list-container">
          <div className="list-title">Latest Transactions</div>
          <TableList />
        </div>
      </div>
    </div>
  );
};
export default Home;
