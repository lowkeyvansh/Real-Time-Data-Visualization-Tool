const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', ws => {
    console.log('Client connected');
    
    // Simulate real-time data
    setInterval(() => {
        const data = {
            timestamp: new Date().toISOString(),
            value: Math.random() * 100
        };
        ws.send(JSON.stringify(data));
    }, 1000); // Send data every second

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});
