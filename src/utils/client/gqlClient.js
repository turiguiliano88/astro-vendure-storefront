const gqlShopURL = import.meta.env.PUBLIC_SHOPAPI;

export const createQuery = async ({ query, variables }) => {
  let headers = { "Content-Type": "application/json" };
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
