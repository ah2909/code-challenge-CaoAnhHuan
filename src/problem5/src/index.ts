import express, { Express, Request, Response, NextFunction } from "express";
import { Prisma } from '@prisma/client'
import { postRouter } from "./routes/postRoutes";

const app: Express = express();
const port = 8086;

app.use(express.json())
app.use(postRouter)

// Error middleware
app.use((error: any, req: Request, res: any, next: NextFunction) => {
  console.log(typeof error)
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    console.error('Error:', error);
    return res.status(400).json({
      status: 'error',
      message: error.message,
    });
  } else if (error instanceof Prisma.PrismaClientValidationError) {
    console.error('Validation error:', error.message);
    return res.status(400).json({
      status: 'error',
      message: 'Invalid input data',
    });
  } else if (error instanceof Prisma.PrismaClientInitializationError) {
    console.error('Database connection failed:', error.message);
    return res.status(503).json({
      status: 'error',
      message: 'Could not connect to the database',
    });
  } else {
    console.error('Unexpected error:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});