## Getting Started

First, install all the packages, then start the server

```bash
yarn

yarn dev
```

### Environment variables

> **NOTE:** NEXT_PUBLIC is a prefix need it to expose .evn var to a public environment
> if you use something like API_KEY={{KEY}} it wont be available on a public .env, it will only be expose
> to the internal server that NextJs provide.
> NextJs internally has tow environments one is public which is expose thru react
> and the other is internal to handle all the api stuff.

```js
    NEXT_PUBLIC_DATO_CMS_API_KEY={{API_KEY}}
    NEXT_PUBLIC_DATO_CMS_API_URL={{API_KEY}}
```

### Theme 

to configure the theme, you can go to **`/<your user>/salesassist/tailwind.config.js`**,
in there you will find everything related to colors, and all the other defaults styles will be placed
on **`/<your user>/salesassist/styles/global.css`**,