const { WebClient } = require('@slack/web-api');
const web = new WebClient(process.env.SLACK_BOT_TOKEN);
const fetch = require('node-fetch')
const url = 'http://localhost:8080';

const notice = [
    '학교 공지사항', // 0
    '소프트웨어융합대학 공지사항', // 1
    '소프트웨어학과 공지사항', // 2
    '사이버보안학과 공지사항', // 3
    '미디어학과 공지사항', // 4
    '도서관 공지사항', // 5
    '생활관 공지사항', // 6
    '수원시청 공지사항', // 7
    '경기도청 공지사항', // 8
    '한국장학재단 공지사항', // 9\
];

async function getNewNotice() {
    let response = null;
    try {
        const request = await fetch(url+'/recent?page=1', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response = await request.json();
        console.log(response);
    } catch(err) {
        console.log(err);
    }
    return response;
}


module.exports = async function updateNotice() {
    const date = new Date();
    // 🚫
    // 🔔

    let message = `
   🚫 ${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일 ${date.getHours()}:${date.getMinutes()} 🚫\n\n새로 업데이트된 공지가 없습니다.
    `
    // 1. 새로 업데이트 된 공지가 있는지 서버에 요청
    let response = await getNewNotice();
    // 2. data 받아옴
    // 2-1. 없으면 없다고 알려줌
    // 2-2. 있으면 있는거 리스트 잘 포맷팅해서 보내줌.

    // 1. get
    // response = DUMMY.sort((a,b) => {
    //     return a.classify_code - b.classify_code;
    // });

    // 2. check response
    // 빈 배열이면 새로 업데이트 된 공지가 없는 것
    if(response.items.length) {
        message = `
        🔔 ${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일 ${date.getHours()}:${date.getMinutes()} 🔔\n\n새로 업데이트된 공지가 있습니다.
        `
        let prev = 0;
        let addMessage = ``;

        response.items.forEach((d, index) => {
            // d: {classify_code, title, url}
            if(index === 0 || prev !== d.classify_code) {
                prev = d.classify_code;
                addMessage = '';
                addMessage = addMessage.concat(`\n\n⭐️ ${notice[prev]} ⭐️`);
            }

            addMessage = addMessage.concat(`\n+ [ ${d.title} ]\n+ [  ${d.url}  ]\n
            `);
            message = message.concat(addMessage);
        });

        console.log(message);
    }

    // 3. send
    try {
        await web.chat.postMessage (
            {
                text: message,
                channel: 'C04UPF4Q4UC',
            },
        )
    } catch (err) {
        console.log(err);
        throw err;
    }
}
