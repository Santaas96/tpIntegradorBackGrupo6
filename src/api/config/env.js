import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT || 3000,
  database: {
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306,
  }
}