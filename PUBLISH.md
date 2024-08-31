# Steps to publish a new version

- run `npm run build` to ensure the package is up to date.
- run `npm run format` to avoid workflow fails.
- run `npx changeset` to create a new changeset.
- run `npm run local-release` to publish the package to npm.

Aaand you're done!

P.S. Don't forget to sync your new commits.
