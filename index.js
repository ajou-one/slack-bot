require('dotenv/config')
const { App } = require('@slack/bolt');

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true,
    appToken: process.env.SLACK_APP_TOKEN
});

// hello 입력받으면 channel에 `Hey there <@${message.user}>!` 출력
app.message('hello', async ({ message, say }) => {
    await say(`Hey there <@${message.user}>!`);
});

(async () => {
    await app.start(process.env.PORT || 3000);
    console.log('⚡️ Bolt app is running!');
})();
