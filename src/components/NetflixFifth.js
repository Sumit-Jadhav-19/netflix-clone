import children from "./children.png";

export default function NetflixFifth(){
    return (
        <>
          <div className="bg-black mt-2 d-flex align-items-center justify-content-center pb-5">
            <div className="row m-0 h-100">
              <div className="col-lg-4 col-md-4 col-sm-12 d-flex flex-column justify-content-center ">
                <img src={children} alt="mobile" className="z-1" width={700}/>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12"></div>
              <div className="col-lg-5 col-md-5 col-sm-12 d-flex flex-column justify-content-center align-items-start">
                <h1 className="text-white fw-bold fs-50px">
                Create profiles for kids
                </h1>
                <p className="fs-5 fw-medium text-start text-white">
                Send children on adventures with their favourite characters in a space made just for them—free with your membership.
                </p>
              </div>
            </div>
          </div>
        </>
      );
}