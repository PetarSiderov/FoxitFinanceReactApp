
import 'bootstrap/dist/css/bootstrap.min.css';

function MiddleHeader(){
  return (
    <div className="brand">
             <div className="container">
                 <div className="row align-items-center">
                     <div className="col-lg-3 col-md-4">
                         <div className="b-logo">
                             <a href="index.html">
                                 <img src="../../Assets/img/logo.png" alt="Logo"/>
                             </a>
                         </div>
                     </div>
                     <div className="col-lg-6 col-md-4">
                         <div className="b-ads">
                             <a href="https://htmlcodex.com">
                                 <img src="img/ads-1.jpg" alt="Ads"/>
                             </a>
                         </div>
                     </div>
                     <div className="col-lg-3 col-md-4">
                         <div className="b-search">
                             <input type="text" placeholder="Search"/>
                             <button><i className="fa fa-search"></i></button>
                         </div>
                     </div>
                 </div>
             </div>
         </div>

  );
}


export default MiddleHeader
