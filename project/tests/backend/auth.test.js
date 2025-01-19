import request from "supertest";
import app from "../../backend/server.js";

describe("Auth API Tests", () => {
  it("should return 200 on successful login", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "test@example.com", password: "password123" });
    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });

  it("should return 400 for invalid login", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "wrong@example.com", password: "wrongpassword" });
    expect(res.statusCode).toBe(400);
  });
});
