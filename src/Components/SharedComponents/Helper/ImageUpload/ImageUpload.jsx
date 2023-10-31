import  { useState } from 'react';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

                    
  return (
    <div className="flex items-center justify-center ">
      <div className="text-center h-36 w-36 border-4 border-cyan-500 rounded-full">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
          id="imageInput"
         
        />
        <label htmlFor="imageInput" className="cursor-pointer">
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Selected"
              className="h-32 w-36 object-cover rounded-full "
            />
          ) : (
            <div className="border border-dashed border-gray-500 mt-[150px] rounded-lg">
             Profile Img
            </div>
          )}
        </label>
      </div>
    </div>
  );
};

export default ImageUpload;