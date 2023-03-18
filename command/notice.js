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


// 학교 전체
async function noticeAjouUniv({ message, say }) {
    const response = ajouDummy;
    let responseMessage = ``;
    if(response.length) {
        responseMessage = `🔔 Ajou Univ Notifications recent ${response.length} 🔔\n\n`;
        response.forEach((d, index) => {
            responseMessage = responseMessage.concat(`+ [ ${d.title} ]\n+ [  ${d.url}  ]\n\n\n`);
        });
    }
    await say(responseMessage);
}

// 단과대
async function noticeSwCollege({ message, say }) {
    const response = ajouDummy;
    let responseMessage = ``;
    if(response.length) {
        responseMessage = `🔔 Software College Notifications recent ${response.length} 🔔\n\n`;
        response.forEach((d, index) => {
            responseMessage = responseMessage.concat(`+ [ ${d.title} ]\n+ [  ${d.url}  ]\n\n\n`);
        });
    }
    await say(responseMessage);
}

// 소웨
async function noticeSW({ message, say }) {
    const response = ajouDummy;
    let responseMessage = ``;
    if(response.length) {
        responseMessage = `🔔 Softwre Major Notifications recent ${response.length} 🔔\n\n`;
        response.forEach((d, index) => {
            responseMessage = responseMessage.concat(`+ [ ${d.title} ]\n+ [  ${d.url}  ]\n\n\n`);
        });
    }
    await say(responseMessage);
}

// 사보
async function noticeCS({ message, say }) {
    const response = ajouDummy;
    let responseMessage = ``;
    if(response.length) {
        responseMessage = `🔔 Cyber Security Major Notifications recent ${response.length} 🔔\n\n`;
        response.forEach((d, index) => {
            responseMessage = responseMessage.concat(`+ [ ${d.title} ]\n+ [  ${d.url}  ]\n\n\n`);
        });
    }
    await say(responseMessage);
}

// 미디어
async function noticeMD({ message, say }) {
    const response = ajouDummy;
    let responseMessage = ``;
    if(response.length) {
        responseMessage = `🔔 Media Major Notifications recent ${response.length} 🔔\n\n`;
        response.forEach((d, index) => {
            responseMessage = responseMessage.concat(`+ [ ${d.title} ]\n+ [  ${d.url}  ]\n\n\n`);
        });
    }
    await say(responseMessage);
}

// 도서관
async function noticeLib({ message, say }) {
    const response = ajouDummy;
    let responseMessage = ``;
    if(response.length) {
        responseMessage = `🔔 Ajou Univ Library Notifications recent ${response.length} 🔔\n\n`;
        response.forEach((d, index) => {
            responseMessage = responseMessage.concat(`+ [ ${d.title} ]\n+ [  ${d.url}  ]\n\n\n`);
        });
    }
    await say(responseMessage);
}

// 수원시
async function noticeSuwon({ message, say }) {
    const response = ajouDummy;
    let responseMessage = ``;
    if(response.length) {
        responseMessage = `🔔 Suwon-city Notifications recent ${response.length} 🔔\n\n`;
        response.forEach((d, index) => {
            responseMessage = responseMessage.concat(`+ [ ${d.title} ]\n+ [  ${d.url}  ]\n\n\n`);
        });
    }
    await say(responseMessage);
}

// 경기도
async function noticeGG({ message, say }) {
    const response = ajouDummy;
    let responseMessage = ``;
    if(response.length) {
        responseMessage = `🔔 Gyeonggido Notifications recent ${response.length} 🔔\n\n`;
        response.forEach((d, index) => {
            responseMessage = responseMessage.concat(`+ [ ${d.title} ]\n+ [  ${d.url}  ]\n\n\n`);
        });
    }
    await say(responseMessage);
}

// 한국장학재단
async function noticeScholar({ message, say }) {
    const response = ajouDummy;
    let responseMessage = ``;
    if(response.length) {
        responseMessage = `🔔 Scholar Notifications recent ${response.length} 🔔\n\n`;
        response.forEach((d, index) => {
            responseMessage = responseMessage.concat(`+ [ ${d.title} ]\n+ [  ${d.url}  ]\n\n\n`);
        });
    }
    await say(responseMessage);
}

// 기식
async function noticeDorm({ message, say }) {
    const response = ajouDummy;
    let responseMessage = ``;
    if(response.length) {
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
