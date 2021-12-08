import LeftMainListPost from "./Post/LeftListMainPost";
import RightMainListPost from "./Post/RightMainListPost";


function Content(){
    const leftListPost = [
        {
            Name: "Lorem ipsum dolor sit amet",
            Link: "",
            Img: "../../Assets/img/news-450x350-1.jpg"
        },
        {
            Name: "Lorem ipsum dolor sit amet",
            Link: "",
            Img: "../../Assets/img/news-450x350-2.jpg"
        },
        {
            Name: "Lorem ipsum dolor sit amet",
            Link: "",
            Img: "../../Assets/img/news-450x350-2.jpg"
        },
        {
            Name: "Lorem ipsum dolor sit amet",
            Link: "",
            Img: "../../Assets/img/news-450x350-2.jpg"
        }
    ]; 
    return (
        <div className="top-news">
            <div className="container">
                <div className="row">
                    <LeftMainListPost postAtributes={leftListPost}></LeftMainListPost>
                    <div  className="col-md-6 tn-right">
                        <div  className="row">
                            <RightMainListPost postAtributes={leftListPost}></RightMainListPost>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
        
    );
}

export default Content