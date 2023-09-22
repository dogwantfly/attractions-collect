import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { login } from './apis';

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched" })

  const onSubmit = async (data) => {
    try {
      const res = await login(data);
      const { accessToken, user } = res.data;
      if (accessToken) {
        document.cookie = `accessToken=${accessToken};`;
        document.cookie = `userId=${user.id};`;
        if (user.role === 'admin') {
          document.cookie = `role=${user.role};`;
          navigate('/admin');
        } else {
          navigate('/');
        }
      }
    } catch (err) {
      alert(err.response.data)
    }
  }

  return (
    <div className="row pt-5">
      <div className="col-lg-6 mx-auto">
        <h2 className='h3'>登入</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">帳號</label>
            <input type="email" className={`form-control ${errors.email && 'is-invalid'}`} id="email" aria-describedby="emailHelp" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
            {errors.email && <div className="invalid-feedback">
              須為正確 Email 格式
            </div>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">密碼</label>
            <input type="password" className={`form-control ${errors.password && 'is-invalid'}`} id="password" {...register("password", { required: true, minLength: 6 })} />
            {errors.password && <div className="invalid-feedback">
              至少需 6 碼
            </div>}
          </div>
          <button type="submit" className="btn btn-primary">登入</button>
        </form>
      </div>
    </div>
  );
};

export default Login;