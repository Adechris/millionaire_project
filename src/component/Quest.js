import {React,useState, useEffect} from 'react'

const Quest = (
     {
         data,
         setStop,
      setQuestionNumber, 
      questionNumber}) => {
       
          const [questions, setQuestions] = useState(null)
          const [selectedAnswer, setSelectedAnswer] =useState(null)
          const [myClass, setMyClass] =useState('answer')
          useEffect(()=>{
              setQuestions(data[questionNumber -1])
            }, [data,questionNumber ])
            
      

            const delayTime = (duration, call) =>{
                setTimeout(()=>{
                    call()
                }, duration)
            }

            const handleAnswer = (a) =>{
                setSelectedAnswer(a)
                setMyClass('answer active');

                delayTime(3000, ()=>
                 setMyClass(a.correct? 'answer correct' : 'answer wrong'))
                 delayTime(5000, ()=>{
                     if (a.correct) {
                         setQuestionNumber(questionNumber +1)
                        setSelectedAnswer(null)
                     }
                     else{
                         setStop(false)
                     }
                 })
            };
            
            


    return ( 
        <div className = 'quest'>
        <div className ='question'>{questions?.question}</div>
        <div className ='answers'>
        {questions?.answers.map((a,i)=>{
           return <div className={selectedAnswer === a ? myClass : 'answer'} onClick={()=>handleAnswer(a)} key={a.id}>{a.text}</div>

        })}
        </div>
        </div>
    )
}

export default Quest
