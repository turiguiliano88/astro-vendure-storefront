const gqlShopURL = import.meta.env.SERVER_SHOPAPI;

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

  const json = await response.json();
  return json.data;
};
