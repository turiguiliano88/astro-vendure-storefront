const gqlShopURL = import.meta.env.PUBLIC_SHOPAPI;

let token = localStorage.auth_token;

export const createQuery = async ({ query, variables, clientToken }) => {
  console.log("first token inititate", token);
  let headers = { "Content-Type": "application/json" };
  // if (clientToken) token = clientToken;
  // if (token) headers.Authorization = `Bearer ${token}`;
  if (token) headers.Authorization = `Bearer ${token}`;
  const response = await fetch(gqlShopURL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
    credentials: "include",
  });
  const auth_token = response.headers.get("vendure-auth-token");
  console.log("vendure token", auth_token);
  if (auth_token != null) {
    token = auth_token;
    localStorage.auth_token = auth_token;
  }
  const json = await response.json();
  return json.data;
};
