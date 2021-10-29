import './style.css'

const Display = ({numbers, result}) => {
  return (
    <div className='containerDisplay'>
      <p className='numbers'>{numbers}</p>
      <p className='results'>{result}</p>
    </div>
  )
}

export default Display
