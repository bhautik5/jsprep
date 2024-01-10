import './Cell.css';

// eslint-disable-next-line react/prop-types
const Cell = ({filled, onClick, deActive, label}) => {
  return (
    <button 
        className= {filled?`cell active`:`cell`}
        onClick = {onClick}
        disabled = {deActive}
        aria-label={label}
    />
  )
}

export default Cell