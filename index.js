const customExpress = require('./config/customexpress')
const conexao = require('./infraestruruta/conexao')
const Tabelas = require('./infraestruruta/tabelas')
const app = customExpress()

conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    }
    else {
        console.log('Conectado com sucesso')

        Tabelas.init(conexao)
        const app = customExpress()
        app.listen(3333, () => console.log('Servidor rodando na porta 3000'))
    }
})