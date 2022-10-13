import React, { Component } from 'react';

const Products = ({datas}) => {
    return ( <React.Fragment>
            <h1>Termékek</h1>
            {
                datas && datas
            }
        </React.Fragment> );
}
 
export default Products;