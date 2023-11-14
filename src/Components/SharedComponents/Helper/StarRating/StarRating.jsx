//import  { useState } from 'react';

const StarRating = ({ selectedStars, setSelectedStars,clearFilter  }) => {
  //const [selectedStars, setSelectedStars] = useState([]);

  const handleStarClick = (selectedRating) => {
    const updatedStars = selectedStars.includes(selectedRating)
      ? selectedStars.filter((star) => star !== selectedRating)
      : [...selectedStars, selectedRating];

    setSelectedStars(updatedStars);
    console.log(`User selected ${selectedRating} stars.`);
    console.log('Selected stars array:', updatedStars);
  };

  const stars = [1, 2, 3, 4, 5].map((index) => (
    <span
      key={index}
      onClick={() => handleStarClick(index)}
      className={`cursor-pointer text-2xl ${
        selectedStars.includes(index) ? 'text-yellow-500' : 'text-gray-300'
      }`}
    >
      ★
    </span>
  ));

  return (
    <div>
      {/* <h2 className="text-xl mb-4 ">Rate this:</h2> */}
      {stars} 
      <div className=" ml-2 inline">
         {selectedStars.length} / {stars.length}
      </div>
    </div>
  );
};

export default StarRating;