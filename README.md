# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## IMPORTANT

- Never run prisma migrate or any query to update the database schema on this repo. It will end up wiping out the entire data. 
- Always run migrations from the admin repo 'celebria-admin'.
- Never run migrations directly on production database.
- Dont commit migrations during code push

## Development

The Remix dev server starts your app in development mode, rebuilding assets on file changes. To start the Remix dev server:

## Follow these steps

1. Pull latest db schema using(repo celebria-admin is managing the schemas, Use this command to sync the latest schema):
```sh
npm run dbpull
```
2. Generates the types for latest db schema:(Please restart the code editor incase the types are not reflecting on the imports)
```sh
npm run generate
```

3. Run the project:
```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

## Deployment

There are two ways to deploy your app, you can either link your app to your git repo and have it auto deploy changes to server, or you can deploy your app manually. If you've followed the setup instructions already, all you need to do is run this:
