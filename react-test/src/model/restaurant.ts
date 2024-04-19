// let data = {
//     name: 'test restaurant',
//     category: 'western',
//     address: {
//       city: 'Seoul',
//       detail: 'somewhere',
//       zipCode: '45454654'
//     },
//     menu: [{name:"rose pasta",price:18000,category:"PASTA"}, {name:"galic-steak",price:29000,category:"STEAK"}, {name:"taco salad",price:13000,category:"SALAD"}]
//   }

export type Restaurant = {
    name:string;
    category:string;
    address: Address;
    menu:Menu[]
}

export type RestaurantOnlyCategory = Pick<Restaurant, 'name'>

export type Address = {
    city:string;
    detail:string;
    zipCode:string;
}

export type AddressWithoutZipCode = Omit<Address, 'zipCode'>

export type Menu = {
    name:string;
    price:number;
    category:string;
}

export type ApiResponse<T>{
    data:T[],
    totalPage:number,
    page:number
}

export type RestaurantApiResponse = ApiResponse<Restaurant>
export type MenuApiResponse = ApiResponse<Menu>