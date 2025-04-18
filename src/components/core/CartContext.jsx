import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext();

export function CartProvider({children}) {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    
    const addToCart = (product, quantity) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                toast.success(`Updated ${product.title} quantity to ${existingItem.quantity + quantity}`);
                return prevCart.map(item => item.id === product.id ? {...item, quantity: item.quantity + quantity} : item);
            }
            toast.success(`Added ${quantity} ${product.title} to cart`);
            return [...prevCart, {...product, quantity}];
        });
    };
    
    const removeFromCart = (productId) => {
        setCart(prevCart => {
            const removedItem = prevCart.find(item => item.id === productId);
            toast.error(`Removed ${removedItem.title} from cart`);
            return prevCart.filter(item => item.id !== productId);
        });
    };
    
    const updateQuantity = (productId, quantity) => {
        setCart(prevCart => {
            const updatedItem = prevCart.find(item => item.id === productId);
            toast.info(`Updated ${updatedItem.title} quantity to ${quantity}`);
            return prevCart.map(item => item.id === productId ? {...item, quantity}: item);
        });
    };
    
    const clearCart = () => {
        setCart([]);
        toast.warning('Cart cleared');
    };

    const cartCheckout = () => {
        setCart([]);
        toast.success('Checkout successful');
    }
    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
    
    return (
        <CartContext.Provider value = {{cart, addToCart, removeFromCart, updateQuantity, clearCart, cartCheckout}}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
