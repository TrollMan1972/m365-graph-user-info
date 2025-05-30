# Microsoft 365 Graph User Info

Ez egy egyszerű Node.js alkalmazás, amely lekéri a bejelentkezett felhasználó adatait a Microsoft Graph API-n keresztül.

## Futás

1. Hozz létre egy `.env` fájlt a `CLIENT_ID`, `TENANT_ID`, `CLIENT_SECRET` változókkal.
2. Telepítsd a függőségeket:

```
npm install
```

3. Indítsd el a szervert:

```
node index.js
```

4. Nyisd meg: `http://localhost:3000/me`
