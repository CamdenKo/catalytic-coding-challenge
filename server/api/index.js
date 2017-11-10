const router = require('express').Router()
module.exports = router

const {
  promisifiedRF,
} = require('./api.utils')

router.get('/process', async (req, res, next) => {
  try {
    res.json(JSON.parse(await promisifiedRF('../../data/process.json')))
  } catch (error) {
    next(error)
  }
})

router.get('/steps', async (req, res, next) => {
  try {
    res.json(JSON.parse(await promisifiedRF('../../data/steps.json')))
  } catch (error) {
    next(error)
  }
})

router.get('/steps/:id', async (req, res, next) => {
  try {
    const steps = JSON.parse(await promisifiedRF('../../data/steps.json'))
    res.json(steps[req.params.id])
  } catch (error) {
    next(error)
  }
})

router.get('/users', async (req, res, next) => {
  try {
    res.json(JSON.parse(await promisifiedRF('../../data/users.json')))
  } catch (error) {
    next(error)
  }
})
