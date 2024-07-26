import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { routes } from './routes/routes.js'

const app = express()
const PORT = process.env.PORT ?? 3445

// Obtener ruta especifica de donde proviene cada vista.
const __dirname = dirname(fileURLToPath(import.meta.url))

// Configuracion de nuestro servidor con las vistas.
app.set('views', join(__dirname, 'views'))
app.set('view engine', '.ejs')

// Uso de las rutas.
app.use(express.static(join(__dirname))) // -> Direccionamiento de los archivos estaticos.
app.use(routes)

// En esta parte estamos escuchando directamente al sevidor.
app.listen(PORT, () => {
  console.log(`Server listener in port http://localhost:${PORT}`)
})
