const host = '0.0.0.0'
const port = 8080
const http = require("http");
const os = require("os");

const userInfo = os.userInfo()

const listener = function (req, res) {
    res.writeHead(200);
    res.end(`I'm alive! Btw, my user/group IDs: ${userInfo.uid}/${userInfo.gid}`);
};
const server = http.createServer(listener);
server.listen(port, host, () => {
    console.log(`NodeJS server is running on http://${host}:${port}`);
});