const path = require('path')

module.exports = {
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "en",
    localePath: path.resolve("./static/locales")
  },
};
