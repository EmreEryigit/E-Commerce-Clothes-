import { useSelector } from 'react-redux';
import { Button } from './Details';

const Favorites = () => {
  const favorites = useSelector(state => state.cloth.favorites);
  const prices = favorites.map(item => item.price)
  console.log(prices)
  const total = prices.reduce((a, b) => a + b, 0)
  return (
    <div style={{backgroundColor: "brown"}}>
      <h1 style={{color: "goldenrod"}}>Favorites</h1>
      
      {favorites.map(c => (
        <div class="card" > 
  <img src={c.image} class="card-img-top" style={{width: "100%", height: "25rem"}} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{c.name}</h5>
    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, est.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{c.price}$</li>
    
  </ul>
  <div class="card-body">
  <Button style={{backgroundColor: "goldenrod"}} type="button">Remove from favorites</Button>
  </div>
</div>
      ))}
    </div>
  )
}

export default Favorites