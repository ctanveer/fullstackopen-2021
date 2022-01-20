import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  
  //calculating array length
  const arrLength = anecdotes.length

  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array(arrLength).fill(0))


  const updateVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVote(newVotes)
  }

  //function to generate a random number
  const randNum = () => (Math.floor(Math.random() * arrLength))

  //finding the index of votes array, with max vote count
  const maxValIndex = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={() => updateVote()}>vote</button>
      <button onClick={() => setSelected(randNum)}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[maxValIndex]}</p>
      <p>has {votes[maxValIndex]} votes</p>
    </div>
  )
}

export default App