  import { useState } from 'react';

  const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);


    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const enteredEmailIsValid = enteredEmail.includes('@');
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

    let formIsValid = false;
    if (enteredNameIsValid && enteredEmailIsValid) {
      formIsValid = true;
    }
  

    const nameInputChangeHandler = event => {
      setEnteredName(event.target.value);
    };

    const nameInputBlurHandler = event => {
      setEnteredNameTouched(true);
    };


    const emailInputChangeHandler = event => {
      setEnteredEmail(event.target.value);
    };

    const emailInputBlurHandler = event => {
      setEnteredEmailTouched(true);
    };

    const formSubmissionHandler = event => {
      event.preventDefault();

      if (!enteredNameIsValid || !enteredEmailIsValid) {
        return;
      }
      console.log('enteredName:',enteredName);
      console.log('enteredEmail', enteredEmail);
      
      setEnteredName('');
      setEnteredNameTouched(false);

      setEnteredEmail('');
      setEnteredEmailTouched(false);
    };


    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
    const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

    return (
      <form onSubmit={formSubmissionHandler}>
        <div className={nameInputClasses}>
          <label htmlFor='name'>Your Name</label>
          <input
            type='text' 
            id='name' 
            value={enteredName}
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler} />
        </div>
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
        <div className={emailInputClasses}>
          <label htmlFor='email'>Your Email</label>
          <input
            type='text' 
            id='email' 
            value={enteredEmail}
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler} />
        </div>
        {emailInputIsInvalid && <p className="error-text">Email is invalid.</p>}
        <div className="form-actions">
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    );
  };

  export default SimpleInput;
