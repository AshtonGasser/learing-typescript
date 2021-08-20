import faker from 'faker'

export class Company {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number; // | string;
        lng: number; // | string;
      };


constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
        lat: parseFloat(faker.address.latitude()),
        lng: parseFloat(faker.address.longitude()),
      };

}
}