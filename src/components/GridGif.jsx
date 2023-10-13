
import PropTypes from 'prop-types';

import Gif from './Gif';
import useFetchGifs from '../hooks/useFetchGifs';

function GridGif({category}) {

  const  [isLoading, gifs] = useFetchGifs(category);

  return (
    <>
      { isLoading && <h2> ...loading </h2> }

      { !isLoading && <div>
          <h2> {category} </h2>
            <ul className="card-grid" >
                {
                    gifs.map(gif => <Gif key={gif.id} gif={gif}/>)
                }
            </ul>
        </div>
      }
    </>
  )
}

GridGif.propTypes = {
    category: PropTypes.string.isRequired
}

export default GridGif;