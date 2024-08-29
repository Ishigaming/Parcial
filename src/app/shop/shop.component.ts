import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})

export class ShopComponent  implements OnInit {
  isToastOpen = false;
  @Output() doClick = new EventEmitter();
id: any;

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
  goToDetail(arg0: any) {
throw new Error('Method not implemented.');
}
prod: any [] = [];
categories: any [] = []; 
selectedCategory: string = 'All';
  constructor(private Service: ApiService, private router: Router) { }

  click(id: any){
    this.doClick.emit(id);
  }

  ngOnInit(): void {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        this.prod = json;
        console.log('Productos:', this.prod);
      })
      
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => {
        this.categories = ['All', ...json]; 
        console.log('Categorias:', this.categories);
      })

      
  }

  get filteredProducts() {
    if (this.selectedCategory === 'All') {
      return this.prod;
    }
    return this.prod.filter(item => item.category === this.selectedCategory);
  }

  onCategoryChange(event: any) {
    this.selectedCategory = event.detail.value;
    console.log('Categoria seleccionada:', this.selectedCategory);
  }
  viewProductDetails(productId: number) {
    this.router.navigate(['/product-details', productId]);
  }
  navigateToCart() {
    this.router.navigate(['/cart']); // Navegar a la pantalla del carrito
  }
}
