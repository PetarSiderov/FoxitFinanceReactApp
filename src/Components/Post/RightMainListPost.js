import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Assets/lib/slick/slick.css'
import '../../Assets/lib/slick/slick-theme.css'

function RightMainListPost(props){
    
    
    const data = props.postAtributes.map((data,id)=> {
            return <div id={id+"T"} className="col-md-6">
                        <div  className="tn-img">
                            <img src={data.Img} alt="test" />
                                <div id={id+"T"} className="tn-title">
                                    <a href="">{data.Name} TESTTTTTT </a>
                                </div>
                            </div>
                        </div>
              
        })
    return (
        <>
        {data}
        </>
    );
}
export default RightMainListPost