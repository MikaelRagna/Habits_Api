import Fastify from "fastify";
import cors from "@fastify/cors"
import { appRoutes } from "./lib/routes";

const app = Fastify();


app.register(cors, {
  origin: ['http://localhost:3000']
})

app.register(appRoutes)

app.listen({
  port: 3456,
}).then(()=>{
  console.log("Por enquanto não quebrou 🤔🚀")
})