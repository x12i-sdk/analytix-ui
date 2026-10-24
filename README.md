# @x12i/analytix-ui usage example

React widgets for displaying Analytix metric, table, and matrix results.

This consuming application demonstrates **render metric and table widgets from an analytic result fixture** using the published npm package, pinned to `1.0.1`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Render a metric returned by an Analytix run.
- Display a matrix result using the shared MatrixWidget.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/analytix-ui)
- [Implementation monorepo](https://github.com/x12i/analytix)
- [Reviewed package source](https://github.com/x12i/analytix/tree/cf2ed708652df6f853af877340acc385d17c76f2/packages/analytix-ui)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Rendered fixture

Run the example, then open its generated `preview.html` or `workflow.svg`. The checks establish static rendering or SVG export for the authored fixture. Browser effects, interactions, responsive layout and deployed service behavior are not covered by this check. The host fixture contains no real customer data.
