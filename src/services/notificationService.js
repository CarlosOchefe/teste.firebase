import { messaging } from '../firebase/config';
import { getToken } from 'firebase/messaging';

export const requestNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: 'YOUR_VAPID_KEY'
      });
      return token;
    }
    throw new Error('Notification permission denied');
  } catch (error) {
    console.error('Notification error:', error);
    throw error;
  }
};

export const subscribeToNotifications = async (userId) => {
  try {
    const token = await requestNotificationPermission();
    // Here you would typically send this token to your backend
    console.log('FCM Token:', token);
    return token;
  } catch (error) {
    console.error('Error subscribing to notifications:', error);
    throw error;
  }
};