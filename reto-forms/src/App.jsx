import { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({ email: '', password: '', class: '' })
  const [errPasswd, setErrPasswd] = useState(true);
  const [errEmail, setErrEmail] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { email, password, option } = Object.fromEntries(formData.entries());

    // regex to validate email
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(!re.test(email)) {
      setErrEmail(false);
      return;
    }
    setErrEmail(true);

    const newForm = {
      email: email,
      password: password,
      class: option
    };
    setForm(newForm);

    console.log(newForm);
  }

  const handleChangePassword = (event) => {
    const psswd = event.target.value;
    setForm({
      ...form,
      password: psswd
    });

    const re = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    if (re.test(psswd)) {
      setErrPasswd(true);
    } else {
      setErrPasswd(false);
    }
  }

  const handleChangeEmail = (event) => {
    const email = event.target.value;
    setForm({
      ...form,
      email: email
    })
  }

  return (
    <section class="form-section">
      <h1>Formulario</h1>

      <form class="form" onSubmit={handleSubmit}>
        <label class="group">
          Email address
          <input name="email" type="email" placeholder="Enter email" onChange={handleChangeEmail} />
        </label>
        <span style={{display: errEmail ? 'none' : 'block', color: "red"}}> Your email should follow an established format.</span>

        <label class="group">
          Password
          <input type="password" placeholder="Password" name="password" onChange={handleChangePassword} />
        </label>
        <span style={{display: errPasswd ? 'none' : 'block', color: "red"}}>Your password should be have numbers and letters and should be at least 9 char long</span>
        <label class="group">
          Favorite Class
          <select name="option">
            <option value="isis3710">ISIS3710</option>
            <option value="isis2605">Programación con tecnologias web</option>
          </select>
        </label>

        <button type='submit'>Submit</button>
      </form>
    </section>
  );
}

export default App;
