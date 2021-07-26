const chalk = require('chalk');
const fetch = require('node-fetch');

class Client {
    constructor(key) {
        super(key);
        this.key = key;
        console.log(chalk.green('[API]') + '' + 'API Key Found, Attempting Connection...');
        await checkToken(key);
    }

    async checkToken(api) {
        fetch(`https://api.mkcomputing.uk/auth/token/validate/${api}`).then(res => res.text()).then(body => {
            this.tokenChecked = true;
            this.tokenStatus = body;
        });
    }

    async serverStatus() {

    }

}