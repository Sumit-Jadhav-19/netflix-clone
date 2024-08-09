import devicePile from './device-pile-in.png';
export default function NetflixFourth(){
    return (
        <>
          <div className="h-75vh bg-black mt-2 d-flex align-items-center justify-content-center">
            <div className="row m-0 h-100">
              <div className="col-lg-1 col-md-1 col-sm-12"></div>
              <div className="col-lg-4 col-md-4 col-sm-12 d-flex flex-column justify-content-center">
                <h1 className="text-white fw-bold fs-50px">Watch everywhere</h1>
                <p className="fs-5 fw-medium text-start text-white">
                Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                </p>
              </div>
              <div className="col-lg-1 col-md-1 col-sm-12"></div>
              <div className="col-lg-4 col-md-4 col-sm-12 d-flex flex-column justify-content-center align-items-center position-relative">
                <video width="300" height="300" autoPlay loop muted className="position-absolute z-0" style={{top:"80px"}}>
                  <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <img src={devicePile} alt="device Pile" className="w-100 z-1" />
              </div>
            </div>
          </div>
        </>
      );
}