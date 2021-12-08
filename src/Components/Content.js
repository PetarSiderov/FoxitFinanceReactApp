import { TabContent } from "react-bootstrap";
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
        }
    ]; 
    return (
        <div className="top-news">
            <div className="container">
                <div className="row">
                    <LeftMainListPost postAtributes={leftListPost}></LeftMainListPost>
                    <RightMainListPost postAtributes={leftListPost}></RightMainListPost>
                </div>
            </div>
            
        </div>
        
    );
}

export default Content