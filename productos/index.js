// La funcion de queryselector sirve para seleccionar el primer elemento y resaltarlo. En esta constante se toma el div especificado, para luego poder asignar el comportamiento del carrito a este. Especificar te permite poder interactuar con el carro sin que este se cierre al reaccionar para el evento click de diversas acciones
const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');

// La funcion addEventListener sirve para hacer que el codigo reaccione ante un evento especificado, en este caso, al recibir click en el area especificada por la variable se activara la funcion de añadir un elemento al div en el que cargamos los productos 
btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});

const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');
const productsList = document.querySelector('.container-items');

// let permite declarar variables y limitarlas a una expresion, en este caso se utilizan los [] para seleccionar todos los productos especificados dentro de la variable
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

// este EventListener sirve para que la pagina pueda distinguir entre las clases, detalles de objetos y datos no visibles de esta. En este caso distingue la clase de los diferentes botones para poder añadir el objeto especifico  
productsList.addEventListener('click', e => {
	if (e.target.classList.contains('btn-add-cart')) {
		//La condicional parentElement permite que utilicemos el QuerySelector llamar a la estructura entera que contiene al objeto especificado en el objeto que especificas al seleccionar con un click. Eso identifica el valor pertinente especifico que llamas al seleccionar alguno de los productos 
		const product = e.target.parentElement;
	
		//esta constante nos permite agregar la informacion especifica al carrito
		const infoProduct = {
			quantity: 1,
			title: product.querySelector('h2').textContent,
			price: product.querySelector('p').textContent,
		};

		const exits = allProducts.some(
			product => product.title === infoProduct.title
		);

		if (exits) {
			const products = allProducts.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
			allProducts = [...products];
		} else {
			allProducts = [...allProducts, infoProduct];
		}

		showHTML();
	}
});

rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);

		console.log(allProducts);

		showHTML();
	}
});

// Funcion para mostrar  HTML
const showHTML = () => {
	if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

//Esto sirve para que el carro no presente un precio inicial
	rowProduct.innerHTML = '';
	let total = 0;
	let totalOfProducts = 0;

	allProducts.forEach(product => {
		const containerProduct = document.createElement('div');
		containerProduct.classList.add('cart-product');
		
	//Contenedor de referencia para el carro, cambiando los valores por unos generales que puedan aplicarse directamente a la hora de añadirse al carro
		containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

		rowProduct.append(containerProduct);
		total = total + parseInt(product.quantity * product.price);
		envio = (total * 0.05);
		totalOfProducts = totalOfProducts + product.quantity;
	});

	//Esto especifica el modo en el que se mostrarian los datos, incluyendo los calculos hechos previamente
	valorTotal.innerText = `${total} GS`;
	countProducts.innerText = totalOfProducts;
};
function confirmar(){
	var hola = true;
	//este es un sistema de alertas sencillo que ayuda a acabar el proceso de compra, con confirmaciones y simples encuestas
	if(confirm('¿Confirmar compra?')){
		alert('Compra confirmada!');
		var direccion = prompt("¿A que direccion enviar?", "");
		//Verificamos si el usuario ingreso un valor antes de terminar el proceso con una sencilla confirmacion que incluye las variables aclaradas abajo
		if (direccion != ""){
		alert("El producto sera enviado a " + direccion + " en la brevedad posible, el costo del envio es: " + envio + ' GS');
		alert("Gracias por su confianza")
		clear();
		}
		else {
		alert("No has ingresado ninguna direccion");
		confirmar();
	}
	}
	else{
		alert('Gracias por visitar la página');	
	}
		
}

//esta funcion sirve para limpiar el carrito luego de terminar las compras
function clear(){
	allProducts = [];
	showHTML()
}