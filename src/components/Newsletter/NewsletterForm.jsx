import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { TextField, Button, Paper, Typography } from '@mui/material';
import toast from 'react-hot-toast';

const NewsletterForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'newsletters'), {
        title,
        content,
        createdAt: new Date(),
        likes: 0
      });
      toast.success('Newsletter published successfully!');
      setTitle('');
      setContent('');
    } catch (error) {
      toast.error('Error publishing newsletter');
      console.error('Error:', error);
    }
  };

  return (
    <Paper elevation={3} className="p-6 max-w-2xl mx-auto">
      <Typography variant="h5" className="mb-4">
        Create Positive Newsletter
      </Typography>
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField
          fullWidth
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextField
          fullWidth
          label="Content"
          multiline
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <Button 
          variant="contained" 
          type="submit"
          className="bg-blue-600 hover:bg-blue-700"
        >
          Publish
        </Button>
      </form>
    </Paper>
  );
};

export default NewsletterForm;