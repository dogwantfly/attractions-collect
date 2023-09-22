import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { addAttraction, editAttraction } from './apis';

const AdminAttraction = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const role =  document.cookie.replace(
    /(?:(?:^|.*;\s*)role\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  const userId = document.cookie.replace(
    /(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ 
    mode: "onTouched",
    defaultValues: state.type === 'edit' ? state.attraction : {
      name: '',
      description: ''
    }
  })
  
  const onSubmit = async (data) => {
    if (role !== 'admin') {
      alert('您沒有操作權限')
      return;
    }
    
    try {
      let res;
      if (state.type === 'create') {
        res = await addAttraction({
          ...data,
          userId
        });
      } else if (state.type === 'edit') {
        res = await editAttraction({
          ...data,
          userId
        }, state.viewId);
      }
      if (res.status >= 200) {
        navigate('/admin')
      }
    } catch (err) {
      alert(err.response.data)
      if (err.response.status === 401) {
        navigate('/login');
      }
    }
  }

  return (
    <div className="row pt-5">
      <div className="col-lg-6 mx-auto">
        <h2 className='h3'>
          景點
          {state.type === 'create' && '新增'}
          {state.type === 'edit' && '編輯'}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">標題</label>
            <input
              type="text"
              className={`form-control ${errors.name && 'is-invalid'}`}
              id="title" 
              required {...register("name", {
                required: true, 
              })}
            />
            {errors.name && <div className="invalid-feedback">
              請填寫標題
            </div>}
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">內文</label>
            <input
              type="description"
              className={`form-control ${errors.description && 'is-invalid'}`}
              id="description"
              required {...register("description", {
              required: true,
            })}/>
            {errors.description && <div className="invalid-feedback">
              請填寫內文
            </div>}
          </div>

          <button type="submit" className="btn btn-primary">
            {state.type === 'create' && '新增'}
            {state.type === 'edit' && '編輯'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminAttraction;