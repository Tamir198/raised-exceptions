import express from "express";
import cors from "cors";

import exceptionRout from "./routs/exceptions.js";

const loadExtensions = async function (app) {
  app.use(cors("*"));
  app.use(express.json());
};

const loadRoutes = function (app) {
  app.use(exceptionRout);
};

const createApp = (config) => {
  const app = express();

  loadExtensions(app);
  loadRoutes(app);

  return app;
};

export default createApp;
