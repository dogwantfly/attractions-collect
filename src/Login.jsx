const Login = () => {

  return (
    <div className="row pt-5">
      <div className="col-lg-6 mx-auto">
        <h2 className='h3'>登入</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">帳號</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">密碼</label>
            <input type="password" className="form-control" id="password" />
          </div>

          <button type="submit" className="btn btn-primary">登入</button>
        </form>
      </div>
    </div>

  );
};
export default Login;