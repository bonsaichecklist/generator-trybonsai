"use strict";

const Generator = require("yeoman-generator");
const chalk = require("chalk");

module.exports = class extends Generator {
  async prompting() {
    console.log(
      chalk.red.bold.underline("Please use trybonsai:component instead!")
    );
  }
};
