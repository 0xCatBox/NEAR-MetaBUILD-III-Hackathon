import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GameGrid from '../../../../assets/GameGrid.png';
import { useState } from "react";

const GameList = () => {

    const [component, setComponent] = useState(0);

    const GameElement = (score, total, normal, poison, message, fee) => {
        return (
            <div className="GameGrid">
                <div className="GameGridImage"></div>
                <div className="GameGridFlexBox">
                    <div className="GameGridFlex">
                        <li>SIZE</li>
                        <span>9 X 9</span>
                    </div>
                    <div className="GameGridFlex">
                        <li>HIGH SCORE</li>
                        <span>{score} COUNTS</span>
                    </div>
                    <div className="GameGridFlex">
                        <li>TOTAL BLOCK</li>
                        <span style={{ color: "#FCD017" }}>{total} MT</span>
                    </div>
                    <div className="GameGridFlex">
                        <li>MUSHROOM</li>
                        <span>NORMAL : {normal}</span>
                    </div>
                    <div className="GameGridFlex">
                        <span></span>
                        <span>POISON: {poison}</span>
                    </div>
                    <div className="GameGridFlex">
                        <li>MESSAGE</li>
                        <span>{message}</span>
                    </div>
                    <div>
                        <button className="GameGridButton" onClick={() => setComponent(1)}>START({fee}MT)</button>

                    </div>
                </div>
            </div>
        )
    }

    const GameListMode = () => {
        if (component == 0) {
            return (
                <div>
                    <Container>
                        <Row>
                            <Col>
                                {GameElement(5, 10000, 50, 20, 'DO IT IF YOU CAN', 100)}
                            </Col>
                            <Col>
                                {GameElement(10, 500, 40, 20, 'DO YOUR BEST', 50)}
                            </Col>
                            <Col>
                                {GameElement(15, 50, 30, 10, 'CATCH ME', 30)}
                            </Col>
                            <Col>
                                {GameElement(15, 50, 30, 10, 'CATCH ME', 30)}
                            </Col>
                            <Col>
                                {GameElement(5, 10000, 50, 20, 'DO IT IF YOU CAN', 100)}
                            </Col>
                            <Col>
                                {GameElement(5, 10000, 50, 20, 'DO IT IF YOU CAN', 100)}
                            </Col>
                            <Col>
                                {GameElement(5, 10000, 50, 20, 'DO IT IF YOU CAN', 100)}
                            </Col>
                            <Col>
                                {GameElement(5, 10000, 50, 20, 'DO IT IF YOU CAN', 100)}
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
        } else if (component == 1) {
            return (
                <div>
                    <Container>
                        <Row>
                            <Col>
                                {GameElement(5, 10000, 50, 20, 'DO IT IF YOU CAN', 100)}
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
        }
    }

    return (
        <>
            {GameListMode()}

        </>
    )
}

export default GameList;