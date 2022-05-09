import { createQuery } from "../utils/gqlClient";

const OrderSchema = `
  id
  state
  createdAt
  code
  totalQuantity
  shipping
  subTotal
  total
  lines {
    id
    featuredAsset {
      preview
    }
    productVariant {
      name
      product {
        name
      }
      featuredAsset {
        preview
      }
    }
    quantity
    linePrice
  }
`;

export async function addItemToOrder({ productVariantId, quantity }) {
  return await createQuery({
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
  });
}

export async function getActiveOrder(clientToken) {
  return await createQuery({
    query: `
      query {
        activeOrder {
          ${OrderSchema}
        }
      }`,
    clientToken: clientToken,
  });
}

export async function getCurrentUser(id) {
  return await createQuery({
    query: `
    
    `,
  });
}

export async function getActiveCustomer() {
  return await createQuery({
    query: `
    query {
      activeCustomer {
        id
        lastName
        firstName
        emailAddress
        addresses {
          fullName
          streetLine1
          streetLine2
          city
          province
          phoneNumber
          defaultShippingAddress
        }
        user {
          id
        }
        orders {
          items {
            ${OrderSchema}
          }
        }
      }
    }`,
  });
}

export async function getMe() {
  return await createQuery({
    query: `
    query {
      me {
        id
      }  
    }`,
  });
}

export async function getProducts() {
  return await createQuery({
    query: `
        query {
          products {
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

export async function setOrderShippingMethod(id) {
  return await createQuery({
    query: `
    mutation {
      setOrderShippingMethod(shippingMethodId: ${id}) {
        ... on Order {
          id
        }
      }
    }`,
  });
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
  phoneNumber
) {
  return await createQuery({
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
  });
}

export async function transitionOrderToState(state) {
  return await createQuery({
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
  });
}
