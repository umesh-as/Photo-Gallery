import React, { useState, useEffect } from 'react';

function PhotoForm({ onSave, editIndex, photos }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    if (editIndex !== null) {
      const photoToEdit = photos[editIndex];
      setTitle(photoToEdit.title);
      setDescription(photoToEdit.description);
      setLink(photoToEdit.link);
    } else {
      setTitle('');
      setDescription('');
      setLink('');
    }
  }, [editIndex, photos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !link) {
      alert('Please fill in all the fields');
      return;
    }
    onSave(title, description, link);
    setTitle('');
    setDescription('');
    setLink('');
  };

  return (
    <div className="photo-form">
      <h2>{editIndex !== null ? 'Edit Photo' : 'Add Photo'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Image Link"
        />
        <button type="submit">{editIndex !== null ? 'Update' : 'Save'}</button>
      </form>
    </div>
  );
}

export default PhotoForm;
