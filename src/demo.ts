interface Contact {
  name: string;
  phonenumber: number;
  address?: string;
}

let primaryContact: Contact = {
  name: "Mr. Bunnykins the third",
  phonenumber: 12345678,
  address: "Hop road, 7, 2445, the borroughs",
};

let secondaryContact: Details = {
  name: "Ms Bae",
  phonenumber: 2,
  city: "Sydney",
  country: "Australia",
};

interface Details extends Contact {
  city: string;
  country: string;
}
