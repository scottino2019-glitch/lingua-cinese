window.elementSdk = (function () {
  let config = {};

  return {
    init: async function (defaultConfig, onConfigChange) {
      config = {...defaultConfig};
      if (typeof onConfigChange === "function") {
        onConfigChange(config);
      }
      return { isOk: true };
    },

    setConfig: function (key, value) {
      config[key] = value;
    },

    getConfig: function () {
      return config;
    }
  };
})();
