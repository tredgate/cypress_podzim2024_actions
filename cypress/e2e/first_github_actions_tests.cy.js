describe("Cypress GitHub Actions Demo", () => {
  it("Open Pmtool and Fill Username", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").type("admin");
    cy.get("#username").should("have.value", "admin");
  });

  it("Pmtool Login Title Exist", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("h3.form-title").should("exist");
  });
});
