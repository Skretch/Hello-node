import React from 'react';
import Item from './Item'

function Row(props){

    return(
        <div class="row">
            <Item title='Kampanje' value='1/3'/>
            <Item title='Lot' value='603038'/>
            <Item title='Produkt' value='PH30D630'/>
            <Item title='Start' value='30/04/20 12:32'/>
            <Item title='Slutt' value='30/04/20 20:46'/>
        </div>
    );
}

export default Row;