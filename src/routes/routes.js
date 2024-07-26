import { Router } from 'express'
export const routes = Router()

routes.get('/', (req, res) => {
  res.render('index', { title: 'Home' })
})

routes.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' })
})

routes.get('/about', (req, res) => {
  res.render('about', { title: 'About me' })
})
