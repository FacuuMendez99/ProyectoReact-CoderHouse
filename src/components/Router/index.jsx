import { ItemListContainer } from "../../containers/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer";
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
                <Route path="/categorias/:id" element={<ItemListContainer/>} />
                <Route path="/item/:id" element={<ItemDetailContainer/>} />
            </Routes>
        </BrowserRouter>
    )
}

