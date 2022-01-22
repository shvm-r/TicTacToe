import React,{useState} from 'react'
import './TicTacToe.css'


const TicTacToe = () => {

    const [turn,setTurn] = useState('O');
    const [cells,setCells] = useState(Array(10).fill(''));
    const [winner,setWinner] = useState();
    var square = [...cells]


    const checkforWinner = (square) => {
        let combos = {
            across : [
                [1,2,3],
                [4,5,6],
                [7,8,9]
            ],
            down : [
                [1,4,7],
                [2,5,8],
                [3,6,9]
            ],
            diagnol : [
                [1,5,9],
                [7,5,3]
            ]

        }

        for (let combo in combos) {
			combos[combo].forEach((pattern) => {
				if (
					square[pattern[0]] === '' ||
					square[pattern[1]] === '' ||
					square[pattern[2]] === ''
				) {
					// do nothing
				} else if (
					square[pattern[0]] === square[pattern[1]] &&
					square[pattern[1]] === square[pattern[2]]
				) {
					setWinner(square[pattern[0]]);
				}
			});
		}
    }

    const Refresh = () => 
    {
        setWinner(null);
        setCells(Array(10).fill(''));
    }

    const Cell = ({num}) => {
        return <td onClick={()=>handleClick(num)} style={{textAlign:"center"}}><span>{cells[num]}</span></td>
    }

    const handleClick = (num) => {

        if(winner)
        {
            Refresh();
            return
        }

        if(cells[num]!=='')
        {
            alert('aleardy clicked');
            return
        }

        if(turn==='X')
        {
            setTurn('O');
            square[num]='O';
        }
        else
        {
            setTurn('X');
            square[num]='X';
        }
        console.log(square)
        setCells(square)
        checkforWinner(square)
    }



    return (
        <div>
        <div>
           
            <h1 className='header'>Tic Tac Toe</h1>
        
        </div>
        <div className='Prim'>
            
            <table>
                <tbody>
                    <tr>
                        <Cell num={1}/>
                        <Cell num={2}/>
                        <Cell num={3}/>
                    </tr>
                    <tr>
                        <Cell num={4}/>
                        <Cell num={5}/>
                        <Cell num={6}/>
                    </tr>
                    <tr>
                        <Cell num={7}/>
                        <Cell num={8}/>
                        <Cell num={9}/>
                    </tr>
                </tbody>
            </table>
            
        </div>
            <button onClick={()=>Refresh()}>Reset</button>
            <div className='Prim'>
                {
                    winner&&(
                        <div>
                            <p>Winner is {winner}!!</p>
                        </div>
                    )
                }
            </div>
        </div>
        
    )
}


export default TicTacToe
