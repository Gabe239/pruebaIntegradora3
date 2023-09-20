import express from 'express';
import {
  registerUser,
  loginUser,
  logoutUser,
  githubAuth,
  githubAuthCallback,
  recoverMail,
  resetPassword
} from '../controllers/sessions.controller.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);
router.get('/github', githubAuth);
router.get('/githubcallback', githubAuthCallback);
router.get('/send-recover-mail/:email', recoverMail);
router.post('/reset-password/:token', resetPassword)
export default router;