import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GameGrid from '../../../../assets/GameGrid.png';
import { useState } from "react";
import SetGame from '../../../../assets/SetGame.png';
import DoGame from '../../../../assets/DoGame.png';

const MyGame = () => {

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
                </div>
            </div>
        )
    }

    const MakeGameElement = () => {
        return (
            <div className="GameGrid">
                <div className="MyGameGridFlexBox">
                    <div className="MyGameBox">
                        <button className="GameGridButton" onClick={() => setComponent(1)}>START(100MT)</button>
                    </div>
                </div>
            </div>
        )
    }

    const MyGameMode = () => {
        if (component == 0) {
            return (
                <div>
                    <Container>
                        <Row>
                            <Col>
                                {GameElement(5, 10000, 50, 20, 'DO IT IF YOU CAN', 100)}
                            </Col>
                            <Col>
                                {MakeGameElement()}
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
        } else if (component == 1) {
            return (
                <div>
                    <img src={SetGame} style={{marginTop:"30px"}}/>
                </div>
            )
        }
    }

    return (
        <>
            {MyGameMode()}
        </>
    )
}

export default MyGame;