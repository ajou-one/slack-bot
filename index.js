require('dotenv/config')
const schedule = require('node-schedule'); // node schedule
const { App } = require('@slack/bolt');
const updateNotice = require("./updateNotice");

/**
 * schedule.scheduleJob(scheduling-type, callback)
 * scheduling-type: 스케줄링 타입 지정
 *
 * /* 순차적으로
 *    second(0-59)
 *    minute(0-59)
 *    hour(0-23)
 *    day(1-31)
 *    month(1-12)
 *    day of week(0-7)
 *    를 값으로 가집니다.
 *
 */

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

function slack() {
    // 매 30뷴 마다 '0 30 * * * *'
    // 매 5초 '5 * * * * *'

    // 새로 업데이트된 공지가 있으면 업데이트된 공지 리스트 알려줌.
    // 새로 업데이트된 공지가 없으면 없다고 알려줌.
    schedule.scheduleJob('* * * * * *', () => {
        console.log('schedule is executed')
        updateNotice();
    })
}

(async () => {
    await app.start(process.env.PORT || 3000);
    console.log('⚡️ Bolt app is running!');
    slack();
})();
