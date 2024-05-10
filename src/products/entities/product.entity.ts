export interface ProductInterface {
  name: string;
  description: string;
  price: number;
}

export class Product {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public price: number,
  ) {}
  updateWith({ name, description, price }: ProductInterface) {
    this.name = name;
    this.description = description;
    this.price = price;
  }
}
