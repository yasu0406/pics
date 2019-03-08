import './imageList.scss';
import React from 'react';
const ImageList = (props) => {
   const images = props.images.map(({ id, description, urls }) => {
        return (
                <img key={id} src={urls.regular} alt={description} />
        )
    });

    return(
        <div className="image-list">{images}</div>
    );
};

export default ImageList;