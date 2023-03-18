const { WebClient } = require('@slack/web-api');
const web = new WebClient(process.env.SLACK_BOT_TOKEN);

module.exports = async function updateNotice() {
    // 1. 새로 업데이트 된 공지가 있는지 서버에 요청
    // 2. data 받아옴
    // 2-1. 없으면 없다고 알려줌
    // 2-2. 있으면 있는거 리스트 잘 포맷팅해서 보내줌.

    // 1. get

    // 2. check response

    // 3. send
    const message = "update Notice";
    try {
        await web.chat.postMessage (
            {
                text: message,
                channel: 'C04U5K4T29M',
            },
        )
    } catch (err) {
        console.log(err);
        throw err;
    }
}
