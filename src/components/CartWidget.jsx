import cart from "../assets/carri.jpg"

export const CartWidget = () => {
    return (
    <div id="cart-widget">
    <img src={cart} alt= "cart" width={40}/>
    <span>15</span>
    </div>
    );
};