import './App.css'
import { useState } from 'react'

const App = () => {
	const [propducts, setPropducts] = useState([
		{
			id: 101,
			name: 'Psychology',
			price: 27000,
			pic: 'https://img4.labirint.ru/rc/a5e85dbde7b3b08e5e7e6fa9aacb350c/363x561q80/books92/916656/cover.jpg?1670607051',
		},
		{
			id: 102,
			name: 'Philosophy',
			price: 29000,
			pic: 'https://img4.labirint.ru/rc/157394150cbfcb6c88c9194a3d86a2ef/363x561q80/books92/916654/cover.jpg?1670607049',
		},
		{
			id: 103,
			name: 'Economics',
			price: 12000,
			pic: 'https://m.media-amazon.com/images/I/81c6E2VdT3L._AC_UF1000,1000_QL80_.jpg',
		},
		{
			id: 104,
			name: 'Biology',
			price: 42000,
			pic: 'https://cdn.gramedia.com/uploads/items/THE_BIOLOGY_BOOK.jpg',
		},
		{
			id: 105,
			name: 'Art',
			price: 23000,
			pic: 'https://img4.labirint.ru/rc/f913c5fe6cf348386ed4407a3b34bd63/363x561q80/books92/916826/cover.jpg?1670607191',
		},
		{
			id: 106,
			name: 'Sociology',
			price: 29000,
			pic: 'https://m.media-amazon.com/images/I/81z-Pj9NxjL._AC_UF1000,1000_QL80_.jpg',
		},
		{
			id: 107,
			name: 'Literature',
			price: 65000,
			pic: 'https://avatars.mds.yandex.net/get-mpic/5146791/img_id8719441511329908920.jpeg/300x400',
		},
		{
			id: 108,
			name: 'Business',
			price: 29000,
			pic: 'https://booklavka.ru/sites/default/files/files/itempics/9781409341260.jpg',
		},
	])

	const [basket, setBasket] = useState([])

  // movToCart
	const moveToCart = (product) => {
		const result = basket.find((x) => x.id === product.id)
		if (result) {
			result.count++
			setBasket([...basket])
		} else {
			setBasket([...basket, { ...product, count: 1 }])
		}
		console.log(basket)
	}

  // countPlus
	const countPlus = (id) => {
		id.count++
		setBasket([...basket])
	}

  //countMinus
	const countMinus = (item) => {
		if (item.count === 1) {
			item.count = 1
		} else {
			item.count--
		}
		setBasket([...basket])
	}

  //deleteItem
	const deleteItem = (id) => {
		setBasket(basket.filter((item) => item.id !== id))
	}

	return (
		<>
			<h1>Online Shop</h1>
			<div className="content">
				<div>
          {/* Propducts */}
					<h3>Propducts</h3>
					<div className="list">
						{propducts.map((propduct) => (
							<div className="product" key={propduct.id}>
								<img src={propduct.pic} />
								<div className="prod_info">
									<p>{propduct.name}</p>
									<strong>{propduct.price} AMD</strong>
									<button onClick={() => moveToCart(propduct)}>
										Move
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
				<div>
          {/* CART */}
					<h3>Cart</h3>
					<div className="tabelcont">
						<table>
							<thead>
								<tr>
									<th>id</th>
									<th>price</th>
									<th>count</th>
									<th>subtotal</th>
									<th>actions</th>
								</tr>
							</thead>
							<tbody>
								{basket.map((item) => (
									<tr key={item.id}>
										<td>{item.name}</td>
										<td>{item.price}</td>
										<td>{item.count}</td>
										<td>{item.count * item.price}</td>
										<td className="actions">
											<button onClick={() => countMinus(item)}>
												-
											</button>
											<button onClick={() => countPlus(item)}>
												+
											</button>
											<button onClick={() => deleteItem(item.id)}>
												X
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
