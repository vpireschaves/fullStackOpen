import { useState } from 'react'

const StatisticLine = ({ type, clicks} ) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{clicks}</td>
    </tr>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({clicks}) => { 

  if (clicks.total === 0){
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>  
    )
  }

  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticLine type='good' clicks={clicks.good} />
          <StatisticLine type='neutral' clicks={clicks.neutral} />
          <StatisticLine type='bad' clicks={clicks.bad} />
          <StatisticLine type='all' clicks={clicks.total} />
          <StatisticLine type='average' clicks={clicks.average} />
          <StatisticLine type='positive' clicks={clicks.positive} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)


  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
    const updatedTotal = total + 1    
    setAverage(() => (updatedGood *1 + neutral * 0 + bad * -1)/updatedTotal)
    setPositive(() => updatedGood/updatedTotal*100 + "%")
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(good + updatedNeutral + bad)
    const updatedTotal = total + 1    
    setAverage(() => (good *1 + updatedNeutral * 0 + bad * -1)/updatedTotal)
    setPositive(() => good/updatedTotal*100 + "%")
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(good + neutral + updatedBad)
    const updatedTotal = total + 1    
    setAverage(() => (good *1 + neutral * 0 + updatedBad * -1)/updatedTotal)
    setPositive(() => good/updatedTotal*100 + "%")
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
      <Statistics clicks={{good, bad, neutral, total, average, positive}} />
      </div>
  )
}

export default App