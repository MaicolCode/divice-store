import { Router } from 'express'
export const routes = Router()

const products = [
  {
    name: 'Apple MacBook Pro 17',
    color: 'Silver',
    category: 'Laptop',
    price: '$2999'
  },
  {
    name: 'Apple MacBook Pro 17',
    color: 'Silver',
    category: 'Laptop',
    price: '$2999'
  }
]

routes.get('/', (req, res) => {
  res.render('./page/index', { title: 'Home' })
})

routes.get('/contact', (req, res) => {
  res.render('./page/contact', { title: 'Contact' })
})

routes.get('/about', (req, res) => {
  res.render('./page/about', { title: 'About me' })
})

routes.get('/home', (req, res) => {
  res.render('./manage/index', { title: 'Admin-Home' })
})

routes.get('/devices', (req, res) => {
  res.render('./manage/devices', { title: 'Admin-Devices', products })
})

routes.get('/customers', (req, res) => {
  res.render('./manage/customers', { title: 'Admin-Customers' })
})

routes.get('/workers', (req, res) => {
  res.render('./manage/workers', { title: 'Admin-Workers' })
})
