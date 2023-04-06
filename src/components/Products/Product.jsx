import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { AddShoppingcart } from '@mui/icons-material';

const Product = ({ product, onAddToCart }) => {
    return (
        <Card>
            <CardMedia image={product.media.source} title={product.name} />
            <CardContent>
                <div>
                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant='h5'>
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: product.desciption }} variant='body2' color='textSecondary' />
            </CardContent>
            <CardActions>
                <IconButton aria-label='Add to Cart' onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingcart />
                </IconButton>
            </CardActions>
        </Card>
    )};

    export default Product