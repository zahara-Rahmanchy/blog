import express, {
 Application,
  Request,
  Response,
 
} from "express";
import cors from "cors";
import { PostRoutes } from "./Modules/Posts/post.routes";



const app: Application = express();
// {
//   origin: 'https://shoemanagementsystem.netlify.app',
//   credentials: true,
// }
app.use( cors());

// parsers
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "Blog platform",
  });
});

app.use("/api", PostRoutes);



export default app;
