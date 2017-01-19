'use strict';

const fs = require('fs');
const path = require('path');
const winston = require('winston');
const runAfter = require('./runafter');

/**
 * Given a `name` to ignore, returns a string through callback containing all
 * of the files to ignore for that type.
 * @param {string} gitignoreLib relative path to the gitignore lib
 * @param {string} fileType the type of the file names to ignore
 * @param {fetchIgnoresCallback} callback that handles the contents of the returned file.
 */
module.exports = function fetchIgnores(gitignoreLib, fileType, callback) {
  fs.readdir(path.join(__dirname, gitignoreLib), (err, files) => {
    if (err) {
      callback(err);
      return;
    }

    const dirs = [];

    // return an empty callback if the fileType is not found.
    const done = runAfter(files.length, () => {
      if (dirs.length === 0) {
        winston.debug(`Calling the empty callback for fileType ${fileType} and lib ${gitignoreLib}`);
        callback();
      } else {
        winston.debug(`Fetching subdir ignores for fileType ${fileType} and lib ${gitignoreLib}`);
        for (const filename of dirs) {
          fetchIgnores(path.join(gitignoreLib, filename), fileType, callback);
        }
      }
    });

    for (const filename of files) {
      const filePath = path.join(__dirname, gitignoreLib, filename);
      fs.lstat(filePath, (err, stats) => {
        if (err) {
          callback(err);
          return;
        }

        if (stats.isFile() && filename.toLowerCase() === `${fileType.toLowerCase()}.gitignore`) {
          // the right file is found, now return its contents
          fs.readFile(filePath, {encoding: 'utf8'}, (err, data) => {
            if (err) {
              callback(err);
              return;
            }

            callback(null, data);
          });
        } else if (stats.isDirectory() && filename[0] !== '.') {
          dirs.push(filename);
          done();
        } else {
          done();
        }
      });
    }
  });
};

/**
 * This callback handles the returned data from the gitignore file.
 * @callback fetchIgnoresCallback
 * @param {Error} err
 * @param {string} data the contents of the gitignore file
 */
