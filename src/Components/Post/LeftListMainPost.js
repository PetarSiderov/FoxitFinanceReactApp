import TinySlider from "tiny-slider-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Assets/lib/slick/slick.css'
import '../../Assets/lib/slick/slick-theme.css'
import SimpleImageSlider from "react-simple-image-slider";
function LeftMainListPost(props){

    const settings = {
        lazyload: true,
        nav: true,
        mouseDrag: true,
        controls: true // remove built-in nav buttons
      }
    const logo1 = require('../../Assets/img/news-350x223-2.jpg').default;
    console.log(props)
    debugger
    // const slider = props && props.postAtributes.map((el, index) => {
    //      return  <TinySlider settings={settings}>
    //     <div key={index+"T"} className="tn-title">
    //         <img
    //             className={`tns-lazy-img`}
    //             src={require(el.Img).default}
    //             alt=""
    //         />
    //         el.Name
    //     </div>
    // </TinySlider>
    // })
    return(
        <div className="col-md-6 tn-left">
            <div className="row tn-slider">
                <div className="col-md-6">
                <div className="tn-img">
                       {props && props.postAtributes.map((el, index) => {
                          <TinySlider settings={settings}>
                            <div key={index+"T"} className="tn-title">
                                <img
                                    className={`tns-lazy-img`}
                                    src={require("../../Assets/img/ads-1.jpg").default}
                                    alt="TEST"
                                    alt=""
                                />
                                <div>{el.Name}</div>
                            </div>
                        </TinySlider>
                        })}
                        {props.postAtributes.map((el, index) => {
                        // <SimpleImageSlider
                        // width={896}
                        // height={504}
                        // images={el.Img}
                        // showBullets={true}
                        // showNavs={true}
                        // />
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftMainListPost