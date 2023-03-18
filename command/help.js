const { WebClient } = require('@slack/web-api');
const web = new WebClient(process.env.SLACK_BOT_TOKEN);

module.exports = async function help({ message, say }) {
    // 소개
    // 사용법
    // 다른 command
    await say(`help`);
}
