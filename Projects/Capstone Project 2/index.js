//<!--Deliverables One Node Project -->
//<!--one EJS -->
//<!--one CSS file -->

import express from "express";
import nodemon from "nodemon";
import inquirer from "inquirer";


inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });