import {Configure} from './conf';

const conf = new Configure();
cloneRepo();

async function cloneRepo(): Promise<void> {
    try {
        await conf.git.init();
        await conf.git.clone('https://github.com/thijsrijkers/Enchantment.git', './dist')
    } catch (error) {
        await conf.git.pull()
    }
}
