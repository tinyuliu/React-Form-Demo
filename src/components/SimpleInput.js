import { useState, useRef } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEntereedNameIsValid] = useState(true);
  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();

    if (enteredName.trim() === '') {
      setEntereedNameIsValid(false);
      return;
    }
    setEntereedNameIsValid(true);

    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(nameInputRef);
    setEnteredName('');
  };


  const nameInputClasses = enteredNameIsValid ? 'form-control': 'form-control invalid'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputRef} 
          type='text' 
          id='name' 
          value={enteredName}
          onChange={nameInputChangeHandler} />
      </div>
      {!enteredNameIsValid && <p className="error-text">Name must not be empty.</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
