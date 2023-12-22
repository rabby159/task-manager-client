import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            {/* <Helmet>
                <title>autoMyOwn | Not Found</title>
            </Helmet> */}
            <div>
            <div className="flex items-center justify-center">

            <img className="w-[60vh]" src='https://i.ibb.co/bgRTN5R/notfound.jpg' alt="" />
            </div>
            <div className="flex justify-center mt-5">
            <Link className="" to='/'>
                <button className="btn btn-info">Go Home</button>
            </Link>
            </div>
        </div>
        </div>
    );
};

export default ErrorPage;