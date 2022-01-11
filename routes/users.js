import express from 'express'
import content from '../middleware/content.js'
import auth from '../middleware/auth.js'
import {
  register,
  login,
  logout,
  extend,
  getUserInfo,
  addCart,
  getCart,
  updateCart
} from '../controllers/users.js'

const router = express.Router()

router.post('/', content('application/json'), register)
router.post('/login', content('application/json'), login)
router.post('/extend', auth, extend)
router.delete('/logout', auth, logout)
router.get('/me', auth, getUserInfo)
// 新增購物車 . 取得購物車 . 編輯購物車
router.post('/me/cart', auth, addCart)
router.get('/me/cart', auth, getCart)
router.patch('/me/cart', auth, updateCart)

export default router
