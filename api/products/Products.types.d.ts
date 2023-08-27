interface IRating {
  rate: number;
  count: number;
}

interface IProduct {
  id: number;
  title: string;
  price: number | string;
  category: string;
  description: string;
  image: string;
  rating: IRating;
}
