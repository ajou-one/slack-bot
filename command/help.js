const { WebClient } = require('@slack/web-api');
const web = new WebClient(process.env.SLACK_BOT_TOKEN);

module.exports = async function help({ message, say }) {
    // 다른 command
    const helpMessage = `📌 Command List 📌\n
- help: print AjouOne Bot command list\n
- ajou: print Ajou Univ recent notifications\n`;
    // - college: print college of Computing and Informatics notifications
    // - sw: print Software major notifications
    // - cs: print Cyber Security major notifications
    // - md: print Media major notifications
    // - library: print Ajou Library notifications
    // - dorm: print Ajou Dormitary notifications
    // - scholar: print kosaf notifications
    // - suwon: print Suwon-city notifications
    // - gg: print Gyeonggido notifications
    await say(helpMessage);
}
