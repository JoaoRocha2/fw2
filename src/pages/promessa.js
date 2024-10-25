import { Container } from "react-bootstrap";
import Menu from "./modulos/navbar";
import Footer from "./modulos/footer";
import {useState} from "react";

export default function Promessa() {
    const [pao, setpao] = useState("")
    setTimeout(() => {
        document.title = "Promessa é Dívida";
        setpao ("é dívida")
    }, 2000);
    
    return <>
        <Menu />
        <Container>
            Promessa {pao === ""? "<img src ='loading.gif' style ='width: 10 px; heigth: 12px;'>" : pao}
        </Container>
        <Footer />
    </>
}