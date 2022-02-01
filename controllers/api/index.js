const router = require('express').Router();
const path = require('path');

const userRoutes = require('./userRoutes');
const workoutRoutes = require('./workoutRoutes');
const exerciseRoutes = require('./exerciseRoutes');

router.use('/user', userRoutes);
router.use('/workout', workoutRoutes);
router.use('/exercise', exerciseRoutes);
// router.use('/schedule' , )

module.exports = router;
