import React from "react";
import PropTypes from "prop-types";

const ImageComponent = (props) => {
   return (
      <div>
         <div className="break-inside-avoid">
            <img className="rounded-lg hover:shadow-lg" src={props.image} />
            <p>{props.title}</p>
         </div>
      </div>
   );
};

ImageComponent.propTypes = {
   image: PropTypes.string,
   title: PropTypes.string,
}

export default ImageComponent;
