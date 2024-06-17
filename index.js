module.exports = {
  "extends": [
    "eslint:recommended",
    "airbnb-base/rules/best-practices",
    "airbnb-base/rules/errors",
    "airbnb-base/rules/node",
    "airbnb-base/rules/style",
    "airbnb-base/rules/variables",
    "airbnb-base/rules/es6",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  "env": {
      "es6": true,
      "node": true,
      "mocha": true
  },
  "plugins": [
    "mocha"
  ],
  "rules": {
    // Do not require yield, goes against Koa v1 style.
    "require-yield": "off",

    // Single quotes instead of double quotes
    "quotes": ["error", "single", { "allowTemplateLiterals": true }],

    // Allow leading underscores for "private" methods
    "no-underscore-dangle": "off",

    // Don't require source files to include "use strict"
    // as babel enforces that automatically
    "strict": ["error", "never"],

    // Destructuring siblings are okay
    "no-unused-vars": ["error", { "ignoreRestSiblings": true }],

    // {bar: baz} bad; { bar: baz } good
    "object-curly-spacing": ["error", "always"],

    // Place spaces after keywords
    "keyword-spacing": "error",

    // Unreachable code is an error
    "no-unreachable": "error",

    // blocks must at least have a comment, except `catch(e) { }`
    "no-empty": ["error", { "allowEmptyCatch": true }],

    // statements must end with a semicolon
    "semi": "error",

    // `a+b` bad; `a + b` good
    "space-infix-ops": "error",

    // `var a =   1` bad; `var a = 1` good
    "no-multi-spaces": "error",

    // all files should end with a newline
    "eol-last": "error",

    // One true brace style:
    //
    // if (bloop) {
    //   bloop();
    // } else {
    //   bleep();
    // }
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],

    // 2 spaces
    "indent": ["error", 2, { "SwitchCase": 1 }],

    // Intentional overrides to airbnb's configs

    // Allow multiple variable declarations for a single var/let/const statement.
    "one-var": "off",

    // We do not usually follow the functional style, and so it's normal to write functions that
    // have side effects on arguments. Also, reassigning arguments for defensive argument validation
    // and coersion is a frequent use case.
    "no-param-reassign": "off",

    // It's often better to order code in files by most important/relevant to least
    // important/relevant rather than by declaration. For example, you might have multiple less
    // important helper functions that are used before they are defined because the usage is much
    // more important than the helpers themselves. Take advantage of function/class hoisting rather
    // than banning it. Var hoisting is almost universally confusing though, so keep that disabled.
    "no-use-before-define": ["error", {
      "functions": false,
      "classes": false
    }],

    // disallow certain syntax forms
    // http://eslint.org/docs/rules/no-restricted-syntax
    // This relaxes the disallow ForInStatement and ForOfStatemnet in airbnb. It would be a lot of
    // work to refactor where we use those loops. And also, for...of statements allow us to stay in
    // the co() or async context and use yield/await, whereas the functional alternatives don't.
    // TODO(yunchi): We should eventually disallow for...in loops since they are mostly strictly
    // worse than for...of loops.
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],

    'comma-dangle': ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "functions": "never", // This is a syntax error...
    }],

    // This is too difficult to refactor and provides little value.
    "no-shadow": "off",

    // We use ++ and -- all over the place and it seems innocuous enough?
    "no-plusplus": "off",

    // Don't require function brackets: `const foo = (a) => true;` is okay
    "arrow-body-style": "off",

    // Don't require parameter parens: `const foo = a => true;` is okay
    "arrow-parens": "off",

    // Anonymous functions are okay
    "func-names": "off",

    // No blacklisted object / attribute names
    "no-restricted-properties": "off",

    // `a && b()` is okay; `a ? b() : c()` is okay
    "no-unused-expressions": ["error", {
      "allowShortCircuit": true,
      "allowTernary": true
    }],

    // Allow member functions to not access `this`
    "class-methods-use-this": "off",

    // `<Foo ref={x => this.x = x} />` is okay
    "no-return-assign": "off",

    // `bloop.select('.bleep').map(a => a.bork)` is okay
    "newline-per-chained-call": "off",

    // Man line length is 100
    "max-len": ["error", 100, {
      "ignoreTemplateLiterals": true,
      "ignoreStrings": true,
      "ignoreUrls": true,
    }],

    // Mocha functions should use function expressions, not arrow functions
    "mocha/no-mocha-arrows": "error",

    // Either function expressions or arrow callbacks can be used
    "prefer-arrow-callback": "off",

    // No multiple blank lines.
    "no-multiple-empty-lines": ["error", {
      "max": 2,
      "maxEOF": 1,
      "maxBOF": 0
    }],

    // `function foo(x) {}` is okay
    "space-before-function-paren": "off",

    // `it.only`, `describe.only` et. al. will error.  Not helpful if you run
    // your lint rule as a mocha test case itself.
    "mocha/no-exclusive-tests": "error"
  }
};
