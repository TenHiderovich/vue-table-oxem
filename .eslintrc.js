module.exports = {
  "root": true,
  "env": {
    "node": true,
    "browser": true
  },
  "extends": [
    "plugin:vue/recommended",
    "plugin:vue/essential"
  ],
  "rules": {
    "vue/script-indent": "off",
    "vue/html-indent": ["error", 2, {
      "attribute": 1,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": []
    }],
    "eslint linebreak-style": [0, "error", "windows"],
    "vue/html-self-closing": "off",
    "vue/no-v-html": "off",
    "vue/no-unused-vars": "off",
    "vue/prop-name-casing": "off",
    "vue/require-default-prop": "off",
    "vue/require-prop-types": "off",
    "vue/html-quotes": "off",
  },
  "parserOptions": {
    "parser": "babel-eslint",
    "sourceType": "module",
    "ecmaVersion": 2017,
    "babelOptions": {
      "configFile": "babel.config.js",
    },
  }
};
