import './style.css'
import { IoBackspaceOutline } from 'react-icons/io5'

const Keypad = () => {
  return (
    <div className='buttons'>
      <button value={'backspace'} onClick={() => {
      }}><IoBackspaceOutline /></button>
      <button value={'C'} onClick={() => {
      }}> C
      </button>
      <button value={'%'} onClick={() => {
      }}> %
      </button>
      <button value={'/'} onClick={() => {
      }} className='operator'>/
      </button>

      <button value={'1'} onClick={() => {
      }}> 1
      </button>
      <button value={'2'} onClick={() => {
      }}> 2
      </button>
      <button value={'3'} onClick={() => {
      }}>3
      </button>
      <button value={'*'} onClick={() => {
      }} className='operator'>*
      </button>

      <button value={'4'} onClick={() => {
      }}>4
      </button>
      <button value={'5'} onClick={() => {
      }}>5
      </button>
      <button value={'6'} onClick={() => {
      }}>6
      </button>
      <button value={'-'} onClick={() => {
      }} className='operator'>-
      </button>

      <button value={'7'} onClick={() => {
      }}>7
      </button>
      <button value={'8'} onClick={() => {
      }}>8
      </button>
      <button value={'9'} onClick={() => {
      }}>9
      </button>
      <button value={'+'} onClick={() => {
      }} className='operator'>+
      </button>

      <button value={'.'} onClick={() => {
      }}>.
      </button>
      <button value={'0'} onClick={() => {
      }}>0
      </button>
      <button value={'='} onClick={() => {
      }} className='operator'>=
      </button>
    </div>
  )
}

export default Keypad
