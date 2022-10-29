import '../styles/button.css';

const Button= ({text, suppliedId}) => {
return (

<div className="button-container">
      <button className="custom-button" id={suppliedId}>
        {text}
      </button>
</div>    
)

}



export default Button;
