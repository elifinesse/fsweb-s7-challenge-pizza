describe("pizza!", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/");
  });

  it("Anasayfada Acıktım butonu bulunuyor.", () => {
    cy.get('[data-cy="aciktim-button"]').should("be.visible");
  });
  it("Acıktım butonuna tıklandığında /pizza'ya ulaşılıyor.", () => {
    cy.get('[data-cy="aciktim-button"]')
      .click()
      .url()
      .should("include", "/pizza");
  });
});
describe("pizza form!", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/pizza");
  });
  it("Sipariş Ver butonu disabled.", () => {
    cy.get('[id="order-button"]').should("have.disabled", true);
  });
  const pass = {
    name: "Logan Roy",
    pizza_size: "büyük",
    pizza_dough: "kalın",
    toppings: ["Pepperoni", "Domates", "Biber", "Sosis", "Mısır", "Sucuk"],
  };
  const fail = {
    name: "L",
    pizza_size: "",
    pizza_dough: "",
    toppings: ["Pepperoni", "Domates"],
  };
});
