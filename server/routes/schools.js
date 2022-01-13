const { Router } = require("express");
const { readFile, writeFile } = require("../utils/helpers");
const fs = require("fs");

const schoolRouter = Router();
const FILE_PATH = "./data/schools.json";
