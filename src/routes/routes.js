import { Router } from 'express'
export const routes = Router()

const products = [
  {
    name: 'Microsoft Surface Pro',
    color: 'White',
    category: 'Laptop PC',
    price: '$1999'
  },
  {
    name: 'Apple MacBook Pro 17',
    color: 'Silver',
    category: 'Laptop',
    price: '$2999'
  }
]

// * Rutas de las vistas de la pagina principal.

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

// * Rutas de las vistas de gestion del sistema.

routes.get('/devices', (req, res) => {
  res.render('./manage/devices', { title: 'Admin-Devices', products })
})

routes.get('/customers', (req, res) => {
  res.render('./manage/customers', { title: 'Admin-Customers' })
})

routes.get('/workers', (req, res) => {
  res.render('./manage/workers', { title: 'Admin-Workers' })
})

// ** Rutas de las vistas de formularios.

routes.get('/formDevices', (req, res) => {
  res.render('./manage/forms/frm-devices', { title: 'Devices' })
})

routes.get('/formCustomers', (req, res) => {
  res.render('./manage/forms/frm-customers', { title: 'Customers' })
})

routes.get('/formWorkers', (req, res) => {
  res.render('./manage/forms/frm-workers', { title: 'Workers' })
})
