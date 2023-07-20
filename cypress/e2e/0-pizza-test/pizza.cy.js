describe("pizza!", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
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
    cy.visit("http://localhost:3000/pizza");
  });
  it("Sipariş Ver butonu disabled.", () => {
    cy.get('[id="order-button"]').should("have.disabled", true);
  });
  const malzemeler = [
    "Pepperoni",
    "Domates",
    "Biber",
    "Sosis",
    "Mısır",
    "Sucuk",
  ];
  it("Form doldurulduktan sonra sipariş verilebiliyor.", () => {
    cy.get('[data-cy="isim"]').type("elif");
    cy.get('[type="radio"]').first().check();
    cy.get("select").select("ince");
    cy.get('[type="checkbox"]').check(malzemeler);
    cy.get('[id="order-button"]').should("not.have.disabled");
  });
  it("Sipariş ver butonuna tıklandığında onay sayfası açılıyor.", () => {
    cy.get('[data-cy="isim"]').type("elif");
    cy.get('[type="radio"]').first().check();
    cy.get("select").select("ince");
    cy.get('[type="checkbox"]').check(malzemeler);
    cy.get('[id="order-button"]').click().url().should("include", "/onay");
  });
  const yetersizMalzeme = ["Pepperoni", "Domates"];
  it("Yetersiz bilgi girildiğinde yup mesajı çıkıyor ve sipariş ver butonu disabled.", () => {
    cy.get('[data-cy="isim"]').type("e");
    cy.get("select").select("ince");
    cy.get('[type="checkbox"]').check(yetersizMalzeme);
    cy.get('[data-cy="error"]').should("exist");
    cy.get('[id="order-button"]').should("have.disabled", true);
  });
  const ondanFazla = [
    "Pepperoni",
    "Domates",
    "Biber",
    "Sosis",
    "Mısır",
    "Sucuk",
    "Kanada Jambonu",
    "Ananas",
    "Tavuk Izgara",
    "Jalepeno",
    "Kabak",
  ];
  it("Ondan fazla malzeme seçildiğinde yup mesajı çıkıyor ve sipariş butonu disabled.", () => {
    cy.get('[data-cy="isim"]').type("elif");
    cy.get('[type="radio"]').first().check();
    cy.get("select").select("ince");
    cy.get('[type="checkbox"]').check(ondanFazla);
    cy.get('[data-cy="error"]').should("exist");
    cy.get('[id="order-button"]').should("have.disabled", true);
  });
});
