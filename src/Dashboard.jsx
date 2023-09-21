
import {Link} from 'react-router-dom'
const Dashboard = () => {
  const attractionsList = [

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
    },
    {
      "id": 4,
      "name": "日月光中心",
      "description": "日月光中心是台中市的大型購物中心，擁有眾多國際品牌、餐廳和娛樂設施。這裡是購物和娛樂的好去處。"
    },
    {
      "id": 5,
      "name": "澎湖縣",
      "description": "澎湖縣是台灣的離島之一，以美麗的沙灘、潛水點和海鮮美食而聞名。您可以在這裡享受陽光和海灘。"
    }


  ]
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
        {attractionsList.map(attraction => (
          <tr key={attraction.id}>
            <th scope="row">{attraction.id}</th>
            <td>{attraction.name}</td>
            <td>{attraction.description}</td>
            <td>
              <div className="btn-group" role="group" aria-label="Basic outlined example">
                <Link to="/admin/attraction" className="btn btn-outline-primary">編輯</Link>
                <button type="button" className="btn btn-outline-danger">刪除</button>
              </div>
            </td>
          </tr>
        ))}
       
      </tbody>
    </table>
  );
};
export default Dashboard;