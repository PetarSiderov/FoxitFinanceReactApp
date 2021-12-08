
function RightMainListPost(props){
    debugger 
    console.log("RIGHNT MAIN LIST POST ", props)
    
    const data = props.postAtributes.map((data,id)=> {
            return <div key={id} className="col-md-6 tn-right">
                        <div className="row">
                        <div className="tn-img">
                            <img src={data.Img} />
                            <div className="tn-title">
                                <a href="">{data.Name}</a>
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