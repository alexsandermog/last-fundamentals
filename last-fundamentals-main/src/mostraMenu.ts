import PromptSync = require("prompt-sync")
import { Menu } from "./Menu";

function mostraMenu () {
    console.clear()
    console.log('---Menu de opções: ---\n');
    console.log('1 - Cadastrar');
    console.log('2 - Logar');
    console.log('3 - Alterar');
    console.log('4 - Sair');
    
    
    console.log('3 - Sair');
    const option = prompt ('\nEscolha sua opção: ')
    let game : Menu

    switch (option) {
        case '1':
            game = Menu.Cadastro
            break
        case '2':
            game = Menu.Login
            break
        case '3':
            game = Menu.Alterar
            break
        case '4':
            game = Menu.Sair
            break
    }
    return game
}

export { mostraMenu }