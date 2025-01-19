import request from "supertest";
import app from "../../backend/server.js";

describe("Startup API Tests", () => {
  it("should return 200 and list startups", async () => {
    const res = await request(app).get("/api/startups");
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it("should return 404 for non-existing startup", async () => {
    const res = await request(app).get("/api/startups/invalid-id");
    expect(res.statusCode).toBe(404);
  });
});
