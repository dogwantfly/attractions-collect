

const AdminAttraction= () => {
 
  return (
    <div className="row pt-5">
      <div className="col-lg-6 mx-auto">
        <h2 className='h3'>景點編輯</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">標題</label>
            <input type="text" className="form-control" id="title" aria-describedby="emailHelp" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">內文</label>
            <input type="description" className="form-control" id="description" required/>
          </div>

          <button type="submit" className="btn btn-primary">新增</button>
        </form>
      </div>
    </div>
  );
};

export default AdminAttraction;