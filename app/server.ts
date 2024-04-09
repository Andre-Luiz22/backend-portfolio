import { app } from "./src/app";
import "dotenv/config";
import cors from "cors";

const PORT = process.env.PORT;

app.use(cors());

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
