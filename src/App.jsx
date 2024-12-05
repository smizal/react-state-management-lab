import { useState } from 'react'
import './App.css'

function App() {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952'
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796'
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355'
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776'
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4'
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2'
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2'
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc'
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537'
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e'
    }
  ])

  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)

  const handleAddFighter = async (event) => {
    const selectedZombie = zombieFighters[event.target.id]
    if (selectedZombie.price > money) {
      alert('Not enough money')
      console.log('Not enough money')
    } else {
      setMoney(money - selectedZombie.price)
      setTotalStrength(totalStrength + selectedZombie.strength)
      setTotalAgility(totalAgility + selectedZombie.agility)
      team.push(selectedZombie)
      setTeam([...team])
    }
  }

  const handleRemoveFighter = async (event) => {
    const removedMember = team[event.target.id]
    setMoney(money + removedMember.price)
    setTotalStrength(totalStrength - removedMember.strength)
    setTotalAgility(totalAgility - removedMember.agility)
    team.splice(event.target.id, 1)
    setTeam([...team])
  }

  /* const strength = team.reduce((acc, member) => {
    return acc + member.strength
  }, 0)

  const agility = team.reduce((acc, member) => {
    return acc + member.agility
  }, 0) */

  return (
    <>
      <h1>Zombie Fighters</h1>
      <p>Current Money: {money}</p>
      <p>Team Strength: {totalStrength}</p>
      <p>Team Agility: {totalAgility}</p>
      <p>Team</p>
      {team.length ? (
        <ul>
          {team.map((fighter, index) => (
            <li>
              <img src={fighter.img} alt="" />
              <h3>{fighter.name}</h3>
              <p>Price: {fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button id={index} onClick={handleRemoveFighter}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        'Pick some team members!'
      )}

      <ul>
        {zombieFighters.map((fighter, index) => (
          <li>
            <img src={fighter.img} alt="" />
            <h3>{fighter.name}</h3>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button id={index} onClick={handleAddFighter}>
              Add
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
