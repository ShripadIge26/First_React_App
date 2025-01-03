import {CARD_IMG_CDN_LINK} from '../components/Config'

const MenuItem = ({currentItem, onAdd, onRemove}) => {
    return (
        <li className="item" >
            {currentItem.imageId && <img className='menu-item-image' src={CARD_IMG_CDN_LINK + currentItem.imageId} />}
        {currentItem.name}
        {onAdd && <button onClick={() => onAdd(currentItem)}>Add</button>}
        {onRemove && <button onClick={() => onRemove(currentItem)}>Remove</button>}
    </li>
    )
}

export default MenuItem;