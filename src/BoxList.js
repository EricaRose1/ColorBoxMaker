import React, { useState } from 'react';
import Box from './Box'
import NewBoxForm from './NewBoxForm';

function BoxList() {
    const [boxes, setBoxes] = useState([]);

    const add = boxData => {
        setBoxes(boxes => [...boxes, boxData ])
    };

    const remove = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    };

    const boxComp = boxes.map(box => (
        <Box 
            key= {box.id}
            id= {box.id}
            width= {box.width}
            height= {box.height}
            handleRemove= {remove}
            backgroundColor={box.backgroundColor}
        />
    ));

    return (
        <div>
            <NewBoxForm addItem={add} />
            {boxComp}
        </div>
    );
}

export default BoxList;
