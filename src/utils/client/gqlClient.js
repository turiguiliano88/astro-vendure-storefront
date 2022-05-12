const gqlShopURL = import.meta.env.PUBLIC_SHOPAPI;

export const createQuery = async ({ query, variables }) => {
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
  const json = await response.json();
  return json.data;
};
