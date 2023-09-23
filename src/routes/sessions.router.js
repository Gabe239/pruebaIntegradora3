import express from 'express';
import {
  registerUser,
  loginUser,
  logoutUser,
  githubAuth,
  githubAuthCallback,
  recoverMail,
  resetPassword,
  changeUserRoleToPremium
} from '../controllers/sessions.controller.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);
router.get('/github', githubAuth);
router.get('/githubcallback', githubAuthCallback);
router.get('/send-recover-mail/:email', recoverMail);
router.post('/reset-password/:token', resetPassword)
router.post('/change-role/:userId', changeUserRoleToPremium);
export default router;