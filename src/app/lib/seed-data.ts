interface SeedProduct {
  title: string;
  image: string;
  price: number;
}

interface SeedData {
  products: SeedProduct[];
}

export const initialData: SeedData = {
  products: [
    {
      image: "1623735-00-A_0_2000.jpg",
      price: 7500,
      title: "Gorro para hombre",
    },
    {
      image: "1549275-00-A_1.jpg",
      price: 20000,
      title: "Camisa para hombre",
    },

    {
      image: "1549275-00-A_0_2000.jpg",
      price: 13000,
      title: "Camisa para hombre con estampado",
    },

    {
      image: "1549268-00-A_2.jpg",
      price: 4500,
      title: "Camiseta Cybertruck Owl para hombre",
    },
    {
      image: "1549268-00-A_0_2000.jpg",
      price: 4000,
      title: "Camiseta de manga corta Turbine para hombre",
    },
    {
      image: "1506211-00-A_0_2000.jpg",
      price: 3500,
      title: "Chaqueta para hombre",
    },
    {
      image: "1473834-00-A_2_2000.jpg",
      price: 3500,
      title: "Body para bebé",
    },
    {
      image: "1473819-00-A_1_2000.jpg",
      price: 3500,
      title: "Bebé body estampado letras",
    },
    {
      image: "1473814-00-A_alt.jpg",
      price: 3500,
      title: "Body con algo grande en 3D",
    },
    {
      image: "1473814-00-A_1_2000.jpg",
      price: 3500,
      title: "Body logo amor por la tierra",
    },
    {
      image: "1473809-00-A_alt.jpg",
      price: 3500,
      title: "Body bebé amor por la tierra",
    },
    {
      image: "1473809-00-A_1_2000.jpg",
      price: 3500,
      title: "Body bebé hecho con amor",
    },
  ],
};
