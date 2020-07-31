# generator-trybonsai

> Bonsai React component generator powered by Yeomaan

The `trybonsai:component` generator creates a React component directory with a Jest test file, Storybook story file and a simple Typescript base React component to speed up creating of new React components.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-trybonsai using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```shell
npm install -g yo
npm install -g generator-trybonsai
```

## Usage

Generate a new React component folder:

```shell
yo trybonsai:component

# or specify a name directly:
yo trybonsai:component MyComponent
```

This will create a component directory at `src/components/MyComponent` with the following structure:

```
src/
  components/
    MyComponent/
      index.ts
      MyComponent.tsx
      MyComponent.test.tsx
      MyComponent.stories.tsx
```

You can optionally pass a path to place the component wherever you want:

```shell
yo trybonsai:component web/components/Foo
```

## License

MIT © [Bonsai](https://trybonsai.com), Inc.

## Credits

[Dana Woodman](https://danawoodman.com)
