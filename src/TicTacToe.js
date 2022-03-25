import { useState } from 'react'
import './TicTacToe.css'

const TicTacToe = () => {
    const [player, setPlayer] = useState('X')
    const [cells, setCells] = useState(['','','','','','','','',''])
    const [winner, setWinner] = useState();

    const checkIsWinner = (squares) => {
        let combos = {
            across : [
                [0,1,2],
                [3,4,5],
                [6,7,8],
            ],
            down : [
                [0,3,6],
                [1,4,7],
                [2,5,8],
            ],
            diagonol: [
                [0,4,8],
                [2,4,6],
            ],  
        };

        for (let combo in combos) {
            combos[combo].forEach((pattern) => {
                if ( 
                    squares[pattern[0]] === '' ||
                    squares[pattern[1]] === '' ||
                    squares[pattern[2]] === '' 
                ) {
                    // 
                } else if (
                    squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]]
                ) {
                    setWinner(squares[pattern[0]]);
                }
            })
        }
    }

    const handleClick = (num) => {
        if (cells[num] !== '') {
            alert('Wybierz inne pole! ');
        } 
        let squares = [...cells];
        if (player === 'X') {
            squares[num] = 'X';
            setPlayer('O')
        } else {
            squares[num] = 'O'
            setPlayer('X')
        }
        checkIsWinner(squares)
        setCells(squares)
    }

    const handleRestart = () => {
        setWinner(null);
        setCells(['','','','','','','','',''])


    }
    const Cell = ({num}) => {
        return (
            <td onClick={() => handleClick(num)}>{cells[num]}</td>
        )
    };

    return (
        <div className="container"> 
        Gracz: {player}
            <table>
            
                <tbody>
                    <tr>
                        <Cell num={0}/>
                        <Cell num={1}/>
                        <Cell num={2}/>
                    </tr>
                    <tr>
                        <Cell num={3}/>
                        <Cell num={4}/>
                        <Cell num={5}/>
                    </tr>
                    <tr>
                        <Cell num={6}/>
                        <Cell num={7}/>
                        <Cell num={8}/>
                    </tr>
                </tbody>
            </table>

            {winner && (
                <>
                <p>Gracz {winner} wygrał! </p>
               
                </>
            )}
             <button onClick={() => handleRestart()}>Zagraj ponownie</button>
        </div>
    )
}

export default TicTacToe;