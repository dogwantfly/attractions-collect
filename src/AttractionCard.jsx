
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const AttractionCard = ({attraction}) => {
 
  return (
    <li className='col'>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title text-truncate">{attraction.name}</h3>
          <p className="card-text">{attraction.description}</p>
          <Link to={'/collect/1'} className="card-link btn btn-primary">看詳細</Link>
        </div>
      </div>
    </li>
  );
};
AttractionCard.propTypes = {
  attraction: PropTypes.object
}
export default AttractionCard;