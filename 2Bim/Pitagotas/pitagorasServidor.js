const express = require('express');
const os = require('os');

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Middleware CORS para permitir qualquer origem
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // '*' permite qualquer origem
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
//se vier uma requisição POST para a rota /enviar-mensagem, o servidor irá processar a mensagem recebida, convertê-la para maiúsculas e enviar uma resposta de volta ao cliente.
app.post('/calcularPit', (req, res) => {
    // 1. Recebe os dados (convertendo para número para não dar erro)
    const a = Number(req.body.a);
    const b = Number(req.body.b);

    // 2. Aplica a fórmula
    const resultado = `Hipotenusa = ${Math.sqrt(a**2 + b**2).toFixed(2)}`;

    // 3. Exibe no console do servidor para você conferir
    console.log(`Calculando Pitágoras para catetos: ${a} e ${b}`);

    // 4. Envia a resposta exatamente como o exercício pediu
    res.send(`A hipotenusa para os catetos digitados é: ${resultado}`);
});

const obterIP = () => {
    const interfaces = os.networkInterfaces();
    for (let nomeInterface in interfaces) {
        for (let info of interfaces[nomeInterface]) {
            if (info.family === 'IPv4' && !info.internal) return info.address;
        }
    }
    return 'localhost';
};

const ip = obterIP()

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://${ip}:${port}`)
});