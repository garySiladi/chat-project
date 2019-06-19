describe("Register Tests", () => {
  it("Open Popup of Login/Register", () => {
    cy.visit("/PopupRegisterLogin");.click("[data-cy=RegisterClick]")
  });
  
  it("Open Popup of Register itself", () => {
    cy.visit("/PopupRegisterLogin").click("[data-cy=RegisterText]")
    .visit("/RegisterPopUp");

  });
});
