import { Almoco } from "./Almoco";

const almoco = new Almoco('peixe', 'arroz e feijão');

console.log(almoco.refeicao);

almoco.carne = 'Frango';

console.log(almoco.refeicao);
