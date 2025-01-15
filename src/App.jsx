import React, { useState, useEffect } from 'react';
import './App.css';
import PhotoCard from './components/PhotoCard';
import PhotoForm from './components/PhotoForm';
import { getImagesAPI, saveImageAPI, updateImageAPI, deleteImageAPI } from './server/allAPI'; // Import API functions

function App() {
  const [photos, setPhotos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Fetch all photos on component mount
  const fetchPhotos = async () => {
    try {
      const photos = await getImagesAPI();
      setPhotos(photos);
    } catch (error) {
      alert('Error fetching photos: ' + error.message);
    }
  };

  // Handle saving the photo (either add or update)
  const handleSave = async (title, description, link) => {
    const photo = { title, description, link };

    if (editIndex !== null) {
      try {
        // Update photo via API
        const updatedPhoto = await updateImageAPI(photos[editIndex].id, photo);
        const updatedPhotos = photos.map((photo, index) =>
          index === editIndex ? updatedPhoto : photo
        );
        setPhotos(updatedPhotos);
        setEditIndex(null);
        alert('Photo updated successfully');
      } catch (error) {
        alert('Error updating photo: ' + error.message);
      }
    } else {
      try {
        // Save new photo via API
        const savedPhoto = await saveImageAPI(photo);
        setPhotos([...photos, savedPhoto]);
        alert('Photo saved successfully');
      } catch (error) {
        alert('Error saving photo: ' + error.message);
      }
    }
  };

  // Handle deleting a photo
  const handleDelete = async (index) => {
    try {
      const deletedPhoto = await deleteImageAPI(photos[index].id);
      const updatedPhotos = photos.filter((_, i) => i !== index);
      setPhotos(updatedPhotos);
      alert('Photo deleted successfully');
    } catch (error) {
      alert('Error deleting photo: ' + error.message);
    }
  };

  // Handle editing a photo
  const handleEdit = (index) => {
    setEditIndex(index);
  };

  // Fetch photos when the component mounts
  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="App">
      <h1>Photo Gallery</h1>

      {/* Photo Form for adding or editing photos */}
      <PhotoForm onSave={handleSave} editIndex={editIndex} photos={photos} />

      {/* Gallery Display */}
      <div className="gallery">
        {photos.length > 0 ? (
          photos.map((photo, index) => (
            <PhotoCard
              key={photo.id} // Using photo ID as the unique key
              index={index}
              photo={photo}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p>No photos available. Please add some photos!</p>
        )}
      </div>
    </div>
  );
}

export default App;
