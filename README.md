# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## IMPORTANT

- Never run prisma migrate or any query to update the database schema on this repo. It will end up wiping out the entire data. Always run migrations from admin repo 'celebria-admin'

## Development

The Remix dev server starts your app in development mode, rebuilding assets on file changes. To start the Remix dev server:

Pull latest db schema using:
```sh
npm run dbpull
```
Generates the types for latest db schema: 
```sh
npm run generate
```

Run the project:
```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

## Deployment

There are two ways to deploy your app, you can either link your app to your git repo and have it auto deploy changes to server, or you can deploy your app manually. If you've followed the setup instructions already, all you need to do is run this:
