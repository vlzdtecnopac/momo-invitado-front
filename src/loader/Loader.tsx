import logoMomo from "../../assets/loading_logo.svg";
import "./Loader.scss";

export const LoaderPage = () =>{
    return (
    <div className="loader_page">
        <div className="loader_content">
        <img
        className="logo_page_loader"
        src={logoMomo}
        alt="logo"
      />
       <div className="loader_page_circle"></div>
       </div>
    </div>
   )
}