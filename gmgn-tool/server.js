/**
 * GMGN Lite - 简单后端服务器
 * 
 * 功能：
 * 1. 提供静态文件服务（网页）
 * 2. 执行 onchainos 命令并返回结果
 * 
 * 代理配置：自动使用 172.23.80.1:7897
 */

const http = require('http');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// 设置代理环境变量
process.env.ALL_PROXY = 'http://172.23.80.1:7897';
process.env.https_proxy = 'http://172.23.80.1:7897';
process.env.http_proxy = 'http://172.23.80.1:7897';

/**
 * 执行 shell 命令
 */
function executeCommand(command) {
    return new Promise((resolve, reject) => {
        exec(command, { 
            env: { ...process.env },
            maxBuffer: 10 * 1024 * 1024 
        }, (error, stdout, stderr) => {
            if (error) {
                reject(new Error(stderr || error.message));
                return;
            }
            try {
                const result = JSON.parse(stdout);
                resolve(result);
            } catch (e) {
                reject(new Error('命令执行成功但返回非JSON: ' + stdout.substring(0, 200)));
            }
        });
    });
}

/**
 * 处理API请求
 */
async function handleApiRequest(req, res) {
    if (req.method !== 'POST') {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Method not allowed' }));
        return;
    }
    
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
        try {
            const { command } = JSON.parse(body);
            if (!command) {
                throw new Error('缺少 command 参数');
            }
            
            console.log(`[EXEC] ${command}`);
            const result = await executeCommand(command);
            res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
            res.end(JSON.stringify(result));
            
        } catch (error) {
            console.error(`[ERROR] ${error.message}`);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: error.message }));
        }
    });
}

/**
 * 处理静态文件请求
 */
function handleStaticRequest(req, res) {
    let filePath = req.url === '/' ? '/index.html' : req.url;
    filePath = path.join(__dirname, filePath);
    
    const ext = path.extname(filePath);
    const contentTypes = {
        '.html': 'text/html',
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg'
    };
    
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('Not Found');
            return;
        }
        
        res.writeHead(200, { 
            'Content-Type': contentTypes[ext] || 'text/plain',
            'Access-Control-Allow-Origin': '*'
        });
        res.end(data);
    });
}

// 创建HTTP服务器
const server = http.createServer((req, res) => {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }
    
    // API 请求
    if (req.url.startsWith('/api/')) {
        handleApiRequest(req, res);
        return;
    }
    
    // 静态文件
    handleStaticRequest(req, res);
});

server.listen(PORT, () => {
    console.log(`
╔═══════════════════════════════════════════════════╗
║   🚀 GMGN Lite 服务器已启动                      ║
║                                                   ║
║   访问地址: http://localhost:${PORT}               ║
║                                                   ║
║   代理: 172.23.80.1:7897                         ║
╚═══════════════════════════════════════════════════╝
    `);
});
