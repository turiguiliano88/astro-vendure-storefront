# Astro Vendure storefront

[Demo](https://astrossr.minh.berlin)

## Description

This project attempts to deliever smooth, mobile-friendly e-commerce storefront experiences to customer/end user. It is powered by Vendure - headless commerce framework as backend and ~~leveraging SSR functionalities~~ and partial hydration on client side that Astro gives us.

**Due to the instability and server's performance, I am switching to SSG for the moment. If you're interested in SSR version in the main branch, you can check out branch /ssr also in this repository**

## Features

This project supports common ecommerce flow such as ordering and managing profile.

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

These are responsible for layout / non-state Astro component rendered at server.

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

### Api

These are responsible for api logic serving only in server or public for client.

```
├── src/
│   ├── api/
│   │   └── client.js
│   │   └── server.js
```

## Future improvements

1. Addresses management
2. Write test
3. ...

## Powered by

- [Astro](https://astro.build)
- [Vendure](https://www.vendure.io)
- [React](https://reactjs.org)
- [TailwindCSS](https://tailwindcss.com)
- ...

## About me

I am Minh from Berlin. Coding and desiging are my jobs 😁

I hope you find this project useful!

```

```
