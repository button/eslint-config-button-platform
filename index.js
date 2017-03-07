module.exports = {
  "parser": "babel-eslint",
  "extends": ["eslint:recommended", "airbnb"],
  "plugins": [
    "react",
    "mocha"
  ],
  "rules": {
    // Single quotes instead of double quotes
    "quotes": ["error", "single", { "allowTemplateLiterals": true }],

    // Allow leading underscores for "private" methods
    "no-underscore-dangle": "off",

    // Don't require source files to include "use strict"
    // as babel enforces that automatically
    "strict": ["error", "never"],

    // JSX syntax masks the need for the `React` import, but
    // it is still needed. Essentially, in a JSX file we should
    // never mark it as not needed.
    "react/jsx-uses-react": "warn",

    // Destructuring siblings are okay
    "no-unused-vars": ["error", { "ignoreRestSiblings": true }],

    // {bar: baz} bad; { bar: baz } good
    "object-curly-spacing": ["error", "always"],

    // Place spaces after keywords
    "keyword-spacing": "error",

    // React components should have double quotes:
    // `<Bar baz="foo" />`
    "jsx-quotes": ["error", "prefer-double"],

    // Unreachable code is an error
    "no-unreachable": "error",

    // blocks must at least have a comment, except `catch(e) { }`
    "no-empty": ["error", { "allowEmptyCatch": true }],

    // Ensure JSX variables are marks as used
    "react/jsx-uses-vars": "error",

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

    // Don't require function brackets: `const foo = (a) => true;` is okay
    "arrow-body-style": "off",

    // Don't require parameter parens: `const foo = a => true;` is okay
    "arrow-parens": "off",

    // Don't allow trailing commas: `{ a: 1, b: 2, };`
    "comma-dangle": ["error", "never"] ,

    // Anonymous functions are okay
    "func-names": "off",

    // Allow <label /> tags to not have an `htmlFor=` prop (use <label /> as a
    // parent element instead)
    "jsx-a11y/label-has-for": "off",

    // No blacklisted object / attribute names
    "no-restricted-properties": "off",

    // `a && b()` is okay; `a ? b() : c()` is okay
    "no-unused-expressions": ["error", {
      "allowShortCircuit": true,
      "allowTernary": true
    }],

    // `function foo () {}` bad;  `function foo() {}` good
    "space-before-function-paren": ["error", "never"],

    // allow importing without a file extension
    "import/extensions": "off",

    // Allow statements to precede `import`
    "import/first": "off",

    // Allow NODE_PATH to do its thing
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],

    // Allow default import to be declared over a named export
    "import/no-named-as-default": "off",

    // Allow lookup of named export on a default export
    "import/no-named-as-default-member": "off",

    // Allow default export to be named
    "import/no-named-default": "off",

    // Allow for a single named export
    "import/prefer-default-export": "off",

    // Allow generic propTypes (any, array, object)
    "react/forbid-prop-types": "off",

    // <Foo
    //   bloop
    //   message="Get it bloopin" />
    //
    "react/jsx-closing-bracket-location": ["error", "after-props"],

    // First prop on a new-line if the component takes multiple lines
    "react/jsx-first-prop-new-line": ["error", "multiline"],

    // This rule was busted with how we prefer to format ternary expressions in
    // jsx
    "react/jsx-indent": "off",

    // Allow classes for stateless functions
    "react/prefer-stateless-function": "off",

    // Sort-order for react class properties / methods
    "react/sort-comp": [2, {
      "order": [
        "type-annotations",
        "static-methods",
        "lifecycle",
        "everything-else",
        "render"
      ]
    }],

    // Allow multiple components per file
    "react/no-multi-comp": "off",

    // Allow `>`, `"`, `'`, `}` and friends in JSX copy
    "react/no-unescaped-entities": "off",

    // Allow member functions to not access `this`
    "class-methods-use-this": "off",

    // `<Foo ref={x => this.x = x} />` is okay
    "no-return-assign": "off",

    // Allow `style=""` prop to be any type
    "react/style-prop-object": "off",

    // `bloop.select('.bleep').map(a => a.bork)` is okay
    "newline-per-chained-call": "off",

    // <div onClick={onClick} /> is okay
    "jsx-a11y/no-static-element-interactions": "off",

    // <div onClick={onClick.bind(this, 2)} /> is okay
    "react/jsx-no-bind": "off",

    // Man line length is 120
    "max-len": ["error", 120],

    // Components may define propTypes that aren't used themselves (may pass)
    // props as proxy to a child.
    "react/no-unused-prop-types": "off",

    // Mocha functions should use function expressions, not arrow functions
    "mocha/no-mocha-arrows": "error",

    // Either function expressions or arrow callbacks can be used
    "prefer-arrow-callback": "off"
  }
};
