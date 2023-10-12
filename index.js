const express = require('express');
const cors = require('cors');
const { createServer } = require('./utils');
const { fcmRoutes, hwRoutes } = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

createServer(app);

app.use('/fcm', fcmRoutes);
app.use('/hw', hwRoutes);