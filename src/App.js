import  {  useState } from "react";
import Header from "./componets/Layout/Header";
import Meals from "./componets/Meals/Meals";

import Cart from "./componets/Cart/Cart";
import CartProvider from "./store/CartProvider";


function App(){
const [cartIsShown, setcartIsShown] = useState(false);

const showCartHandler =() =>{
  setcartIsShown(true);
};

const hidecartHandler =() =>{
  setcartIsShown(false);
};




  return(
    <CartProvider>
      {cartIsShown && <Cart onClose={hidecartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );

}
export default App;