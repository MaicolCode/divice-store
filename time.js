import { uptime } from 'node:os'

console.log(uptime() / 60 / 60)
