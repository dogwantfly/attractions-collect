
import { useNavigate } from "react-router-dom";
import { useEffect, useCallback, useState } from 'react';
import { getAttractions } from './apis';
import AttractionCard from './AttractionCard';

const Attractions = () => {
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
  
  return (
    <>
      <h2 className='h3'>景點列表</h2>
      <ul className="list-unstyled row row-cols-md-2 row-cols-lg-4 g-3">
        {attractionsList.map(attraction => (
        <AttractionCard key={attraction.id} attraction={attraction}/>))}
      </ul>
    </>
  );
};
export default Attractions;