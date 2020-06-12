const filterNames = (arr,text)=>{
	return arr.filter(name=>name.length>5 && name.includes(text));
}

console.log(filterNames(['Alexandru','Maksym','Nasty','Sergey','Timofey'],'ey'));