import React from 'react';
import SHOP_DATA from './shop.data.js'
import CollectionPreview from '../../components/collection-Preview/collection-Preview.component'

class ShopPage extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            collections: SHOP_DATA
        }
    }
    render () {
        const {collections} = this.state
        return (
            <div className = "shop-page">
                {collections.map(({id, ...otherStateProps}) => (
                        <CollectionPreview key = {id} {...otherStateProps} />
                    ))
                }
            </div>  
        )
    }
    
}
 
export default ShopPage;