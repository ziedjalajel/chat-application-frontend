import { Link } from "react-router-dom";
//styles
import { HomeButton, HomeDiv, HomeTitleDiv } from "../styles";

const Home = () => {
  return (
    <>
      <HomeTitleDiv className="container">
        <h1>Welcome To PikaChat</h1>
      </HomeTitleDiv>
      <HomeDiv>
        <Link to="/signup">
          <HomeButton type="button" className="btn btn-danger btn-lg">
            Create Account
          </HomeButton>
        </Link>
        <Link to="/signin">
          <HomeButton type="button" className="btn btn-danger btn-lg">
            Already Have Account
          </HomeButton>
        </Link>
      </HomeDiv>
    </>
  );
};
export default Home;
