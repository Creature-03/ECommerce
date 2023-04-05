import React from "react";
import Grid from '@mui/material';

import Product from './Product/Product';

const products = [
    { id: 1, name: 'TestShoes', description: 'Shoes that let you walk on walls.' },
    { id: 2, name: 'TestShirt', description: 'Shirt with wings lets you fly.' },
];

const Products = () => {
    <main>
        <Grid container justify='center' spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} smn={6} md={4} lg={3}>
                    <Product />
                </Grid>
            ))}
        </Grid>
    </main>
}

export default Products;