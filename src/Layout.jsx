import { Outlet, Link } from 'react-router-dom';
const Layout = () => {

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Logo</span>
          <div className='d-flex'>
            <Link to="/" className='btn btn-outline-primary me-3'>回到首頁</Link>
            <Link to="/admin" className='btn btn-outline-primary me-3'>回到後台</Link>
            <Link to="/admin/attraction" className='btn btn-outline-primary me-3'>新增景點</Link>
            <Link to="/login" className='btn btn-outline-primary me-3'>登入</Link>
            <Link to="/register" className='btn btn-primary'>註冊</Link>
          </div>
        </div>
      </nav>
      <div className="container py-5">
        <Outlet />
      </div>
    </>
  );
};
export default Layout;