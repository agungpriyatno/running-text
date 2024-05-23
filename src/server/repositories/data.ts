const fetchDataRepo = () => {
  return fetch("https://api.goapi.io/stock/idx/top_gainer", {
    headers: {
      accept: "application/json",
      "X-API-KEY": "4821ba49-5527-5a12-9198-4f0365cc",
    },
  });
};

export {fetchDataRepo}
