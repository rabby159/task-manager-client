import dev from "../../assets/image/dev.png";
import bank from "../../assets/image/bank.png";
import pManager from "../../assets/image/projectManger.png";

const UseCase = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 bg-blue-400 flex rounded-lg" data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1000">
      <div className="flex-1">
        <div className="flex justify-center items-center">
          <div className="mt-20">
            <h2 className="text-4xl text-white font-bold mb-5"> Who use? </h2>
            <button className="btn btn-outline">Check out</button>
          </div>
        </div>
      </div>
      <div className="flex-1" data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1000">
        <div className="flex p-5 gap-5">
          <div className="bg-base-100 rounded-xl">
            <img src={dev} alt="" />
            <p className="text-center">Developers</p>
          </div>
          <div className="bg-base-100 rounded-xl">
            <img src={bank} alt="" />
            <p className="text-center">Bankers</p>
          </div>
          <div className="bg-base-100 rounded-xl">
            <img src={pManager} alt="" />
            <p className="text-center">Project Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default UseCase;
