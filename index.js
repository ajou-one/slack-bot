require('dotenv/config')
const schedule = require('node-schedule'); // node schedule
const { App } = require('@slack/bolt');
const updateNotice = require("./updateNotice");
const {noticeAjouUniv, noticeLib, noticeCS, noticeMD, noticeSW, noticeSwCollege, noticeScholar, noticeGG, noticeDorm, ajouTeacher,
    noticeSuwon
} = require("./command/notice");
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
app.message(new RegExp('^help$'), async ({ message, say }) => {
    await help({message, say});
});

// ajou
app.message(new RegExp('^ajou$'), async ({ message, say }) => {
    await noticeAjouUniv({message, say});
});

// // college
// app.message(new RegExp('^college$'), async ({ message, say }) => {
//     await noticeSwCollege({message, say});
// });
//
// // sw
// app.message(new RegExp('^sw$'), async ({ message, say }) => {
//     await noticeSW({message, say});
// });
//
// // sc
// app.message(new RegExp('^cs$'), async ({ message, say }) => {
//     await noticeCS({message, say});
// });
//
// // md
// app.message(new RegExp('^md$'), async ({ message, say }) => {
//     await noticeMD({message, say});
// });
//
// // library
// app.message(new RegExp('^library$'), async ({ message, say }) => {
//     await noticeLib({message, say});
// });
//
// // dorm
// app.message(new RegExp('^dorm$'), async ({ message, say }) => {
//     await noticeDorm({message, say});
// });

// TODO:: teacher is deprecated
// // teacher
// app.message(new RegExp('^teacher$'), async ({ message, say }) => {
//     await ajouTeacher({message, say});
// });

// suwon
// app.message(new RegExp('^suwon$'), async ({ message, say }) => {
//     await noticeSuwon({message, say});
// });
//
// // gg
// app.message(new RegExp('^gg$'), async ({ message, say }) => {
//     await noticeGG({message, say});
// });
//
// // scholar
// app.message(new RegExp('^scholar$'), async ({ message, say }) => {
//     await noticeScholar({message, say});
// });

function slack() {
    // 매 30뷴 마다 '0 30 * * * *'
    // 매 5초 '5 * * * * *'

    // 새로 업데이트된 공지가 있으면 업데이트된 공지 리스트 알려줌.
    // 새로 업데이트된 공지가 없으면 없다고 알려줌.
    schedule.scheduleJob('* 5 * * * *', () => {
        console.log('schedule is executed')
        updateNotice();
    })
}

(async () => {
    await app.start(process.env.PORT || 3100);
    console.log('⚡️ Bolt app is running!');
    slack();
})();
