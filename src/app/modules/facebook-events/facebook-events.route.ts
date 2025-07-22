import express from 'express';
import { FacebookEventsController } from './facebook-events.controller';

const router = express.Router();

// Route for sending events with Meta Business documentation payload structure
router.post('/send-event', FacebookEventsController.sendEventsToFacebook);

// Route for sending test purchase event
router.get('/test-purchase', FacebookEventsController.sendTestPurchaseEvent);

// Route for hashing user data (email, phone)
router.post('/hash-user-data', FacebookEventsController.hashUserData);

// Route for sending CompleteRegistration event
router.post('/complete-registration', FacebookEventsController.sendCompleteRegistrationEvent);

// Route for sending FindLocation event  
router.post('/find-location', FacebookEventsController.sendFindLocationEvent);

export const FacebookEventsRoutes = router;
