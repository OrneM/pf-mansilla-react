import { useState, useEffect, createContext, useContext } from "react"
import PropTypes from 'prop-types';

const CartContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const { Provider } = CartContext

// eslint-disable-next-line react-refresh/only-export-components
export const useCartContext = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({ children }) => {
    const [qtyItems, setQtyItems] = useState(0)
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem('cart'))
        const localTotal = JSON.parse(localStorage.getItem('total'))
        const localQty = JSON.parse(localStorage.getItem('qty'))

        if (localCart && localTotal && localQty) {
            setCart(localCart)
            setTotal(localTotal)
            setQtyItems(localQty)
        }
    }, [])

    const isInCart = (id) => {
        return cart.find((elem) => elem.id === id)
    }

    const addToCart = (item, qty) => {
        const localTotal = total + item.price * qty;
        const localQty = qtyItems + qty;
        let localCart = []

        if (isInCart(item.id)) {
            localCart = cart.map((elem) => {
                if (elem.id === item.id) {
                    return { ...elem, qty: elem.qty + qty }
                } else {
                    return elem
                }
            })
        } else {
            localCart = [...cart, { ...item, qty }]
        }

        setTotal(localTotal)
        setQtyItems(localQty)
        setCart(localCart)

        localStorage.setItem('cart', JSON.stringify(localCart))
        localStorage.setItem('total', JSON.stringify(localTotal))
        localStorage.setItem('qty', JSON.stringify(localQty))
    }

    const removeItem = (id, price, qty) => {
        const localTotal = total - price * qty;
        const localQty = qtyItems - qty;
        const localCart = cart.filter((elem) => elem.id !== id);

        setTotal(localTotal);
        setQtyItems(localQty);
        setCart(localCart);

        localStorage.setItem('total', JSON.stringify(localTotal))
        localStorage.setItem('qty', JSON.stringify(localQty))
        localStorage.setItem('cart', JSON.stringify(localCart))
    }

    const removeOneUnit = (id, price) => {
        const item = cart.find((elem) => elem.id === id);
        if (!item) return;

        if (item.qty > 1) {
            const localCart = cart.map((elem) => {
                if (elem.id === id) {
                    return { ...elem, qty: elem.qty - 1 };
                }
                return elem;
            });
            const localTotal = total - price;
            const localQty = qtyItems - 1;

            setTotal(localTotal);
            setQtyItems(localQty);
            setCart(localCart);

            localStorage.setItem('cart', JSON.stringify(localCart));
            localStorage.setItem('total', JSON.stringify(localTotal));
            localStorage.setItem('qty', JSON.stringify(localQty));
        } else {
            removeItem(id, price, 1);
        }
    }

    const clearCart = () => {
        setCart([])
        setTotal(0)
        setQtyItems(0)
        localStorage.removeItem('cart')
        localStorage.removeItem('total')
        localStorage.removeItem('qty')
    }

    const contextValue = {
        qtyItems: qtyItems,
        total,
        cart,
        addToCart,
        clearCart,
        removeItem,
        removeOneUnit,
    }

    return <Provider value={contextValue}>{children}</Provider>
}

CartContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CartContextProvider;