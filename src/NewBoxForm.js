import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function NewBoxForm({ addItem }) {
    const [formData, setFormData] = useState({
        height: '',
        width: '',
        backgroundColor: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem({ ...formData, id: uuid() });
        setFormData({ height: "", width: "", backgroundColor: "" })
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='width'>Width</label>
                <input
                    id='width'
                    type='text'
                    name='width'
                    placeholder='Box Width'
                    value={formData.width}
                    onChange={handleChange}
                />
                <label htmlFor='height'>Height</label>
                <input
                    id='height'
                    type='text'
                    name='height'
                    placeholder='Box height'
                    value={formData.height}
                    onChange={handleChange}
                />
                <label htmlFor='background_color'>Select Color</label>
                <input
                    id='backgroundColor'
                    type='text'
                    name='backgroundColor'
                    placeholder='background color'
                    value={formData.backgroundColor}
                    onChange={handleChange}
                />
                <button id='newBoxButton'>Make Color Box</button>
            </form>
        </div>
    )
}

export default NewBoxForm;