import { Link } from "react-router-dom";
import { Button } from "../styles";

const Home = () => {
  return (
    <div>
      <Link to="/signup">
        <Button type="button" className="btn btn-danger btn-lg">
          Create Account
        </Button>
      </Link>
      <Link to="/signin">
        <Button type="button" className="btn btn-danger btn-lg">
          Already Have Account
        </Button>
      </Link>
    </div>
  );
};
export default Home;
