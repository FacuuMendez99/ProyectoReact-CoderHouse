
import ItemDetailContainer from "../../containers/ItemDetailContainer";
import { ItemListContainer } from "../../containers/ItemListContainer";
import { Cart } from "../Cart";
import { Checkout } from "../Checkout";

import NavBar from "../NavBar";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


export default function Router() {


    return (
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>} />
                    <Route path="/categoryId/:id" element={<ItemListContainer/>} />
                    <Route path="/item/:id" element={<ItemDetailContainer/>} />
                    <Route path="/carrito" element={<Cart/>} />
                    <Route path="/checkout" element={<Checkout/>}/>
                </Routes>
            </BrowserRouter>
    )
}

