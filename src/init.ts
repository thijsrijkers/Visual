import {Configure} from './conf';
const fs = require("fs");

const conf = new Configure();
cloneRepo();

async function cloneRepo(): Promise<void> {
    try {
        if (!fs.existsSync('dist')) 
            fs.mkdirSync('dist')

        await conf.git.init();
        await conf.git.clone(JSON.parse(fs.readFileSync('package.json', 'utf8'))['target'], './dist')
    } catch (error) {
        await conf.git.pull()
    }
}
