import * as _ from 'lodash';

async function hello() {
  return 'world'
}

class Emoji {
  constructor(private icon: string) { }
}

const sun = new Emoji('🌞')
console.log(sun)
console.table([1, 2])
