import React from 'react';
import CollectionPreview from '../../components/preview-collection/collection-preview.component';
import './shop.styles.scss';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';



const ShopPage = ({ collections }) => (
    <div className="shop-page">
        <CollectionOverview/>
    </div>
);


export default ShopPage;