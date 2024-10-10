// src/components/ArticleForm.js
import React, { useState } from 'react';

const ArticleForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you can handle the submitted data, e.g., sending it to a server
    const newArticle = {
      title,
      content,
      imgUrl,
      createdAt: new Date().toLocaleDateString(),
    };

    console.log("New Article Created:", newArticle);
    setMessage('Article created successfully!');

    // Clear the form
    setTitle('');
    setContent('');
    setImgUrl('');
  };

  return (
    <div className="article-form">
      <h1>Create Article</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <input
          type="text"
          placeholder="Image URL"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <button type="submit">Create Article</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ArticleForm;
