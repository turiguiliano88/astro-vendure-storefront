import { createQuery } from "../utils/client/gqlClient";
import { OrderSchema, CustomerSchema } from "./schema";

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

export async function getActiveOrder() {
  return await createQuery({
    query: `
      query {
        activeOrder {
          ${OrderSchema}
        }
      }`,
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
        ${CustomerSchema}
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

export async function login(username, password, rememberMe) {
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

export async function search(term) {
  return await createQuery({
    query: `
    query {
      search(input: {
        term: "${term}",
        take: 10
      }) {
        totalItems
        items {
          productAsset {
            preview
          }
          productName
          slug
        }
      }
    }
    `,
  });
}

export async function updateCustomer(firstName, lastName, phoneNumber) {
  return await createQuery({
    query: `
    mutation {
      updateCustomer(input: {
        firstName: "${firstName}",
        lastName: "${lastName}",
        phoneNumber: "${phoneNumber}"
      }) {
        id
        firstName
        lastName
        phoneNumber
      }
    }
    `,
  });
}

export async function adjustOrderLine(orderLineId, quantity) {
  return await createQuery({
    query: `
    mutation {
      adjustOrderLine(orderLineId: ${orderLineId}, quantity: ${quantity}) {
        ... on Order {
          ${OrderSchema}
        }
      }
    }
    `,
  });
}

export async function removeOrderLine(orderLineId) {
  return await createQuery({
    query: `
    mutation {
      removeOrderLine(orderLineId: ${orderLineId}) {
        ... on Order {
          ${OrderSchema}
        }
      }
    }
    `,
  });
}

export async function setCustomerForOrder(
  firstName,
  lastName,
  phoneNumber,
  emailAddress
) {
  return await createQuery({
    query: `
    mutation {
      setCustomerForOrder(input: {
        firstName: "${firstName}",
        lastName: "${lastName}",
        phoneNumber: "${phoneNumber}",
        emailAddress: "${emailAddress}"
      }) {
        ... on Order {
          ${OrderSchema}
        }
      }
    }
    `,
  });
}

export async function registerCustomerAccount(
  firstName,
  lastName,
  phoneNumber,
  emailAddress,
  password
) {
  return await createQuery({
    query: `
    mutation {
      registerCustomerAccount(input: {
        firstName: "${firstName}",
        lastName: "${lastName}",
        phoneNumber: "${phoneNumber}",
        emailAddress: "${emailAddress}",
        password: "${password}"
      }) {
        ... on Success {
          success
        }
        ... on MissingPasswordError {
          errorCode
          message
        }
        ... on NativeAuthStrategyError {
          errorCode
          message
        }
      }
    }
    `,
  });
}

export async function logout() {
  return await createQuery({
    query: `
    mutation {
      logout {
        success
      }
    }
    `,
  });
}
