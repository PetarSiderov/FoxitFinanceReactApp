import TinySlider from "tiny-slider-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Assets/lib/slick/slick.css'
import '../../Assets/lib/slick/slick-theme.css'
import SimpleImageSlider from "react-simple-image-slider";
import { Carousel } from 'react-responsive-carousel';

function LeftMainListPost(props){

    const settings = {
        lazyload: true,
        nav: true,
        mouseDrag: true,
        controls: true // remove built-in nav buttons
      }
    const logo1 = require('../../Assets/img/news-350x223-2.jpg').default;
    console.log(props)
  
    
    return (
    <div className="row">
            <div className="tn-img" style={{height: "102%"}}>
                <img src={props.postAtributes[0].Img} alt="test" />
                    <div className="tn-title">
                        <a href="">{props.postAtributes[0].Name}  </a>
                    </div>
            </div>
        </div>
    );
        
}

export default LeftMainListPost