import DefaultPage from "components/DefaultPage";
import Categoria from "pages/Categoria";
import Carrinho from "pages/Carrinho";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultPage />}>
                    <Route index element={ <Home />}/>
                    <Route path='/categoria/:nomeCategoria' element={ <Categoria />}/>
                    <Route path='/carrinho' element={ <Carrinho />}/>
                </Route>
            </Routes>
        </BrowserRouter>

    )
} 