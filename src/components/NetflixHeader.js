export default function NetflixHeader() {
  return (
    <>
      <div className="header">
        <div className="logo d-flex justify-content-between align-items-center">
          <h1 className="text-red fw-bold">NETFLIX</h1>
          <div className="d-flex align-items-center gap-3">
            <select className="form-select  w-auto text-white" aria-label="Default select example" style={{backgroundColor:"transparent"}}>
              <option defaultValue={"English"}>English</option>
              <option value="1">हिंदी</option>
            </select>
            <button type="submit" className="btn bg-red ">Sign In</button>
          </div>
        </div>
        <div className="searchbar"></div>
      </div>
    </>
  );
}
