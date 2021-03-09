# How to Contribute

## Setting Up Your Local Dev Environment

This project uses [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) so you can run the Gatsby theme locally with an example site.

```sh
  git clone https://github.com/sebsojeda/gatsby-theme-purist.git

  cd gatsby-theme-purist

  yarn
```

Once you've downloaded the repository and installed all the dependencies you can run the project locally.

```sh
  yarn dev
```

### Adding features and modifying the theme

Before making any large changes please create an issue to discuss the change or a draft PR.

### Fixing typos, syntax errors, and types

You do not have to create an issue or request a fix to these issues.

## Commitlint Guidelines

In order for the publishing workflows with Lerna to properly function, please follow the [.commitlintrc.yml](https://github.com/sebsojeda/gatsby-theme-purist/blob/main/.commitlintrc.yaml) rules.

Commits should start with a type and the header shouldn't have more than 72 characters.

### Possible types

- `chore`: Change build process, tooling or dependencies.
- `ci`: Changes to the CI configuration files and scripts.
- `feat`: Adds a new feature.
- `fix`: Solves a bug.
- `docs`: Adds or alters documentation.
- `style`: Improves formatting, white-space.
- `refactor`: Rewrites code without feature, performance or bug changes.
- `perf`: Improves performance.
- `test`: Adds or modifies tests.
- `revert`: Changes that revert other changes

ex: `git commit -m "feat: adding the next best thing"`
