import logo from './logo.svg';
import './App.css';
import TopHeader from './Components/Header/TopHeader';
import MiddleHeader from './Components/Header/MiddleHeader';
import NavBar from './Components/Header/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/lib/slick/slick.css'
import './Assets/lib/slick/slick-theme.css'
import Footer from './Components/Footer/Footer'
import FooterMenu from './Components/Footer/FooterMenu';
import FooterEnd from './Components/Footer/FooterEnd';
import Content  from './Components/Content';
import 'jquery'; 

function App() {
  const isAdmin = true;
  return (
  (<div className="">
      <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
        />
     {isAdmin &&  (<header className="">
        <TopHeader></TopHeader>
        <MiddleHeader></MiddleHeader>
        <NavBar></NavBar>
      </header> )}
      <div className="container" >
        Content 
        <Content></Content>
      </div>
      <footer>
        <Footer></Footer>
        <FooterMenu></FooterMenu>
        <FooterEnd></FooterEnd>
      </footer>
    </div>
    )
  );
}

export default App;
