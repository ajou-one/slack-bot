const { WebClient } = require('@slack/web-api');
const web = new WebClient(process.env.SLACK_BOT_TOKEN);

module.exports = async function help({ message, say }) {
    // 다른 command
    const helpMessage = `📌 Command List 📌\n
- help: print AjouOne Bot command list\n
- ajou: print Ajou Univ all notifications\n
- college: print college of Computing and Informatics notifications\n
- sw: print Software major notifications\n
- cs: print Cyber Security major notifications\n
- md: print Media major notifications\n
- library: print Ajou Library notifications\n
- dom: print Ajou Dormitary notifications\n
- food: print Today Ajou restraunt menu\n
- scholar: print kosaf notifications\n
- gg: print Gyeonggido notifications`;
    await say(helpMessage);
}
