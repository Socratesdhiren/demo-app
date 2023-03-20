import { SecondTable, randomValue, VirtualListData } from "./CommonUtils";

describe("Common utils function test", () => {
  test("SecondTable is generated correctly", () => {
    // Verify that SecondTable has 100 items
    expect(SecondTable).toHaveLength(100);

    // Verify that each item in SecondTable has the expected properties
    SecondTable.forEach((item) => {
      expect(item).toHaveProperty("key");
      expect(item).toHaveProperty("name");
      expect(item).toHaveProperty("dataType");
      expect(item).toHaveProperty("money");
      expect(item).toHaveProperty("address");
    });
  });

  test("randomValue generates a random number between 10 and 100", () => {
    // Generate 100 random values and verify that each value is within the expected range
    for (let i = 0; i < 100; i++) {
      const value = randomValue();
      expect(value).toBeGreaterThanOrEqual(10);
      expect(value).toBeLessThanOrEqual(100);
    }
  });

  test("VirtualListData is generated correctly", () => {
    // Verify that VirtualListData has 50000 items
    expect(VirtualListData).toHaveLength(50000);

    // Verify that each item in VirtualListData has the expected properties
    VirtualListData.forEach((item) => {
      expect(item).toHaveProperty("key");
      expect(item).toHaveProperty("name");
      expect(item).toHaveProperty("location");
      expect(item).toHaveProperty("contact_no");
    });
  });
});
