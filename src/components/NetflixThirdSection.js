import mobile from "./mobile-0819.jpg";
import boxshot from "./boxshot.png";

export default function NetflixThirdSection() {
  return (
    <>
      <div className="h-75vh bg-black mt-2 d-flex align-items-center justify-content-center">
        <div className="row m-0 h-100">
          <div className="col-lg-1 col-md-1 col-sm-12"></div>
          <div className="col-lg-4 col-md-4 col-sm-12 d-flex flex-column justify-content-center ">
            <img src={mobile} alt="mobile" className="z-1" />
            <div className="text-white mobile d-flex align-items-center gap-3 mobile-div justify-content-between" style={{width:"300px"}}>
              <div className="d-flex align-items-center gap-3">
                <img src={boxshot} alt="boxshot" className="z-1" width={50} />
                <div className="d-flex flex-column">
                  <span className="fw-medium">Stranger Things</span>
                  <span className="text-primary">Downloading...</span>
                </div>
              </div>
              <span className="pe-2">
                <i className="bi bi-arrow-down fs-5"></i>
              </span>
            </div>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-12"></div>
          <div className="col-lg-5 col-md-5 col-sm-12 d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-white fw-bold fs-50px">
              Download your shows to watch offline
            </h1>
            <p className="fs-5 fw-medium text-start text-white">
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
