function followers(input) {
    let command = input.shift();
    let commands = { newFollower, like, comment, blocked };
    let followersObj = {};
    while (command != "Log out") {
        let [commandName, p1, p2] = command.split(': ');
        if (commandName == 'New follower') {
            commandName = 'newFollower';
        } else {
            commandName = commandName.toLocaleLowerCase();
        }
        commands[commandName](followersObj, p1, p2)
        command = input.shift()
    }
    console.log(`${Object.keys(followersObj).length} followers`);
    for (let follower  in followersObj) {
        console.log(`${follower}: ${followersObj[follower].likes + followersObj[follower].comments}`);
    }
    function newFollower(objToAddTo, usrName) {
        if (!objToAddTo.hasOwnProperty(usrName)) {
            objToAddTo[usrName] = { likes: 0, comments: 0 };
        }
    }
    function like(objToAddTo, usrName, count) {
        if (objToAddTo.hasOwnProperty(usrName)) {
            objToAddTo[usrName].likes += Number(count);
        } else {
            objToAddTo[usrName] = { likes: Number(count), comments: 0 };
        }
    }
    function comment(objToAddTo, usrName) {
        if (objToAddTo.hasOwnProperty(usrName)) {
            objToAddTo[usrName].comments++;
        } else {
            objToAddTo[usrName] = { likes: 0, comments: 1 };
        }
    }
    function blocked(obj, usrName) {
        if (obj.hasOwnProperty(usrName)) {
            delete obj[usrName];
        } else {
            console.log(`${usrName} doesn't exist.`);
        }
    }
}
followers((["New follower: George",
    "Like: George: 5",
    "New follower: George",
    "Log out"])
)
console.log('-------');
followers(["Like: Katy: 3",
    "Comment: Katy",
    "New follower: Bob",
    "Blocked: Bob",
    "New follower: Amy",
    "Like: Amy: 4",
    "Log out"])
console.log('----------');
followers(["Blocked: Amy",
    "Comment: Amy",
    "New follower: Amy",
    "Like: Tom: 5",
    "Like: Ellie: 5",
    "Log out"])
