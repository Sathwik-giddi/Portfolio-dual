import { Router } from 'express';
import * as notificationController from '../controllers/notification.js';
import { authenticateJWT } from '../../middleware/auth.js';

const router = Router();

router.get('/', authenticateJWT, notificationController.getNotifications);
router.patch('/:id/read', authenticateJWT, notificationController.markAsRead);
router.post('/read-all', authenticateJWT, notificationController.markAllAsRead);

export default router;
