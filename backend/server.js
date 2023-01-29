import createApp from "./app.js";
import { config } from "./config/devConfig.js";

const app = createApp(config);

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`);
});
