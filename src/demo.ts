interface Contact {
  id: number;
  name: ContactName;
  birthDate?: Date;
  cuntrycode: number;
}

enum Countrycodes {
  DK = 45,
  UK = 0o0,
  US = 0o1,
}

let primaryContact: Contact = {
  birthDate: new Date("01-01-1980"),
  id: 12345,
  name: "Jamie Johnson",
  cuntrycode: Countrycodes.DK,
};

type ContactName = string;
