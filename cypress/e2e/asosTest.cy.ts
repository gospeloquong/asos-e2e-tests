
import * as asosPage from '../page-object-model/asosPage';



Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  describe('ASOS e2e Test', () => {
    it('should search, select, and add black trainers to bag and validate', () => {
      cy.visit('https://www.asos.com/');

      
      asosPage.rejectCookies()
      asosPage.searchProduct('Mens Black Trainers');

       asosPage.selectFirstProduct()
      
      asosPage.selectSize();
      cy.wait(10000)
      asosPage.addToBag()
      
      asosPage.goToBag()
    });
  });