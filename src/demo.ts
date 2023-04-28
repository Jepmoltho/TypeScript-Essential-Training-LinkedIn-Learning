//Task: Only apply Contact type in param

interface Contact {
  id: number;
  name: string;
}

function returnContact(source: Contact): Contact {
  return source;
}

function clone(source: Contact) {
  return Object.apply({}, source);
}

function cloneTwo(
  source: Contact,
  func: (source: Contact) => Contact
): Contact {
  return Object.apply({}, source);
}

function myGenericFunction<T>(humlebuks: T): T {
  return humlebuks;
}

myGenericFunction(true);
myGenericFunction<string>("Hello");

/*
function printMyGenerics(){
    console.log(myGenericFunction())
}
*/
