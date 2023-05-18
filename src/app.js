//Incluimos express const express = requiere('express') es lo mismo que decir import express from 'express'
 import express from 'express';
 import employessRoutes from './routes/employess.routes.js';
 import indexRoutes from './routes/index.routes.js';
 

 // Creamos el servidor
const app = express();

app.use(express.json());

app.use('/api',employessRoutes);
app.use('/api',indexRoutes);

//Cuando una ruta no existe va salir este Error
app.use((resq, res) => {
  res.status(404).json({
    message: 'endpoint not found'
  });

});

  //Escuchamos el servidor
  app.listen(3000)
  console.log('En ejecucion');