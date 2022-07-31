class Productos {
  constructor(){
    this.productos = [
      {
        id: 1,
        nombre: 'Iphone 11',
        descripcion: 'Iphone 11 64gb',
        precio: '$200,000',
        image: 'https://www.macstation.com.ar/img/productos/1684-1.jpg'
      },
      {
        id: 2,
        nombre: 'Iphone x',
        precio: '$100,000',
        descripcion: 'Iphone X 64gb',
        image: 'https://i.ebayimg.com/images/g/TdAAAOSwfiReQjj3/s-l640.jpg'
      },
      {
        id: 3,
        nombre: 'Iphone 13 pro Max',
        descripcion: 'Iphone 13 pro Max 128gb',
        precio: '$480,000',
        image: 'https://itechstore.com.ar/wp-content/uploads/2022/06/iphone-13-pro-max-green-select.png'
      },
      {
        id: 4,
        nombre: 'Iphone 12',
        descripcion: 'Iphone 12 128gb',
        precio: '$300,000',
        image: 'https://itechstore.com.ar/wp-content/uploads/2020/12/iphone-12-blue-select-2020.png'
      },
      {
        id: 5,
        nombre: 'Homepod Mini',
        descripcion: 'Sonido envolvente con guía de onda acústica',
        precio: '$50,000',
        image: 'https://storecba.com/wp-content/uploads/2021/06/home-pod-mini-2.jpg'
      },
      {
        id: 6,
        nombre: 'AirTags',
        descripcion: 'El AirTag (Localizador)',
        precio: '$15,000',
        image: 'https://storecba.com/wp-content/uploads/2021/08/airtag.jpeg'
      }
    ];
  }

  FindProductos(){
    const productos = this.productos;
    return productos;
  }
  
  
}

module.exports = Productos;
