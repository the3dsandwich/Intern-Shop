let updateDatabase = snap => {
  if (snap) {
    let database = [["", []]];
    let companyIndex = 0;

    snap.forEach(element => {
      if (element.company !== database[companyIndex][0]) {
        database.push([]);
        companyIndex++;
        database[companyIndex][0] = element.company;
        database[companyIndex][1] = [];
      }
      database[companyIndex][1].push(element);
    });

    database.reverse().pop();
    console.log(database.sort());
    return database.sort();
  }
};

export default updateDatabase;
