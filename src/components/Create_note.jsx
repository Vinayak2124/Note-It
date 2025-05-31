import React, { useState } from 'react';

const NoteForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    setFormData({ title: '', description: '' });

    const existingNotes = JSON.parse(localStorage.getItem('note')) || [];

    const updatedNotes = [...existingNotes, formData];
    localStorage.setItem('note', JSON.stringify(updatedNotes));
  
  
    alert('Note created successfully!'); // Alert for successful submission 
   
     

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900 p-6 z-4">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-800 hover:scale-105 transition-transform duration-300 shadow-2xl rounded-2xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-bold text-white text-center">Create a Note</h2>

        {/* Title Field */}
        <div>
          <label htmlFor="title" className="block text-sm text-gray-300 mb-1">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-zinc-700 text-white placeholder-gray-400 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter title"
          />
        </div>

        {/* Description Field */}
        <div>
          <label htmlFor="description" className="block text-sm text-gray-300 mb-1">Description</label>
          <textarea
            name="description"
            id="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-zinc-700 text-white placeholder-gray-400 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            placeholder="Write your note..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-semibold transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
