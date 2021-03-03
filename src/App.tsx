import React from 'react';
import './App.css';
import PriceInput from "./components/PriceInput";

function App() {
    let [products, setProducts] = React.useState(
        [
            {
                id: 1,
                title: 'Best product',
                price: 20000,
                rest: 10,
                current: 1
            },
            {
                id: 2,
                title: 'Middle product',
                price: 10000,
                rest: 5,
                current: 1
            },
            {
                id: 3,
                title: 'Worst product',
                price: 5000,
                rest: 50,
                current: 1
            },
        ]
    );

    function changeCnt(id: any, cnt: any) {
        // console.log('changeCnt');
        // console.log({'id': id, 'cnt': cnt});

        let newProducts = [...products];
        // let newProduct = {...newProducts[i]};
        let newProduct = {...newProducts.find(item => item.id === id)};
        newProduct.current = cnt;

        // newProducts[i] = newProduct;
        newProducts.forEach(item => {
           if (item.id === id) {
               item.current = cnt;
           }
        });

        setProducts(newProducts);

    }

    function remove(i: any) {
        // console.log(id);
        let newProducts = [...products];
        newProducts.splice(i, 1);
        setProducts(newProducts);
    }

    function getProducts() {
        return (
            products.map((row, i) => {
                return (
                    <tr key={row.id}>
                        <td>{row.title}</td>
                        <td>{row.price}</td>
                        <td>
                            <PriceInput
                                min={1}
                                max={row.rest} c
                                urrent={row.current}
                                onChange={(cnt: any) => changeCnt(row.id, cnt)}
                            />
                        </td>
                        <td>{row.price * row.current}</td>
                        <td
                            style={{cursor:'pointer', textAlign:'center'}}
                            onClick={remove.bind(null, i)}
                        >X</td>
                    </tr>
                )
            })
        )
    }

    return (
        <div className="app">

            <h2>Products</h2>
            <table>
                <tbody>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Total</th>
                    <th>Remove</th>
                </tr>

                {
                    products.length ? getProducts() : <td colSpan={5}>Добавьте товары в корзину!</td>
                }

                </tbody>
            </table>

            <h3>Total price: {

                products.reduce((total, product) => {
                    return total + (product.current * product.price);
                }, 0)

            }</h3>
        </div>
    );
}

export default App;