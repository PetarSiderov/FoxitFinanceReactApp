import TinySlider from "tiny-slider-react";
import 'bootstrap/dist/css/bootstrap.min.css';
function LeftMainListPost(props){

    const settings = {
        lazyload: true,
        nav: false,
        mouseDrag: true,
        controls: false // remove built-in nav buttons
      }
    console.log(props)
    return(
        <div className="col-md-6 tn-left">
            <div className="row tn-slider">
                <div className="col-md-6">
                <div className="tn-img">
                    <TinySlider settings={settings}>
                            {(props != null && props != undefined) && props.postAtributes.map((el, index) => (
                            <div key={index} className="tn-title">
                                <img
                                    className={`tns-lazy-img`}
                                    src={el.Img}
                                    alt=""
                                />
                                el.Name
                            </div>
                            ))}
                        </TinySlider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftMainListPost