const getMessagesForBestStudents =(allStudents,failedStudents) =>
	allStudents.filter(name=>!failedStudents.includes(name)).map(name =>'Good job, ' + name);

console.log(getMessagesForBestStudents(['Maks','Alex','Peter','Sergey'],['Alex','Peter']));