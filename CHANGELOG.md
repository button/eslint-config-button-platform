* 1.4.0 January 11, 2021
  - Scopes package to button organization
  Projects using eslint can extend the repo like so:
  ```
  "extends": "@button/eslint-config-button-platform"
  ```

* 1.3.0 January 8, 2021
  - Updates eslint rules
  - Updates peer dependencie versions

* 1.2.0 August 2, 2017
  - Add prettier compatibility rules
  - Add mocha exclusive rule

* 1.1.0 July 14, 2017
  - Rule change: Enforce `no-multiple-empty-lines`.

* 1.0.4 March 21, 2017
  - Add environment to the base config

* 1.0.3 March 21, 2017
  - Set `ecmaVersion` to 2017 to support async/await

* 1.0.2 March 20, 2017
  - Disable no-use-before-define for functions and classes

* 1.0.1 March 18, 2017
  - Changes to better match existing style and ease migration
    * Disable one-var
    * Disable no-param-reassign
    * Allow template literals and URLs to exceed 100 char line length limit

* 1.0.0 March 17, 2017
  - Initial Release, forked from button/eslint-config-button
