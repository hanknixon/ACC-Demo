import { describe, expect, it } from "vitest";
import { buildContactMailto, CONTACT_EMAIL } from "./contact";

describe("buildContactMailto", () => {
  it("should encode a complete inquiry when all fields are provided", () => {
    const result = buildContactMailto({
      name: "  Alex Doe ",
      company: "ACC & Co",
      email: "alex@example.com",
      phone: "+1 555 1234",
      message: "I need 2 chargers.\nPlease call.",
    });

    expect(result).toContain(`mailto:${CONTACT_EMAIL}?`);
    expect(decodeURIComponent(result)).toContain(
      "Website inquiry from Alex Doe",
    );
    expect(decodeURIComponent(result)).toContain("Company: ACC & Co");
    expect(decodeURIComponent(result)).toContain(
      "I need 2 chargers.\nPlease call.",
    );
  });

  it("should mark optional fields when they are empty", () => {
    const result = decodeURIComponent(
      buildContactMailto({
        name: "Alex",
        company: "",
        email: "alex@example.com",
        phone: "",
        message: "Hello",
      }),
    );

    expect(result).toContain("Company: Not provided");
    expect(result).toContain("Phone: Not provided");
  });
});
