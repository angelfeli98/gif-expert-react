
import { useState } from 'react';

import GridGif from './components/GridGif';
import CategoryInput from './components/CategoryInput';

const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onNewValue = (value) => {
        if(categories.includes(value))
            return;
        setCategories([value, ...categories]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>
            <CategoryInput onNewValue={onNewValue} />
            <div>
                {
                    categories.map(category =>
                        <GridGif key={category} category={category} />
                    )
                }
            </div>
        </>
    )
}

export default GifExpertApp;
