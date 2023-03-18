const { WebClient } = require('@slack/web-api');
const web = new WebClient(process.env.SLACK_BOT_TOKEN);
const fetch = require('node-fetch')
const url = 'http://localhost:8080';

const DUMMY = [
    {
        classify_code: "0",
        title: "[일자리+센터] 2023년 상반기 현직자 직무특강 안내(렛유인)",
        url: "https://www.ajou.ac.kr/kr/ajou/notice.do?mode=view&articleNo=212169&article.offset=0&articleLimit=10",
    },
    {
        classify_code: "1",
        title: "title 2",
        url: "aa",
    },
    {
        classify_code: "3",
        title: "title 3",
        url: "aa",
    },
    {
        classify_code: "6",
        title: "title 4",
        url: "aa",
    },
    {
        classify_code: "7",
        title: "title 5",
        url: "aa",
    },
    {
        classify_code: "0",
        title: "title 6",
        url: "https://www.ajou.ac.kr/kr/ajou/notice.do?mode=view&articleNo=212169&article.offset=0&articleLimit=10",
    },
    {
        classify_code: "0",
        title: "title 7",
        url: "https://sso.ajou.ac.kr/sso/processAuthnResponse.do",
    },
];

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
    let result = null;
    try {
        await fetch(url+'/recent', {
            method: "GET"
        }).then((r) => {
            return r.text();
        }).then((r) => {
            result = JSON.parse(r);
        })
    } catch(err) {
        console.log(err);
    }
    return result;
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
    response = DUMMY.sort((a,b) => {
        return a.classify_code - b.classify_code;
    });

    // 2. check response
    // 빈 배열이면 새로 업데이트 된 공지가 없는 것
    if(response.length) {
        message = `
        🔔 ${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일 ${date.getHours()}:${date.getMinutes()} 🔔\n\n새로 업데이트된 공지가 있습니다.
        `
        let prev = 0;
        let addMessage = ``;

        response.forEach((d, index) => {
            // d: {classify_code, title, url}
            if(index === 0 || prev !== d.classify_code) {
                prev = d.classify_code;
                message = message.concat(addMessage);
                addMessage = '';
                addMessage = addMessage.concat(`\n\n⭐️ ${notice[prev]} ⭐️`);
            }
            addMessage = addMessage.concat(`
            + [ ${d.title} ]
            + [  ${d.url}  ]\n
            `);
        });
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
