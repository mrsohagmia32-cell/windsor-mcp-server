const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Windsor.ai MCP Configuration Endpoint
app.get('/mcp-config', (req, res) => {
  res.json({
    "mcpServers": {
      "windsor": {
        "httpUrl": "https://mcp.windsor.ai/"
      }
    }
  });
});

app.get('/', (req, res) => {
  res.send('Windsor AI MCP Server is Running successfully!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
