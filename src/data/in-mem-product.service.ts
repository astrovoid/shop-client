import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemProductService implements InMemoryDbService {
  createDb() {
    let products = [
      {
        id: 1,
        name: 'Сумка',
        img: '/img/bag.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        type: 'сумка',
        size: 'Большая',
        cost: 99.99
      },
      {
        id: 2,
        name: 'Рюкзак',
        img: '/img/bag.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        type: 'сумка',
        size: 'Большая',
        cost: 99.99
      },
      {
        id: 3,
        name: 'Портфель',
        img: '/img/bag.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        type: 'сумка',
        size: 'Большая',
        cost: 99.99
      },
      {
        id: 4,
        name: 'Саквояж',
        img: '/img/bag.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        type: 'сумка',
        size: 'Большая',
        cost: 99.99
      },
      {
        id: 5,
        name: 'Ранец',
        img: '/img/bag.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        type: 'сумка',
        size: 'Большая',
        cost: 99.99
      }
    ]
    return { products };
  }
}