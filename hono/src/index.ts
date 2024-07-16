interface Env {
    MY_SERVICE: Fetcher;
  }

  type Bindings = {
    MY_SERVICE: Fetcher;
 
  }

  
import { Hono } from 'hono'
import { Fetch } from 'hono/client';

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', (c) => c.text('Hello Cloudflare Workers!'))

app.get('/this', async (c, next) => {

//const clonedRequest = c.req.clone();
//const request = c.req;

const response = await c.env.MY_SERVICE.fetch(c.req)

//const response = await fetch('https://developers.cloudflare.com/workers/configuration/bindings/about-service-bindings/')

return response

})

export default app
