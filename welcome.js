const figlet = require('figlet');

// Dynamically import chalk in CommonJS
(async () => {
    const chalk = (await import('chalk')).default; // Use dynamic import for chalk

    figlet('WELCOME', function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(chalk.red(data)); // Output the result in red
    });
})();


module.exports = figlet;
