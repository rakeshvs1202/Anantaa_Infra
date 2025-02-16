
import Footer from './app_components/Footer';
import Navbar from './app_components/Navbar'
import HomePage from '../app/home/HomePage'
export default function Home() {
  return (
    <div className='flex h-screen flex-col'>
    <Navbar/>
    <HomePage/>
    <Footer/>
    </div>
    
  );
}
