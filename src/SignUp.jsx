import { useForm } from "react-hook-form";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { signUp } from './apis';

const SignUp = () => {
  const navigate = useNavigate();

  const [, setValues] = useState({
    data: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleChange = (prop) => (event) => {
    setValues((prev) => ({
      ...prev,
      data: { ...prev.data, [prop]: event.target.value },
    }));
  };



  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "all",
  });


  const onSubmit = async(data) => {



    signUp({
      email: data.email,
      password: data.password
    })

      .then(function (response) {
        if (response.status === 201) {
          

          const { accessToken } = response.data;
          
          if (accessToken) {
            document.cookie = `accessToken=${accessToken};expires=${new Date(
              new Date().getTime() + 1000 * 3600
            )}`;
          }
          setTimeout(() => {
            navigate("/login");

          }, 0);
         
        }
      })
      .catch(function (error) {
        
        alert(error.response.data)
      });
  };


  return (
    <div className="container mt-5">


      <form
        className="col-lg-6 col-md-10 mx-auto bg-light bg-opacity-25 p-4 mb-5"
        onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-center display-5 fw-bold"> 註冊 </h2>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-bold">
            Email
          </label>
          <input
            type="email"
            className="form-control mb-1"
            id="email"
            name="email"
            placeholder="example@mail.com"
            {...register("email", {
              required: {
                value: true,
              },
              pattern: {
                value:
                  /* eslint-disable-next-line */
                  /^\S+@\S+$/i,
                message:
                  "請提供正確 Email 格式",
              },

              onChange: handleChange("email"),
            })}
            required
          />
          <span className="text-danger">{errors.email?.message}</span>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-bold">
            密碼
          </label>
          <div className="input-group mb-3">
            <input
              className="form-control border-end-0"
              id="password"
              name="password"
              autoComplete="new-password"
              required
              type={"password"}
              {...register("password", {
                required: true,
                minLength: {
                  value: 6,
                  message:
                    "至少需 6 碼",
                },
                onChange: handleChange("password"),
              })}
            />

          </div>
          <span className="text-danger text-pre-line">
            {errors.password?.message}
          </span>
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label fw-bold">
            確認密碼
          </label>
          <div className="input-group mb-3">
            <input
              className="form-control border-end-0"
              id="comfirmPassword"
              name="confirmPassword"
              required
              autoComplete="new-password"
              type={"password"}
              {...register("confirmPassword", {
                required: true,
                minLength: {
                  value: 6,
                  message:
                    "至少需 6 碼",
                },

                validate: (val) => {
                  if (val !== watch("password"))
                    return "密碼不一致";
                },
                onChange: handleChange("confirmPassword"),
              })}
            />

          </div>
          <span className="text-danger text-pre-line">
            {errors.confirmPassword?.message}
          </span>
        </div>
        <div
          className="d-flex justify-content-center"
        >
          <button
            className="btn btn-dark"
            type="submit"
          >
            註冊
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
