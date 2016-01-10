function solve(arr) {
    var result = [];
    for (var i = 1; i <= arr[0]; i++) {
        var logInfo = arr[i].split(/\s+/),
            ip = logInfo[0],
            userName = logInfo[1],
            duration = +logInfo[2] ,
            newUser = {userName: userName, duration: duration, ips: [ip]}
        if(result.filter(function(u) {return u.userName == userName})[0]) {
            var user =  result.filter(function(u) {return u.userName == userName})[0];
            user.duration += duration;
            if(user.ips.indexOf(ip) == -1) {
                user.ips.push(ip);
                user.ips.sort();
            }
        } else {
            result.push(newUser);
        }
    }

    result.sort(function(x, y) {
        return x.userName.localeCompare(y.userName);
    });
    result.forEach(function(user) {
        console.log(user.userName + ': ' + user.duration + ' [' + user.ips.join(', ') + ']');
    })

}

solve([
    '7',
    '192.168.0.11 peter 33',
    '10.10.17.33 alex 12',
    '10.10.17.35 peter 30',
    '10.10.17.34 peter 120',
    '10.10.17.34 peter 120',
    '212.50.118.81 alex 46',
    '212.50.118.81 alex 4'
]);

solve([
    '4',
    '10.10.10.10 root 46',
    '8.8.8.8 root 167',
    '1.2.3.4 root 120',
    '5.6.7.8 root 970',
    '192.168.0.11 root 55'
]);