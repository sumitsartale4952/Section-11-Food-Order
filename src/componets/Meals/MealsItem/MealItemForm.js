import { useRef ,useState} from 'react'; 
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';


const MealItemForm = (props) => {
  const [amountIsValid,setAmountIsValid]= useState(true);
 const amountInputRef =useRef();

  const submitHandler = event =>{
    event.preventDefault();

    const enteredAmount =amountInputRef.current.value;
     const enteredAmountNumber = +enteredAmount;
    
     if(enteredAmount.trim().lenght === 0||
      enteredAmountNumber < 1 ||
       enteredAmountNumber >5)
     {
        setAmountIsValid(false);
        return;
     }
     
     props.onAddCart(enteredAmountNumber);
  
    };
  return ( 
  <form className={classes.form} onSubmit={submitHandler}>
    <Input
    ref={amountInputRef} 
    lable ="Amount" 
    input={{
       id:'amount',
       type:'number', 
       min:'1',
       max:'5',
       step:'1',
       defaultValue:'1'
    }} />
    <button> + Add</button>
    {!amountIsValid && <p>Plese Enter A Valid Amount(1-5)</p>}
  </form>
  );
}

export default MealItemForm;
