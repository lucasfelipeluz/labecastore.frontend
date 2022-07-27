import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './admin-login/usuario';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private usuarioAutenticado: boolean = false;

  public Products: Array<Object> = [
    {
      id: 76,
      title: 'Corinthians II',
      description: 'Camisa',
      year: '19/20',
      price: 125.45,
      inventoryPP: 0,
      inventoryP: 0,
      inventoryM: 0,
      inventoryG: 0,
      inventoryGG: 0,
      inventoryEG: 0,
      inventoryEGG: 0,
      category: [
        {
          CategoryId: 104,
          NomeCategoria: 'categoria',
          SlugCategoria: 'categoria',
        },
        {
          CategoryId: 204,
          NomeCategoria: 'jogador',
          SlugCategoria: 'jogador',
        },
      ],
      image: [
        {
          ImageId: 200,
          filename: 'foto.png',
          url: 'https://images.vexels.com/media/users/3/149045/isolated/preview/a6758f9278544d50f30e0c9478ea952a-icone-de-camiseta-masculina-branca.png',
        },
        {
          ImageId: 201,
          filename: 'foto2.png',
          url: 'https://images.vexels.com/media/users/3/149045/isolated/preview/a6758f9278544d50f30e0c9478ea952a-icone-de-camiseta-masculina-branca.png',
        },
      ],
    },
    {
      id: 77,
      title: 'Corinthians I',
      description: 'Camisa',
      year: '19/20',
      price: 95.45,
      inventoryPP: 0,
      inventoryP: 0,
      inventoryM: 1,
      inventoryG: 0,
      inventoryGG: 0,
      inventoryEG: 1,
      inventoryEGG: 0,
      category: [
        {
          CategoryId: 204,
          NomeCategoria: 'jogador',
          SlugCategoria: 'jogador',
        },
        {
          CategoryId: 104,
          NomeCategoria: 'categoria',
          SlugCategoria: 'categoria',
        },
        {
          CategoryId: 205,
          NomeCategoria: 'mangalonga',
          SlugCategoria: 'categoria',
        },
      ],
      image: [
        {
          ImageId: 200,
          filename: 'foto.png',
          url: 'https://images.vexels.com/media/users/3/149045/isolated/preview/a6758f9278544d50f30e0c9478ea952a-icone-de-camiseta-masculina-branca.png',
        },
        {
          ImageId: 202,
          filename: 'foto3.png',
          url: 'https://images.vexels.com/media/users/3/149045/isolated/preview/a6758f9278544d50f30e0c9478ea952a-icone-de-camiseta-masculina-branca.png',
        },
      ],
    },
  ];

  public Categories: Array<Object> = [
    {
      id: 104,
      name: 'categoria',
      slug: 'categoria',
    },
    {
      id: 204,
      name: 'jogador',
      slug: 'jogador',
    },
    {
      id: 205,
      name: 'mangalonga',
      slug: 'manga-longa',
    },
  ];

  public Images: Array<Object> = [
    {
      id: 200,
      filename: 'foto.png',
      url: 'https://images.vexels.com/media/users/3/149045/isolated/preview/a6758f9278544d50f30e0c9478ea952a-icone-de-camiseta-masculina-branca.png',
    },
    {
      id: 201,
      filename: 'foto2.png',
      url: 'https://images.vexels.com/media/users/3/149045/isolated/preview/a6758f9278544d50f30e0c9478ea952a-icone-de-camiseta-masculina-branca.png',
    },
    {
      id: 202,
      filename: 'foto3.png',
      url: 'https://images.vexels.com/media/users/3/149045/isolated/preview/a6758f9278544d50f30e0c9478ea952a-icone-de-camiseta-masculina-branca.png',
    },
  ];

  constructor(private router: Router) {}

  getStatusAuth(): boolean {
    return this.usuarioAutenticado;
  }

  logOut(): void {
    this.usuarioAutenticado = false;
  }

  login(usuario: Usuario) {
    if (!usuario.nickname || !usuario.password) {
      return null;
    } else if (
      usuario.nickname !== 'adminLB' ||
      usuario.password !== 'adminLB'
    ) {
      return false;
    } else {
      this.usuarioAutenticado = true;
      this.router.navigate(['/admin']);
      return;
    }
  }

  getAdmin() {
    return {
      nome: 'Lucas',
    };
  }

  getProducts() {
    return this.Products;
  }

  getProductsById(id: number): any {
    return this.Products.filter((value: any, number, array) => {
      return value.id === id;
    })[0];
  }

  getAllCategories() {
    return this.Categories;
  }

  getAllImages() {
    return this.Images;
  }
}
