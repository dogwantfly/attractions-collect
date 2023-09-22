
import { Link, useNavigate } from 'react-router-dom';
import { deleteAttraction, getAttractions } from './apis';
import { useEffect, useCallback, useState } from 'react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [attractionsList, setAttractionsList ] = useState([
    {
      "id": 1,
      "name": "阿拉伯博物館",
      "description": "阿拉伯博物館位於台北市，是台灣唯一專注於阿拉伯文化的博物館。它展示了阿拉伯世界的藝術、歷史和文化。"
    },
    {
      "id": 2,
      "name": "夢幻湖",
      "description": "夢幻湖位於台中市，是一個美麗的湖泊，被綠樹環繞。它是個放鬆的好地方，您可以在湖邊散步、釣魚或租船遊湖。"
    },
    {
      "id": 3,
      "name": "東北角暨宜蘭海岸國家風景區",
      "description": "東北角暨宜蘭海岸國家風景區位於宜蘭縣，擁有壯觀的海岸線、火山地形和多樣的生態。適合健行和觀賞海景。"
    }
  ])

  const getData = useCallback( async () => {
    try {
      const res = await getAttractions();
      setAttractionsList(res.data)
    } catch (err) {
      alert(err.response.data);
      if (err.response.status) {
        navigate('/login');
      }
    }
  },[setAttractionsList, navigate])

  useEffect(() => {
    getData()
  },[getData])

  const handleDelete = async (id) => {
    try {
      const res = await deleteAttraction(id);
      if (res.status >= 200) {
        alert('刪除成功')
        getData();
      }
    } catch (err) {
      alert(err.response.data)
    }
  }

  return (
    <table className="table table-hover">
      <thead className='table-dark'>
        <tr>
          <th scope="col" width="5%">#</th>
          <th scope="col" width="20%">標題</th>
          <th scope="col">內文</th>
          <th scope="col" width="20%">編輯</th>
        </tr>
      </thead>
      <tbody>
        {attractionsList.map((attraction, i) => (
          <tr key={attraction.id}>
            <th scope="row">{i + 1}</th>
            <td>{attraction.name}</td>
            <td>{attraction.description}</td>
            <td>
              <div className="btn-group" role="group" aria-label="Basic outlined example">
                <Link to="/admin/attraction" className="btn btn-outline-primary" state={{
                  type: 'edit',
                  viewId: attraction.id,
                  attraction
                }}>
                  編輯
                </Link>
                <button type="button" className="btn btn-outline-danger" onClick={() => handleDelete(attraction.id)}>刪除</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Dashboard;