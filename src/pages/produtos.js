import { Container } from "react-bootstrap";
import Footer from "./modulos/footer";
import Menu from "./modulos/navbar";
import Accordion from 'react-bootstrap/Accordion';
export default function Produtos() {
    var produtos = [
        {
            id: 1,
            produto: "Tênis de Corrida",
            descricao: "O tênis de corrida é projetado para oferecer conforto e suporte durante longas distâncias. Com uma entressola acolchoada que absorve impactos, ele garante uma corrida suave em diferentes superfícies. A malha respirável proporciona ventilação adequada, mantendo os pés frescos. Ideal para corredores iniciantes e experientes, este tênis é uma escolha essencial para treinos diários e competições."
        },
        {
            id: 2,
            produto: "Bola de Futebol",
            descricao: "A bola de futebol é um item indispensável para praticar o esporte mais popular do mundo. Feita de materiais duráveis, ela é ideal tanto para jogos em campo quanto para treinos. Com um design aerodinâmico, a bola proporciona um controle excepcional e resistência ao desgaste. Seja em um jogo casual entre amigos ou em uma partida competitiva, ela garante diversão e emoção."
        },
        {
            id: 3,
            produto: "Equipamento de Natação",
            descricao: "O equipamento de natação inclui óculos, touca e maiô, essenciais para quem busca desempenho na água. Os óculos são projetados para proporcionar visão clara e conforto, enquanto a touca ajuda a manter os cabelos secos e reduz a resistência. O maiô, por sua vez, oferece liberdade de movimento e é feito de materiais que secam rapidamente. Ideal para treinos e competições, esse conjunto é essencial para nadadores de todos os níveis."
        },
        {
            id: 4,
            produto: "Raquete de Tênis",
            descricao: "A raquete de tênis é um equipamento fundamental para jogadores de todos os níveis. Com um design leve e equilibrado, ela proporciona controle e potência nos golpes. O cabo é projetado para conforto, permitindo um empunhadura firme durante as partidas. Além disso, as cordas são ajustáveis, permitindo personalizar a tensão para melhorar o desempenho. Ideal para treinos e competições, essa raquete é uma escolha estratégica para quem deseja aprimorar suas habilidades no esporte."
        }
    ]

    return <>
        <Menu />
        <Container>
            Bem Vindo à Lista de Produtos
            <Accordion defaultActiveKey="0">
                {produtos.map(item =>
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>
                            {item.produto}
                        </Accordion.Header>
                        <Accordion.Body>
                            {item.descricao}
                        </Accordion.Body>
                    </Accordion.Item>
                )}


            </Accordion>
        </Container>

        <Footer />
    </>
}
