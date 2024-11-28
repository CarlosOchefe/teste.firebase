import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const NewsletterList = () => {
  const [newsletters, setNewsletters] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, 'newsletters'),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newsletterData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setNewsletters(newsletterData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Grid container spacing={3} className="p-4">
      {newsletters.map((newsletter) => (
        <Grid item xs={12} md={6} key={newsletter.id}>
          <Card elevation={2}>
            <CardContent>
              <Typography variant="h6" component="h2">
                {newsletter.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" className="mt-2">
                {newsletter.content}
              </Typography>
              <Typography variant="caption" className="mt-2 block">
                {newsletter.createdAt.toDate().toLocaleDateString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default NewsletterList;