export default function NetflixRegister() {
  return (
    <>
      <span className="text-white fs-5 fw-medium">
        Ready to watch? Enter your email to create or restart your membership.
      </span>
      <div className="d-flex justify-content-center align-items-center gap-2 mt-2 ">
        <div className="form-floating">
          <input
            type="email"
            className="form-control "
            id="floatingInput"
            placeholder="name@example.com"
            style={{width:"350px"}}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <button className="btn bg-red fs-4 fw-medium" style={{height:"100%"}}>
          Get Started <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </>
  );
}
