require('dotenv/config')
const schedule = require('node-schedule'); // node schedule
const { App } = require('@slack/bolt');
const updateNotice = require("./updateNotice");
const {noticeAjouUniv, noticeLib, noticeCS, noticeMD, noticeSW, noticeSwCollege, noticeScholar, noticeGG, noticeDom, ajouTeacher} = require("./command/notice");
const help = require("./command/help");

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


// help
app.message('help', async ({ message, say }) => {
    await help({message, say});
});

// ajou
app.message('ajou', async ({ message, say }) => {
    await noticeAjouUniv({message, say});
});

// college
app.message('college', async ({ message, say }) => {
    await noticeSwCollege({message, say});
});

// sw
app.message('sw', async ({ message, say }) => {
    await noticeSW({message, say});
});

// sc
app.message('cs', async ({ message, say }) => {
    await noticeCS({message, say});
});

// md
app.message('md', async ({ message, say }) => {
    await noticeMD({message, say});
});

// library
app.message('library', async ({ message, say }) => {
    await noticeLib({message, say});
});

// dom
app.message('dom', async ({ message, say }) => {
    await noticeDom({message, say});
});

// teacher
app.message('teacher', async ({ message, say }) => {
    await ajouTeacher({message, say});
});

// gg
app.message('gg', async ({ message, say }) => {
    await noticeGG({message, say});
});

// scholar
app.message('scholar', async ({ message, say }) => {
    await noticeScholar({message, say});
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
    updateNotice();
    // slack();
})();
