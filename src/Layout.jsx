import { Outlet, Link, useNavigate } from 'react-router-dom';
const Layout = () => {
  const navigate = useNavigate();
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  const role = document.cookie.replace(
    /(?:(?:^|.*;\s*)role\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  const handleLogOut = () => {
    document.cookie = `accessToken=;`
    document.cookie = `userId=;`
    document.cookie = `role=;`
    navigate('/login');
  }
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Logo</span>
          <div className='d-flex'>
            <Link to="/" className='btn btn-outline-primary me-3'>回到首頁</Link>
            {role === 'admin'  && (
              <>
                <Link to="/admin" className='btn btn-outline-primary me-3'>回到後台</Link>
              </>
            )}
            {token && (
              <Link to="/collects" className='btn btn-outline-primary me-3'>查看收藏</Link>
            )}
            {token ? <button type="button" className='btn btn-outline-primary me-3' onClick={handleLogOut}>登出</button> :
              (<>
                <Link to="/login" className='btn btn-outline-primary me-3'>登入</Link>
                <Link to="/sign_up" className='btn btn-primary'>註冊</Link>
              </>)}


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