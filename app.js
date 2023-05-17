//Incluimos express const express = requiere('express') es lo mismo que decir import express from 'express'
 import express from 'express';

 // Creamos el servidor
 const app = express();

 app.get('/employees',(req, res) => res.send('Onteniendo empleados'));
 app.post('/employees',(req, res) => res.send('Creando empleados'));
 app.put('/employees',(req, res) => res.send('Actulizando empleados'));
 app.delete('/employees',(req, res) => res.send('Eliminado empleados'));

  //Escuchamos el servidor
  app.listen(3000)
  console.log('En ejecucion');