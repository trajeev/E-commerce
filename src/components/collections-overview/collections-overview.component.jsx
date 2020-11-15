import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors'
import CollectionPreview from '../collection-Preview/collection-Preview.component'

import './collections-overview.styles.scss'

const CollectionsOverview = ({collections}) => (
    <div className = 'collections-overview'>
        {collections.map(({id, ...otherStateProps}) => (
            <CollectionPreview key = {id} {...otherStateProps} />
        ))
        }
    </div> 
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)