import { createQuery } from "../utils/server/gqlClient";
import { OrderSchema, CustomerSchema } from "./schema";

export async function addItemToOrder({ productVariantId, quantity }, cookie) {
  return await createQuery(
    {
      query: `
      mutation($productVariantId: ID!, $quantity: Int!){
        addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
          ... on Order {
            ${OrderSchema}
          }
        }
      }`,
      variables: {
        productVariantId,
        quantity,
      },
    },
    cookie
  );
}

export async function getActiveOrder(cookie) {
  return await createQuery(
    {
      query: `
      query {
        activeOrder {
          ${OrderSchema}
        }
      }`,
    },
    cookie
  );
}

export async function getCurrentUser(cookie) {
  return await createQuery(
    {
      query: `
    
    `,
    },
    cookie
  );
}

export async function getActiveCustomer(cookie) {
  return await createQuery(
    {
      query: `
        query {
          activeCustomer {
            ${CustomerSchema}
          }
        }`,
    },
    cookie
  );
}

export async function getMe(cookie) {
  return await createQuery(
    {
      query: `
        query {
          me {
            id
          }  
        }`,
    },
    cookie
  );
}

export async function getProducts(take) {
  return await createQuery({
    query: `
        query {
          products(options: {
            take: ${take}
          }) {
            totalItems
            items {
              id
              slug
              name
              description
              assets {
                preview
              }
              featuredAsset {
                preview
                width
                height
              }
              variants {
                id
                name
                price
              }
            }
          }
		    }
      `,
  });
}

export async function login({ username, password, rememberMe }) {
  console.log("argument", username, password, rememberMe);
  return await createQuery({
    query: `
      mutation($username: String!, $password: String!, $rememberMe: Boolean) {
        login(username: $username, password: $password, rememberMe: $rememberMe) {
          ... on CurrentUser {
            id
          }
        }
      }
    `,
    variables: {
      username,
      password,
      rememberMe,
    },
  });
}

export async function getEligibleShippingMethods() {
  return await createQuery({
    query: `
    query {
      eligibleShippingMethods {
        id
        name
        code
        description
        price
        priceWithTax
      }
    }`,
  });
}

export async function getEligiblePaymentMethods() {
  return await createQuery({
    query: `
    query {
      eligiblePaymentMethods {
        id
        name
        code
        description
      }
    }`,
  });
}

export async function setOrderShippingMethod(id, cookie) {
  return await createQuery(
    {
      query: `
    mutation {
      setOrderShippingMethod(shippingMethodId: ${id}) {
        ... on Order {
          id
        }
      }
    }`,
    },
    cookie
  );
}

export async function addPaymentToOrder(method, metadata) {
  return await createQuery({
    query: `
    mutation($metadata: JSON!, $method: String!) {
      addPaymentToOrder(input: {
        method: $method,
        metadata: $metadata
      }) {
        ... on Order {
          id
        }
      }
    }`,
    variables: {
      method,
      metadata,
    },
  });
}

export async function setOrderShippingAddress(
  fullName,
  streetLine1,
  streetLine2,
  city,
  province,
  phoneNumber,
  cookie
) {
  return await createQuery(
    {
      query: `
    mutation {
      setOrderShippingAddress(input: {
        fullName: "${fullName}",
        streetLine1: "${streetLine1}",
        streetLine2: "${streetLine2}",
        city: "${city}",
        province: "${province}",
        countryCode: "DE",
        phoneNumber: "${phoneNumber}"
      }) {
        ... on Order {
          ${OrderSchema}
        }
      }
    }`,
    },
    cookie
  );
}

export async function transitionOrderToState(state, cookie) {
  return await createQuery(
    {
      query: `
    mutation {
      transitionOrderToState(state: "${state}") {
        ... on OrderStateTransitionError {
          message
        }
        ... on Order {
          ${OrderSchema}
        }
      }
    }
    `,
    },
    cookie
  );
}

export async function getCollections() {
  return await createQuery({
    query: `
    query {
      collections {
        items {
          name
          slug
          featuredAsset {
            preview
          }
          productVariants {
            items {
              name
              product {
                id
                name
                slug
                featuredAsset {
                  preview
                }
                variants {
                  price
                }
              }
            }
          }
        }
      }
    }
    `,
  });
}

export async function getCollectionsShort() {
  return await createQuery({
    query: `
    query {
      collections {
        items {
          name
          slug
          featuredAsset {
            preview
          }
        }
      }
    }
    `,
  });
}
