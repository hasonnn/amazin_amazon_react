import { Star } from './Star'

function StarRating(props) {
  let { max, currentNumber } = props
  let StarArray = []
  for (let i = 1; i <= max; i++) {
    if (i <= currentNumber) {
      StarArray.push(<Star key={i} style={{ color: 'gold', width: '20px' }} />)
    } else {
      StarArray.push(<Star key={i} style={{ color: 'grey', width: '20px' }} />)
    }
  }
  return <div>{StarArray}</div>
}

export default StarRating;