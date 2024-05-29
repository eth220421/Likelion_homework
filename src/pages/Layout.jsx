import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './Layout.css';

export default function Layout() {
  return (
    <div>
        <div id='top'>
            <Header />
        </div>
        <div id='middle'>
            <Outlet />
        </div>
        <div id='bottom'>
            <Footer />
        </div>
    </div>
  );
}