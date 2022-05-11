// const gqlShopURL = import.meta.env.PUBLIC_SHOPAPI;
const gqlShopURL = "http://localhost:3000/shop-api";

// const cookie = Astro.request.headers.get("cookie");

export const createQuery = async ({ query, variables }, cookie) => {
  let headers = { "Content-Type": "application/json" };
  if (cookie) headers.Cookie = cookie;
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
  return json.data;
};
