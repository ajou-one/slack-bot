const fetch = require("node-fetch");
const ajouDummy = [
    {
        source: "0",
        title: "[일자리+센터] 2023년 상반기 현직자 직무특강 안내(렛유인)",
        url: "https://www.ajou.ac.kr/kr/ajou/notice.do?mode=view&articleNo=212169&article.offset=0&articleLimit=10",
    },
    {
        source: "0",
        title: "(재공지)[SW중심대학] 2023 상반기 현장실습 수기공모전 개최 안내 (~03.26까지)",
        url: "https://www.ajou.ac.kr/kr/ajou/notice.do?mode=view&articleNo=212169&article.offset=0&articleLimit=10",
    },
    {
        source: "0",
        title: "[일자리+센터] [Apple Retail] 아주대학교 대상 온라인 채용설명회(3/30)",
        url: "https://www.ajou.ac.kr/kr/ajou/notice.do?mode=view&articleNo=212169&article.offset=0&articleLimit=10",
    },
    {
        source: "0",
        title: "사회봉사센터 뉴스레터 제 1호 \"사랑의 쌀배달 봉사활동이 궁금해?\"",
        url: "https://www.ajou.ac.kr/kr/ajou/notice.do?mode=view&articleNo=212169&article.offset=0&articleLimit=10",
    },
]

const url = 'http://localhost:8080';
async function getAllNotice() {
    let response = null;
    try {
        const request = await fetch(url+'/all?start=0&end=6&&page=1', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response = await request.json();
        console.log(response)
    } catch(err) {
        console.log(err);
    }
    return response;
}

// 학교 전체
async function noticeAjouUniv({ message, say }) {
    let response = await getAllNotice();
    let responseMessage = ``;
    if(response.items.length) {
        response = response.items.filter((d) => {
            return d.classify_code === 0;
        });

        responseMessage = `🔔 Ajou Univ Notifications recent ${response.length} 🔔\n\n`;
        response.forEach((d, index) => {
            responseMessage = responseMessage.concat(`+ [ ${d.title} ]\n+ [  ${d.url}  ]\n\n\n`);
        });
    }
    await say(responseMessage);
}

// 단과대
async function noticeSwCollege({ message, say }) {
    let response = await getAllNotice();
    let responseMessage = ``;

    if(response.items.length) {
        response = response.items.filter((d) => {
            return d.classify_code === 1;
        });

        responseMessage = `🔔 Software College Notifications recent ${response.length} 🔔\n\n`;
        response.forEach((d, index) => {
            responseMessage = responseMessage.concat(`+ [ ${d.title} ]\n+ [  ${d.url}  ]\n\n\n`);
        });
    }
    await say(responseMessage);
}

// 소웨
async function noticeSW({ message, say }) {
    let response = await getAllNotice();
    let responseMessage = ``;

    if(response.items.length) {
        response = response.items.filter((d) => {
            return d.classify_code === 2;
        });

        responseMessage = `🔔 Software Major Notifications recent ${response.length} 🔔\n\n`;
        response.forEach((d, index) => {
            responseMessage = responseMessage.concat(`+ [ ${d.title} ]\n+ [  ${d.url}  ]\n\n\n`);
        });
    }
    await say(responseMessage);
}

// 사보
async function noticeCS({ message, say }) {
    let response = await getAllNotice();
    let responseMessage = ``;

    if(response.items.length) {
        response = response.items.filter((d) => {
            return d.classify_code === 3;
        });
        responseMessage = `🔔 Cyber Security Major Notifications recent ${response.length} 🔔\n\n`;
        response.forEach((d, index) => {
            responseMessage = responseMessage.concat(`+ [ ${d.title} ]\n+ [  ${d.url}  ]\n\n\n`);
        });
    }
    await say(responseMessage);
}

// 미디어
async function noticeMD({ message, say }) {
    let response = await getAllNotice();
    let responseMessage = ``;

    if(response.items.length) {
        response = response.items.filter((d) => {
            return d.classify_code === 4;
        });
        responseMessage = `🔔 Media Major Notifications recent ${response.length} 🔔\n\n`;
        response.forEach((d, index) => {
            responseMessage = responseMessage.concat(`+ [ ${d.title} ]\n+ [  ${d.url}  ]\n\n\n`);
        });
    }
    await say(responseMessage);
}

// 도서관
async function noticeLib({ message, say }) {

    let response = await getAllNotice();
    let responseMessage = ``;

    if(response.items.length) {
        response = response.items.filter((d) => {
            return d.classify_code === 5;
        });
        responseMessage = `🔔 Ajou Univ Library Notifications recent ${response.length} 🔔\n\n`;
        response.forEach((d, index) => {
            responseMessage = responseMessage.concat(`+ [ ${d.title} ]\n+ [  ${d.url}  ]\n\n\n`);
        });
    }
    await say(responseMessage);
}

// 수원시
async function noticeSuwon({ message, say }) {
    let response = await getAllNotice();
    let responseMessage = ``;

    if(response.items.length) {
        response = response.items.filter((d) => {
            return d.classify_code === 7;
        });
        responseMessage = `🔔 Suwon-city Notifications recent ${response.length} 🔔\n\n`;
        response.forEach((d, index) => {
            responseMessage = responseMessage.concat(`+ [ ${d.title} ]\n+ [  ${d.url}  ]\n\n\n`);
        });
    }
    await say(responseMessage);
}

// 경기도
async function noticeGG({ message, say }) {

    let response = await getAllNotice();
    let responseMessage = ``;

    if(response.items.length) {
        response = response.items.filter((d) => {
            return d.classify_code === 8;
        });
        responseMessage = `🔔 Gyeonggido Notifications recent ${response.length} 🔔\n\n`;
        response.forEach((d, index) => {
            responseMessage = responseMessage.concat(`+ [ ${d.title} ]\n+ [  ${d.url}  ]\n\n\n`);
        });
    }
    await say(responseMessage);
}

// 한국장학재단
async function noticeScholar({ message, say }) {
    let response = await getAllNotice();
    let responseMessage = ``;

    if(response.items.length) {
        response = response.items.filter((d) => {
            return d.classify_code === 9;
        });
        responseMessage = `🔔 Scholar Notifications recent ${response.length} 🔔\n\n`;
        response.forEach((d, index) => {
            responseMessage = responseMessage.concat(`+ [ ${d.title} ]\n+ [  ${d.url}  ]\n\n\n`);
        });
    }
    await say(responseMessage);
}

// 기식
async function noticeDorm({ message, say }) {

    let response = await getAllNotice();
    let responseMessage = ``;

    if(response.items.length) {
        response = response.items.filter((d) => {
            return d.classify_code === 6;
        });
        responseMessage = `🔔 Ajou Univ Dormitory Notifications recent ${response.length} 🔔\n\n`;
        response.forEach((d, index) => {
            responseMessage = responseMessage.concat(`+ [ ${d.title} ]\n+ [  ${d.url}  ]\n\n\n`);
        });
    }
    await say(responseMessage);
}

// 교식
async function ajouTeacher({ message, say }) {
    const response = ajouDummy;
    let responseMessage = ``;
    if(response.length) {
        responseMessage = `🔔 Today's Teacher restaurant menu 🔔\n\n`;
        response.forEach((d, index) => {
            responseMessage = responseMessage.concat(`+ [ ${d.title} ]\n+ [  ${d.url}  ]\n\n\n`);
        });
    }
    await say(responseMessage);
}

module.exports = {noticeAjouUniv, ajouTeacher, noticeDorm, noticeScholar, noticeSuwon, noticeGG, noticeLib, noticeSW, noticeMD, noticeCS, noticeSwCollege}
