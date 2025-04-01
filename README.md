# ASOS E2E Tests

## Overview

This project contains end-to-end (E2E) tests for ASOS using **Cypress**. The tests are designed to validate key user flows on the ASOS website, ensuring a seamless shopping experience.

## Tech Stack

- **Cypress** – for automated end-to-end testing
- **JavaScript/TypeScript** – for writing test scripts
- **Page Object Model (POM)** – for better test maintainability

## Project Structure

```
📂 asos-e2e-tests
 ├── 📂 cypress
 │   ├── 📂 e2e            # Test cases
 │   ├── 📂 fixtures       # Test data
 │   ├── 📂 support        # POM and custom commands
 │   ├── 📂 selectors      # Selector constants
 │   ├── 📂 reports        # Test reports
 │   ├── cypress.config.js # Cypress configuration
 ├── package.json          # Project dependencies
 ├── README.md             # Project documentation
```

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- **Node.js** (latest LTS recommended)
- **Cypress** (installed via npm or yarn)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/asos-e2e-tests.git
   cd asos-e2e-tests
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run Cypress tests:
   - To open Cypress UI:
     ```bash
     npx cypress open
     ```
   - To run tests in headless mode:
     ```bash
     npx cypress run
     ```

## Test Scenarios

The tests cover the following key flows:

- Searching for a product
- Selecting a product
- Validating product details (name, price, etc.)
- Adding a product to the basket
- Logging in and proceeding to checkout

## Writing Tests

This project follows the **Page Object Model (POM)** to keep tests modular and maintainable.
Example usage:

```js
import asosPage from '../support/asosPage';

it('should search and select a product', () => {
    asosPage.searchProduct('Nike Shoes');
    asosPage.selectProduct(0);
    asosPage.assertProductDetails();
});
```

## Reporting

After running tests, reports will be generated in the `/reports` folder.

## Contribution

Feel free to contribute by:

- Reporting issues
- Improving test  coverage
- Enhancing test structure

## License

This project is licensed under [MIT License](LICENSE).

