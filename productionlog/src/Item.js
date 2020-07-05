import React from 'react';

function Item(props){
        
    return(
        <div class="column">
            <h1 class="data"><u>{props.title}</u> <br/>{props.value}</h1>
        </div>
    )
}

export default Item;