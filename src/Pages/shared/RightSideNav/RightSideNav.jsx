import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-2xl font-bold">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle>
          Login With Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          Login With Github
        </button>
      </div>
      <div className="p-4 mb-6">
        <h2 className="text-2xl font-bold mb-4">Find Us On</h2>
        <a
          className="p-4 flex text-lg items-center border rounded-t-lg"
          href=""
        >
          <FaFacebook className="mr-3 text-blue-500"></FaFacebook>
          Facebook
        </a>
        <a className="p-4 flex text-lg items-center border-x" href="">
          <FaTwitter className="mr-3 text-sky-400"></FaTwitter>
          Twitter
        </a>
        <a
          className="p-4 flex text-lg items-center border rounded-b-lg"
          href=""
        >
          <FaInstagram className="mr-3 text-orange-400"></FaInstagram>
          Instagram
        </a>
      </div>
      {/* q zone */}
      <div className="p-4 space-y-3 mb-6 bg-[#F3F3F3] mt-4">
        <h2 className="text-2xl font-bold">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
