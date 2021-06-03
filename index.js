function  replace(remove){
 return remove.split('!').join('')
}

console.log(replace("Hello World!"))

const removeExclamationMarks  =s => s.replace(/!/g,'')

console.log(removeExclamationMarks('Sajib!'))