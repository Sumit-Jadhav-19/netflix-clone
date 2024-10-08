import tvPng from "./tv.png";
export default function NetflixSecond() {
  return (
    <>
      <div className="h-75vh bg-black mt-2 d-flex align-items-center justify-content-center">
        <div className="row m-0 h-100">
          <div className="col-lg-1 col-md-1 col-sm-12"></div>
          <div className="col-lg-4 col-md-4 col-sm-12 d-flex flex-column justify-content-center">
            <h1 className="text-white fw-bold fs-50px">Enjoy on your TV</h1>
            <p className="fs-5 fw-medium text-start text-white">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-12"></div>
          <div className="col-lg-4 col-md-4 col-sm-12 d-flex flex-column justify-content-center align-items-center">
            <video width="500" height="370" autoPlay loop muted className="position-absolute z-0" style={{top:""}}>
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <img src={tvPng} alt="TV " className="z-1" />
          </div>
        </div>
      </div>
    </>
  );
}
