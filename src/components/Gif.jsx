
import Proptypes from 'prop-types';

function Gif({gif}) {
  return (
    <li className="card">
        <img
            src={gif.url}
            alt={gif.title}
        />
        <p> { gif.title } </p>
    </li>
  )
}

Gif.propTypes = {
    gif: Proptypes.object.isRequired,
}

export default Gif;