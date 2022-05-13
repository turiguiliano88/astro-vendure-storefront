export const OrderSchema = `
  id
  state
  createdAt
  code
  totalQuantity
  shipping
  subTotal
  total
  customer {
    id
    firstName
    lastName
    emailAddress
  }
  lines {
    id
    featuredAsset {
      preview
    }
    productVariant {
      name
      product {
        name
        slug
      }
      featuredAsset {
        preview
      }
    }
    quantity
    linePrice
  }
`;

export const CustomerSchema = `
    lastName
    firstName
    emailAddress
    phoneNumber
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
`;
