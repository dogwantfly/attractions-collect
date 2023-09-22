
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const AttractionCard = ({ attraction, collect }) => {
  
  return (
    <li className='col'>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title text-truncate">{ attraction?.name || collect.name }</h3>
          <p className="card-text">{ attraction?.description || collect.description }</p>
          <Link to={ `/attraction/${attraction ? attraction.id : collect.viewId}` } className="card-link btn btn-primary">看詳細</Link>
        </div>
      </div>
    </li>
  );
};
AttractionCard.propTypes = {
  attraction: PropTypes.object,
  collect: PropTypes.object
}
export default AttractionCard;