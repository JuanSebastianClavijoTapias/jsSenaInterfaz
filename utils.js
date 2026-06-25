

   try {
       client = new MongoClient(url);
       await client.connect();
       const dbName = 'prueba107';
      
       const db = client.db(dbName);
       const producto = await db.collection('productos').findOne(
           {"consecutivo": req.params.consecutivo}
       );
      
       if (!producto) {
           return res.status(404).json({ mensaje: 'Producto no encontrado' });
       }
      
       res.json(producto);
   } catch (err) {
       res.status(500).json({ error: err.message });
   } finally {
       client?.close();
   };


