"use strict";
const Generator = require("yeoman-generator");
const camelCase = require("camelcase");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    // This makes `appname` a required argument.
    this.argument("name", { type: String, required: false });

    // And you can then access it later; e.g.
    this.log("Creating component", this.options.name);
  }

  async prompting() {
    if (this.options.name) return;

    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the wondrous ${chalk.red("generator-remoteit")} generator!`
      )
    );

    // TODO: require an argument of the component name instead?
    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of your component? (e.g. MyComponent)",
      },
    ]);
  }

  writing() {
    const rawName = this.options.name || this.answers.name;

    let name = rawName;
    let basePath = "src/components";

    // If the name includes a path, parse out the file name and
    // base path and use those.
    if (rawName.includes("/")) {
      const parts = rawName.split("/");
      name = parts.pop();
      basePath = parts.join("/");
    }

    // Make sure name is CamelCased
    name = camelCase(name, { pascalCase: true });

    // Copy index
    this.fs.copyTpl(
      this.templatePath("index.ts"),
      this.destinationPath(`${basePath}/${name}/index.ts`),
      { name }
    );

    // Copy component
    this.fs.copyTpl(
      this.templatePath("Component.tsx"),
      this.destinationPath(`${basePath}/${name}/${name}.tsx`),
      { name }
    );

    // Copy test
    this.fs.copyTpl(
      this.templatePath("Component.test.tsx"),
      this.destinationPath(`${basePath}/${name}/${name}.test.tsx`),
      { name }
    );

    // Copy story
    this.fs.copyTpl(
      this.templatePath("Component.stories.tsx"),
      this.destinationPath(`${basePath}/${name}/${name}.stories.tsx`),
      { name }
    );
  }
};
