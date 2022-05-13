# Astro Vendure storefront

[Demo](https://astrossr.minh.berlin)

## Description

This project attempts to deliever smooth e-commerce storefront experiences to customer/end user. It is powered by Vendure - headless commerce framework as backend and leveraging SSR functionalities and partial hydration on client side that Astro gives us.

## Features

support common ecommerce flow such as ordering and managing profile.

- Order flow:
  1. Add item to cart
  2. Modify cart
  3. Add shipping address
  4. Authorize payment (dummy payment provider for now)

- Profile management:
  - Orders
  - Addresses
  - Account detail

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

### React components

These are responsible for building UI components and interactivities on the client. As they are just React components, you can probably extract and use them anywhere else (in React project, or Nextjs project ...).
It also follows design-guide carefully in order to create modern looking UI. By quickly modifying color primary / typography / spacing system in tailwind-themes.js you are good to go with your brand.

```
├── src/
│   ├── components/
│   │   ├── ui
│   │   │    └── Button
│   │   │    └── Input
│   │   │    └── ...
│   │   ├── icon
│   │   │    └── ShoppingBag
│   │   │    └── Search
│   │   │    └── ...
│   │   ├── cart
│   │   │    └── index.jsx
│   │   │    └── ...
│   │   ├── checkout
│   │   │    └── index.jsx
│   │   │    └── ...
│   │   ├── product
│   │   │    └── index.jsx
│   │   │    └── ...
│   │   ├── profile
│   │   │    └── index.jsx
│   │   │    └── ...
│   │   ├── login
│   │   │    └── index.jsx
│   │   │    └── ...
│   │   ├── register
│   │   │    └── index.jsx
│   │   │    └── ...
```

### Astro components
```
├── src/
│   ├── pages/
│   │   └── index.astro
│   │   └── login.astro
│   │   └── register.astro
│   │   └── cart.astro
│   │   └── checkout.astro
│   │   ├── product
│   │   │    └── [slug].astro
│   │   ├── collection
│   │   │    └── [slug].astro
│   ├── layouts/
│   │   └── base.astro
```

## SSR functionalites

Every request from browser will be examined on server to see if the customer is logged in or there is any active order by checking the cookie from the request header. The server will therefore redirect to proper route.
This ensure that only proper customer/guest can see his/her private orders/info. It also makes Navbar always up-to-date.

## Powered by
- [Astro](https://astro.build)
- [Vendure](https://www.vendure.io)
- [React](https://reactjs.org)
- [TailwindCSS](https://tailwindcss.com)
- ...
