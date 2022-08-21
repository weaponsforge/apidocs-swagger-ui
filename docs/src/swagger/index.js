import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css'
import spec from './swagger-config.yaml'

const ui = SwaggerUI({
  spec,
  dom_id: '#swagger'
})

ui.initOAuth({
  appName: 'Swagger UI Webpack Demo',
  clientId: 'implicit'
})
