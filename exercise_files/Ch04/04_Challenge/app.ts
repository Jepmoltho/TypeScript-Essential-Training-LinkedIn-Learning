/*
type Contact = {
  name: Function;
  age: Function;
};

type contactProperty = Record<keyof Contact, Function>;

function matchesFun(arg: string): boolean {
  return true;
}
*/
//prettier-ignore
function query<T>(items: T[], query: Record<keyof T, (val: T[keyof T]) => boolean>) : T[] /* <--- replace this!)*/  {  
    //returns an array of all items matching the query
    return items.filter(item => {
        // iterate through each of the item's properties
        for (const property of Object.keys(item)) {

            // get the query for this property name
            const propertyQuery = query[property]

            // see if this property value matches the query
            if (propertyQuery && propertyQuery(item[property])) {
                return true
            }
        }

        // nothing matched so return false
        return false
    })
}

const matches = query(
  [
    //Each of theese properties on this query object, should be a function that accepts the value of that property and returns true, if the value matches the function
    { name: "Ted", age: 12 },
    { name: "Angie", age: 31 },
  ],
  //The right type is this object: An object that allows for properties, that match the properties of the objects, in the array above it
  {
    //Sucess: When name returns string onHover
    name: (name) => name === "Angie",
    age: (age) => age > 30,
  }
);
