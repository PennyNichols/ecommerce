import React from 'react';
import { Grid } from '@mui/material';

import Product from './Product/Product';

const products = [
    { id: 1, name: 'Shoes', description: 'Running Shoes.', price: '$74.99'},
    { id: 2, name: 'Macbook', description: 'Apple Macbook.', price: '$2,379.99'},
];



const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;