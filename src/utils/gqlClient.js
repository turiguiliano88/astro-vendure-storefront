const gqlShopURL = import.meta.env.PUBLIC_SHOPAPI;

export const createQuery = async ({ query, variables }) => {
  // console.log("first token inititate server", clientToken);
  let headers = { "Content-Type": "application/json" };
  // if (clientToken) headers.Authorization = `Bearer ${clientToken}`;
  const response = await fetch(gqlShopURL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
    credentials: "include",
  });
  // const auth_token = response.headers.get("vendure-auth-token");
  // console.log("vendure token", auth_token);
  // if (auth_token != null) {
  //   token = auth_token;
  //   localStorage.auth_token = auth_token;
  // }
  const json = await response.json();
  console.log("response ", json.data);
  return json.data;
};
