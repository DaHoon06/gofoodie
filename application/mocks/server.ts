// https://github.com/mswjs/msw/issues/1644#issuecomment-1750722052
import express from "express";
import { createMiddleware } from "@mswjs/http-middleware";
import { handlers } from "./handlers";

const app = express();
const port = 9090;

// CORS 설정 미들웨어
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // 모든 도메인 허용
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS"); // 허용할 HTTP 메서드
  res.header("Access-Control-Allow-Credentials", "true"); // 크리덴셜 허용
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization"); // 허용할 헤더

  // OPTIONS 메서드에 대한 응답 처리
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Max-Age", "86400"); // Preflight 요청의 캐시 시간을 설정 (초 단위, 여기에선 24시간)
    return res.sendStatus(204); // No Content 응답
  }

  next();
});

app.use(express.json());
app.use(createMiddleware(...handlers));

app.listen(port, () => console.log(`Mock server is running on port: ${port}`));
