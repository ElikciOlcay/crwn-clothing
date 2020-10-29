import React from 'react';
import '../collections-overview/collections-overview.styles.scss';

import CollectionPreview from '../preview-collection/colection-preview.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';


const CollectionsOverview = ({collections}) => (
    <div className="collection-overview">
    {
        collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
        ))
    }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);