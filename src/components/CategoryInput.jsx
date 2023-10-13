
import { useState } from 'react';
import PropTypes from 'prop-types';

function CategoryInput({onNewValue}) {

    const [value, setValue] = useState('');

    const handlKeyUp = (e) => {
        if(e.key === 'Enter' && value.trim() !== '') {
            onNewValue(value);
            setValue('');
        }
    }

    return (
        <input
            type="text"
            placeholder="Categoria"
            onKeyUp={handlKeyUp}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    )
}

CategoryInput.propTypes = {
    onNewValue: PropTypes.func.isRequired
};

export default CategoryInput;