import React from 'react';
import { connect } from 'react-redux'; 
import CollectionItem from '../../components/collection-item/collection-item.component';
import '../collections/collection.styles.scss';
import {selectCollection} from '../../redux/shop/shop.selectors';

const CollectionPage = ({collection: {items}}) => (
    <div className="collectionPage">
        {
            items.map(
                ({id, ...otherCollectionProps}) => (
                    <CollectionItem key={id} item={otherCollectionProps}/>
                )
            )
        }
    </div>
)

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);