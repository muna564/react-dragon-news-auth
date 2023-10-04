import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="flex bg-[#F3F3F3] m-5 p-5">
      <button className="btn btn-secondary">Breaking News</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link to="/">
          I can be a React component, multiple React components.....
        </Link>
        <Link to="/">
          I can be a React component, multiple React components.....
        </Link>
        <Link to="/">
          I can be a React component, multiple React components.....
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
