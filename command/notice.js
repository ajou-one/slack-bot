// // 학교 전체
async function noticeAjouUniv({ message, say }) {
    const response = 'ajou';
    await say(response);
}

// 단과대
async function noticeSwCollege({ message, say }) {
    const response = 'college';
    await say(response);
}

// 소웨
async function noticeSW({ message, say }) {
    const response = 'sw';
    await say(response);
}

// 사보
async function noticeCS({ message, say }) {
    const response = 'cs';
    await say(response);
}

// 미디어
async function noticeMD({ message, say }) {
    const response = 'md';
    await say(response);
}

// 도서관
async function noticeLib({ message, say }) {
    const response = 'library';
    await say(response);
}

// 경기도
async function noticeGG({ message, say }) {
    const response = 'gg';
    await say(response);
}

// 한국장학재단
async function noticeScholar({ message, say }) {
    const response = 'scholar';
    await say(response);
}

// 기식
async function noticeDom({ message, say }) {
    const response = 'dormitory';
    await say(response);
}

// 교식
async function ajouTeacher({ message, say }) {
    const response = 'teacher';
    await say(response);
}

module.exports = {noticeAjouUniv, ajouTeacher, noticeDom, noticeScholar, noticeGG, noticeLib, noticeSW, noticeMD, noticeCS, noticeSwCollege}
