import React from 'react';

function PhotoCard({ photo, index, onEdit, onDelete }) {
  return (
    <div className="photo-card">
      <h3>{photo.title}</h3>
      <p>{photo.description}</p>
      <img src={photo.link} alt={photo.title} style={{ width: '100%' }} />
      <div className="buttons">
        <button onClick={() => onEdit(index)}>Edit</button>
        <button onClick={() => onDelete(index)}>Delete</button>
      </div>
    </div>
  );
}

export default PhotoCard;
