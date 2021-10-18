import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routeNames";

const HomePage = () => {
    return (
        <div>
            <Link to={ROUTES.COUNT_PAGE}><button>Counter Page</button></Link>
            <h1>Home page</h1>
        </div>
    );
};

export default HomePage;