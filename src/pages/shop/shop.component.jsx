import React from 'react';
<<<<<<< HEAD
=======
import CollectionPreview from '../../components/preview-collection/collection-preview.component';
>>>>>>> f9c4a19ae9d9d832cb507a36649da58e297a1f95
import './shop.styles.scss';
import { Route } from 'react-router-dom';

<<<<<<< HEAD
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collections/collection.component';



const ShopPage = ({ match }) => (
    <div className="shop-page">     
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
=======
import CollectionOverview from '../../components/collection-overview/collection-overview.component';



const ShopPage = ({ collections }) => (
    <div className="shop-page">
        <CollectionOverview/>
>>>>>>> f9c4a19ae9d9d832cb507a36649da58e297a1f95
    </div>
);


export default ShopPage;