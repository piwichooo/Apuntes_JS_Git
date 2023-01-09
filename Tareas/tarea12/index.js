import chalk from 'chalk';
import * as modulosMates from './modulos/controller.js'

const sum1 = modulosMates.suma(1, 2)
const sum2 = modulosMates.suma(4, 5)

const mul = modulosMates.multiplica(sum1, sum2)
console.log(chalk.green(mul));
