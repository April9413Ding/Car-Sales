import React from 'react';

const AddedFeature = props => {
  console.log(props)
  const handleClick = (e) =>{
    props.removeFeature(props.feature);
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleClick}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
