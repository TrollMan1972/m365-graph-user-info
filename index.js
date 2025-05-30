const express = require('express');
const credential = require('./authConfig');
const { Client } = require('@microsoft/microsoft-graph-client');
require('isomorphic-fetch');

const app = express();

const graphClient = Client.initWithMiddleware({
  authProvider: {
    getAccessToken: async () => {
      const token = await credential.getToken('https://graph.microsoft.com/.default');
      return token.token;
    }
  }
});

app.get('/me', async (req, res) => {
  try {
    const user = await graphClient.api('/me').get();
    res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
