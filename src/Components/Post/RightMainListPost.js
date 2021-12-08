import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Assets/lib/slick/slick.css'
import '../../Assets/lib/slick/slick-theme.css'
function RightMainListPost(props){
    debugger 
    console.log("RIGHNT MAIN LIST POST ", props)

    
    const data = props.postAtributes.map((data,id)=> {
            return <div class="col-md-6">
                                <div class="tn-img">
                        <div id={id} className="tn-img">
                            <img src={data.img} alt="test" />
                            <div className="tn-title">
                                <a href="">{data.Name} TESTTTTTT </a>
                            </div>
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