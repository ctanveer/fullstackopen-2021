import React, { useState } from 'react'


const Heading = ({text}) => (
  <h1>{text}</h1>
)


const Button = ({onClick, text}) => (
    <button onClick={onClick}>{text}</button>
)


//sign property is used only once for the "percentage of positives" stat
const StatisticLine = ({text, value, sign}) => (
  <tr>
    <td>{text} </td>
    <td align="right">{value}</td>
    <td>{sign}</td>
  </tr>
)


const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad

  const average = ((good * 1) + (neutral * 0) + (bad * -1))/total

  if (total == 0) {
    return (
      <div>
        <Heading text="statistics" />
        <StatisticLine text="No feedback given" value="" sign="" />
      </div>
    )
  }

  return (
    <div>
      <Heading text="statistics" />
      <table width="400">
        <tbody>
          <StatisticLine text="good" value={good} sign="" />
          <StatisticLine text="neutral" value={neutral} sign="" />
          <StatisticLine text="bad" value={bad} sign=""/>
          <StatisticLine text="number of feedbacks" value={total} sign="" />
          <StatisticLine text="average" value={average} sign="" />
          <StatisticLine text="percentage of positives" value={(good/total) * 100} sign="%" />
        </tbody>
      </table>
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => {
    setGood(good + 1)
  }

  const neutralClick = () => {
    setNeutral(neutral + 1)
  }

  const badClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Heading text="give feedback" />
      <Button onClick={goodClick} text='good' />
      <Button onClick={neutralClick} text='neutral' />
      <Button onClick={badClick} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App