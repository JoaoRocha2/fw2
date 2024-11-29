import { Container, Table } from "react-bootstrap";
import Menu from "./modulos/navbar";
import Footer from "./modulos/footer";

export default function Pesportes() {
    return <>
        <Menu />
        <Container>
            <Container className="border border-sucess rounded-pill text-center col-sm-6">
                Lista de produtos de esportes
            </Container>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Produto</th>
                            <th>Categoria</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </Container>
        <Footer />
    </>
}