const sortContacts = (contactsArr, Boolean = true) => {
	
	if (!Array.isArray(contactsArr))
		return null;
	
	const result = contactsArr.sort((a,b) => {
		if (Boolean === false)
			return b.name.localeCompare(a.name);
		return a.name.localeCompare(b.name);
	});
	return result;
};