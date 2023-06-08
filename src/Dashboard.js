import React, { useState, useEffect } from 'react'
// import Data from './Data';
import Quest from './component/Quest';
import Timer from './Timer';

const Dashboard = () =>{
    const [questionNumber, setQuestionNumber] = useState(1)
    const [earned, setEarned] = useState(`$ 0`)
    const [stop, setStop] = useState(true)
    const data = [
        {
            id: 1,
            question: 'What is the name of the new Nigerian president ?',
            answers: [
                {
                    text: 'Muhammadu Buhari',
                    correct: false
                },
                {
                    text: 'Atiku Abubakar',
                    correct: false
                },
                {
                    text: 'Bola Ahmed Tinubu',
                    correct: true
                },
                {
                    text: 'Peter Obi',
                    correct: false
                },

            ]
        },
        {
            id: 2,
            question: 'What is the name of the United State of America new preident?',
            answers: [
                {
                    text: 'Hillary Clinton',
                    correct: false
                },
                {
                    text: 'Barrack Obama',
                    correct: false
                },
                {
                    text: 'Joe Biden',
                    correct: true
                },
                {
                    text: 'Donald Trump',
                    correct: false
                },

            ]
        },
        {
            id: 3,
            question: 'MERN is from which language?',
            answers: [
                {
                    text: 'JavaScript',
                    correct: true
                },
                {
                    text: 'Python',
                    correct: false
                },
                {
                    text: 'Laravel',
                    correct: false
                },
                {
                    text: 'Rails on Ruby',
                    correct: false
                },

            ]
        },
        {
            id: 4,
            question: 'JSON means what?',
            answers: [
                {
                    text: 'Java Sum Of Number',
                    correct: false
                },
                {
                    text: 'JavaScript Object Notation',
                    correct: true
                },
                {
                    text: 'Java Object Notation',
                    correct: false
                },
                {
                    text: 'JavaScript Oriented Note',
                    correct: false
                },

            ]
        },
        {
            id: 5,
            question: 'REACT is from which language?',
            answers: [
                {
                    text: 'Ruby',
                    correct: false
                },
                {
                    text: 'Python',
                    correct: false
                },
                {
                    text: 'Java',
                    correct: false
                },
                {
                    text: 'JavaScript',
                    correct: true
                },

            ]
        },
        {
            id: 6,
            question: 'OOP stands for what?',
            answers: [
                {
                    text: 'Object Organised Project',
                    correct: false
                },
                {
                    text: 'Object Oriented Programming',
                    correct: true
                },
                {
                    text: 'Object Organic Program',
                    correct: false
                },
                {
                    text: 'Oriented Object Programs',
                    correct: false
                },

            ]
        },
        {
            id: 7,
            question: 'OOP consists of Abstraction, Inheritance, PolyMorphism and ?',
            answers: [
                {
                    text: 'Division',
                    correct: false
                },
                {
                    text: 'Encapsulation',
                    correct: true
                },
                {
                    text: 'Saturation',
                    correct: false
                },
                {
                    text: 'Damping',
                    correct: false
                },

            ]
        },
        {
            id: 8,
            question: 'Which of these is not a language?',
            answers: [
                {
                    text: 'Python',
                    correct: false
                },
                {
                    text: 'Java',
                    correct: false
                },
                {
                    text: 'JavaScript',
                    correct: false
                },
                {
                    text: 'Javava',
                    correct: true
                },

            ]
        },
        {
            id: 9,
            question: 'The higher Order functions are these except...?',
            answers: [
                {
                    text: 'substring()',
                    correct: true
                },
                {
                    text: 'Map()',
                    correct: false
                },
                {
                    text: 'find()',
                    correct: false
                },
                {
                    text: 'filter()',
                    correct: false
                },

            ]
        },
        {
            id: 10,
            question: 'What get the number of the data in an array?',
            answers: [
                {
                    text: 'array.number',
                    correct: false
                },
                {
                    text: 'array.length',
                    correct: true
                },
                {
                    text: 'array.pop',
                    correct: false
                },
                {
                    text: 'array.slice',
                    correct: false
                },

            ]
        },
        {
            id: 11,
            question: ` 1 + '1'`,
            answers: [
                {
                    text: '2',
                    correct: false
                },
                {
                    text: `1'1'`,
                    correct: false
                },
                {
                    text: '11',
                    correct: false
                },
                {
                    text: `'11'`,
                    correct: true
                },

            ]
        },
        {
            id: 12,
            question: 'To become a fullStack MERN, you need Node ?',
            answers: [
                {
                    text: 'No',
                    correct: false
                },
                {
                    text: 'Seems, but not sure',
                    correct: false
                },
                {
                    text: 'Yes, 100%',
                    correct: true
                },
                {
                    text: 'I dont know',
                    correct: false
                },

            ]
        },
        {
            id: 13,
            question: 'React Hooks are these, except?',
            answers: [
                {
                    text: 'UseDispatch()',
                    correct: true
                },
                {
                    text: 'UseState()',
                    correct: false
                },
                {
                    text: 'UseEffect()',
                    correct: false
                },
                {
                    text: 'UseContext()',
                    correct: false
                },

            ]
        },
        {
            id: 14,
            question: 'Which of these manages the state in react?',
            answers: [
                {
                    text: 'useState',
                    correct: false
                },
                {
                    text: 'useRef',
                    correct: false
                },
                {
                    text: 'Redux',
                    correct: true
                },
                {
                    text: 'Express',
                    correct: false
                },

            ]
        },
        {
            id: 15,
            question: 'Who created meta?',
            answers: [
                {
                    text: 'Mark Zuckerberg',
                    correct: true
                },
                {
                    text: 'Jack Ma',
                    correct: false
                },
                {
                    text: 'Tesla',
                    correct: false
                },
                {
                    text: 'Jeff Bezoz',
                    correct: false
                },

            ]
        }


    ]

    const moneyPyramid = [
        { id: 1, amount: `$ 100` },
        { id: 2, amount: `$ 200` },
        { id: 3, amount: `$ 300` },
        { id: 4, amount: `$ 500` },
        { id: 5, amount: `$ 1000` },
        { id: 6, amount: `$ 2000` },
        { id: 7, amount: `$ 4000` },
        { id: 8, amount: `$ 8000` },
        { id: 9, amount: `$ 16000` },
        { id: 10, amount: `$ 32000` },
        { id: 11, amount: `$ 64000` },
        { id: 12, amount: `$ 125000` },
        { id: 13, amount: `$ 250000` },
        { id: 14, amount: `$ 500000` },
        { id: 15, amount: `$ 1000000` }
    ].reverse();


    useEffect(()=>{
        questionNumber > 1 && setEarned(moneyPyramid.find((n)=>n.id=== questionNumber -1).amount) 
    }, [moneyPyramid,questionNumber])

  

    return (
        <div className='mycontainer'>
            <div className='main'>
            {stop ? <>
                <div className='top'>
                    {/* <div className='timer'><Timer setStop={setStop} questionNumber = {questionNumber}/></div> */}
                </div>
                <div className='bottom'>
                <Quest
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setStop = {setStop}
                />
                </div>
                </>:< h1 className='endquiz'> You earned : {earned} </h1>}
            </div>

            <div className='pyramid'>
                <ul className='moneyList'>
                    {moneyPyramid.map((each) => {
                        return <li className={questionNumber === each.id ? 'moneyListItem active' : 'moneyListItem'}>
                            <span className='moneyListItemNumber'>{each.id}</span>
                            <span className='moneyListItemAmount'>{each.amount}</span>
                        </li>
                    })}

                </ul>
            </div>

        </div>
    )
}

export default Dashboard
