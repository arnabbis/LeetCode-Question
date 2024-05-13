let command = "G()()()()(al)"

command = command.replace(/\(\al\)/g,'al')
command = command.replace(/\(\)/g,'o');

console.log(command)