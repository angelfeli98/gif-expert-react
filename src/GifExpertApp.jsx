
import { useState } from 'react';

import CategoryInput from './components/categoryInput';
import GridGif from './components/GridGif';

const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onNewValue = (value) => {
        if(categories.includes(value))
            return;
        setCategories([...categories, value]);
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
