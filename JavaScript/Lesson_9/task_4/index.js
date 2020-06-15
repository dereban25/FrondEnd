const getPeople = obj => Object.values(obj).flat()
	.map(obj => Object.values(obj)).flat();


rooms = {
      room1: [
            {name: 'room1 name1'},
            {name: 'room1 name2'},
            {name: 'room1 name3'},
            {name: 'room1 name4'},
      ],
      room3: [
            {name: 'room3 name1'},
            {name: 'room3 name2'},
            {name: 'room3 name3'},
      ],
}

console.log(getPeople(rooms));