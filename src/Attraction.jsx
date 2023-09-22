import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useCallback, useState, useMemo } from 'react';
import { collect, getAttraction, getCollects, deleteCollect } from './apis';

const Attraction = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [collects, setCollects] = useState([]);

  const [attraction, setAttraction] = useState({
    name: '夢幻湖',
    description: '夢幻湖位於台中市，是一個美麗的湖泊，被綠樹環繞。它是個放鬆的好地方，您可以在湖邊散步、釣魚或租船遊湖。',
    viewId: id
  })

  const token = useMemo(() => document.cookie.replace(
    /(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  ), []);

  const userId = useMemo(() => document.cookie.replace(
    /(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  ), []);

  const handleCollect = async () => {
    try {
      await collect({
        name: attraction.name,
        description: attraction.description,
        userId,
        viewId: id
      });
      const collects = await getCollects(userId);
      setCollects(collects.data);
    } catch (error) {
      alert(error.response.data);
    }
  }

  const getData = useCallback(async () => {
    try {
      const res = await getAttraction(id);
      if (token) {
        const collects = await getCollects(userId);
        setCollects(collects.data);
      }
      setAttraction(res.data)
    } catch (err) {
      alert(err.response.data);
      if (err.response.status === 401) {
        navigate('/login');
      }
    }
  }, [setAttraction, navigate, id, userId, token])

  useEffect(() => {
    getData()
  }, [getData])

  const handleDeleteCollect = useCallback(async (collectId) => {
    try {
      await deleteCollect(collectId);
      const collects = await getCollects(userId);
      setCollects(collects.data);
    } catch (err) {
      alert(err.response.data);
      if (err.response.status === 401) {
        navigate('/login');
      }
    }
  }, [navigate, userId])

  const collectId = useMemo(() =>
    collects.length > 0
      ? collects.find(item => item.viewId == id)?.id : '', [collects, id])

  return (
    <section>
      <h2 className='h3'>{attraction.name}</h2>
      <p>
        {attraction.description}
      </p>
      {token && collects.length > 0 && collects.map(item => item.viewId).includes(id) ? (
        <button type="button" className='btn btn-outline-primary' onClick={() => handleDeleteCollect(collectId)}>
          取消收藏
        </button>
      ) : (
        token && (!collects.length || !collects.map(item => item.viewId).includes(id)) && (
          <button type="button" className='btn btn-primary' onClick={handleCollect}>
            收藏
          </button>
        )
      )}
    </section>
  );
};

export default Attraction;