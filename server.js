const express = require('express');
const sql = require('mssql');
const cors = require('cors'); // Import the cors middleware
 
const app = express();
const port = 3000;
 
// Configuration for your SQL Server
const config = {
  user: 'bootcamp',
  password: 'Pass@123',
  server: 'bootcampfeb5.database.windows.net',
  database: 'bootcamp',
};
 
// Use the cors middleware
app.use(cors());
 
// Route to fetch and display top 20 rows from SalesLT.Customer
app.get('/data', async (req, res) => {
  try {
    // Connect to SQL Server
    await sql.connect(config);
   
    // Query to fetch top 20 rows from SalesLT.Customer
    const result = await sql.query`SELECT TOP 20 * FROM SalesLT.Customer`;
   
    // Send the fetched data to the client
    res.json(result.recordset);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('An error occurred while fetching data.');
  }
});


app.get('/data1', async (req, res) => {
    try {
      // Connect to SQL Server
      await sql.connect(config);
     
      // Query to join SalesLT.ProductCategory & SalesLT.Product tables and select data
      const result = await sql.query`
        SELECT 
          p.Name AS ProductName, 
          p.Color, 
          p.Size, 
          p.Weight
        FROM 
          SalesLT.ProductCategory pc
        JOIN 
          SalesLT.Product p ON pc.ProductCategoryID = p.ProductCategoryID
      `;
     
      // Send the fetched data to the client
      res.json(result.recordset);
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).send('An error occurred while fetching data.');
    }
  });
  
// Start the server
 
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});