import LeftMainListPost from "./Post/LeftListMainPost";
import RightMainListPost from "./Post/RightMainListPost";
import MiddleMainCategory from "./CategoryMainPage/MiddleMainCategory";

function Content(){
    const leftListPost = [
        {
            Name: "Lorem ipsum dolor sit amet",
            Link: "",
            Img: "https://image.freepik.com/free-vector/red-yellow-news-business-company-logo_23-2148462311.jpg"
        },
        {
            Name: "Lorem ipsum dolor sit amet",
            Link: "",
            Img: "https://image.freepik.com/free-vector/red-yellow-news-business-company-logo_23-2148462311.jpg"
        },
        {
            Name: "Lorem ipsum dolor sit amet",
            Link: "",
            Img: "https://image.freepik.com/free-vector/red-yellow-news-business-company-logo_23-2148462311.jpg"
        },
        {
            Name: "Lorem ipsum dolor sit amet",
            Link: "",
            Img: "https://image.freepik.com/free-vector/red-yellow-news-business-company-logo_23-2148462311.jpg"
        }
    ]; 

    const mostReadedPost = [{
        Name: "Lorem ipsum dolor sit amet",
        Link: "",
        Img: "https://image.freepik.com/free-vector/red-yellow-news-business-company-logo_23-2148462311.jpg"
    }];


    const Sports = [
        {
            Title: "Sport",
            CategoryPost: [{
                Id:1,
                Name: "Lorem ipsum dolor sit amet",
                Link: "",
                Img: "https://image.freepik.com/free-vector/red-yellow-news-business-company-logo_23-2148462311.jpg"
            },
            {
                Id:2,
                Title: "Techonology",
                Name: "Lorem ipsum dolor sit amet",
                Link: "",
                Img: "https://image.freepik.com/free-vector/red-yellow-news-business-company-logo_23-2148462311.jpg"
            },
            {
                Id:3,
                Title: "Techonology",
                Name: "Lorem ipsum dolor sit amet",
                Link: "",
                Img: "https://image.freepik.com/free-vector/red-yellow-news-business-company-logo_23-2148462311.jpg"
            },
            {
                Id:4,
                Title: "Techonology",
                Name: "Lorem ipsum dolor sit amet",
                Link: "",
                Img: "https://image.freepik.com/free-vector/red-yellow-news-business-company-logo_23-2148462311.jpg"
            }
            ]
        }
    ]; 

    const Techonology = [
        {
            Title: "Techonology",
            CategoryPost: [{
                Id:"1",
                Name: "Lorem ipsum dolor sit amet",
                Link: "",
                Img: "https://image.freepik.com/free-vector/red-yellow-news-business-company-logo_23-2148462311.jpg"
            },
            {
                Id:"2",
                Title: "Techonology",
                Name: "Lorem ipsum dolor sit amet",
                Link: "",
                Img: "https://image.freepik.com/free-vector/red-yellow-news-business-company-logo_23-2148462311.jpg"
            },
            {
                Id:"3",
                Title: "Techonology",
                Name: "Lorem ipsum dolor sit amet",
                Link: "",
                Img: "https://image.freepik.com/free-vector/red-yellow-news-business-company-logo_23-2148462311.jpg"
            },
            {
                Id:"4",
                Title: "Techonology",
                Name: "Lorem ipsum dolor sit amet",
                Link: "",
                Img: "https://image.freepik.com/free-vector/red-yellow-news-business-company-logo_23-2148462311.jpg"
            }
            ]
        }
    ]; 
    return (
        <div className="top-news">
            <div className="container">
                <div className="row">
                <div  className="col-md-6 tn-left">
                    <h1>Top post</h1>
                        <div  className="row">
                             <LeftMainListPost postAtributes={mostReadedPost}></LeftMainListPost>
                        </div>
                </div>
                <div  className="col-md-6 tn-right">
                    <h1>Popular posts</h1>
                        <div  className="row">
                            <RightMainListPost postAtributes={leftListPost}></RightMainListPost>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="cat-news">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <MiddleMainCategory category={Techonology}></MiddleMainCategory>
                        </div>
                        <div className="col-md-6">
                            <MiddleMainCategory category={Sports}></MiddleMainCategory>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    );
}

export default Content