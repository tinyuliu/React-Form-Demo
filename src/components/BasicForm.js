import useInput from "../hooks/use-input";

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');

const BasicForm = (props) => {

  const {
    value: enteredFirstname,
    isValid: firstameInputIsValid,
    hasError: firstnameInputHasError,
    valueChangeHandler: firstnameInputChangeHandler,
    inputBlurHandler: firstnameInputBlurHandler,
    reset: resetFirstnameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredLastname,
    isValid: lastnameInputIsValid,
    hasError: lastnameInputHasError,
    valueChangeHandler: lastnameInputChangeHandler,
    inputBlurHandler: lastnameInputBlurHandler,
    reset: resetLastnameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: emailInputIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  let formIsValid = false;
  if(firstameInputIsValid && lastnameInputIsValid && emailInputIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    if (!formIsValid){
      return;
    }

    resetFirstnameInput();
    resetLastnameInput();
    resetEmailInput();
  };

  const firstnameInputClasses = firstnameInputHasError? 'form-control invalid' : 'form-control';
  const lastnameInputClasses = lastnameInputHasError? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstnameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text' 
            id='firstname'
            value={enteredFirstname}
            onChange={firstnameInputChangeHandler}
            onBlur={firstnameInputBlurHandler}
             />
             {firstnameInputHasError && <p className="error-text">Fisrt Name must not be empty.</p>}
        </div>
        <div className={lastnameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input 
            type='text' 
            id='lastname'
            value={enteredLastname}
            onChange={lastnameInputChangeHandler}
            onBlur={lastnameInputBlurHandler} 
          />
          {lastnameInputHasError && <p className="error-text">Last Name must not be empty.</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
          type='text' 
          id='email'
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler} 
        />
        {emailInputHasError && <p className="error-text">Email is invalid.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
