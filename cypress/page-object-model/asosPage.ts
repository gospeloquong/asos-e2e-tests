import * as selectors from './selectors';

export const rejectCookies = () => {
    cy.get(selectors.COOKIE_REJECTION).click();
};

export const searchProduct = (product:string) => {
    cy.get(selectors.PRODUCT_SEARCH).type(product);
    cy.get(selectors.PRODUCT_SEARCH).type('{enter}');
};

export const selectFirstProduct = () => {
    cy.get(selectors.PRODUCT_SELECTION).eq(0).click();
};

export const selectSize = () => {
    cy.get(selectors.SIZE).select('207690504');
};

export const addToBag = () => {
    cy.get(selectors.ADDING_TO_BAG).click();
};

export const goToBag = () => {
    cy.get(selectors.BAG_LINK).click();
};
