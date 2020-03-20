import React, { useState } from 'react';
import { Router, Link, navigate } from '@reach/router';
import axios from 'axios';


const NewActivity = props => {

  const [type, setType] = useState("Running");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);
  const [units, setUnits] = useState("");

  const addActivity = e => {
    e.preventDefault();
    const activity = {type, date, amount, units};
    axios.post("http://localhost:8000/api/activities", activity)
      .then( res => {
        if(res.errors) {
          // do something
        } else {
          navigate("/");
        }
      })
      .catch( err => console.log(err) );
  }

  return (
    <article className="message">
      <div className="message-header">
        <p>Hello World</p>
      </div>
      <div className="message-body">
        <form onSubmit={ addActivity }>
          <div className="columns">
            <div className="column">
              <div className="select">
                <select className="input" onChange={e => setType(e.target.value)}>
                  <option>Running</option>
                  <option>Biking</option>
                  <option>Swimming</option>
                  <option>Yoga</option>
                  <option>Rock Climbing</option>
                  <option>Hiking</option>
                </select>
              </div>
              <input type="date" className="input" onChange={e => setDate(e.target.value)}/>
              <button style={{width: "100%"}} className="button is-primary is-outlined" type="submit">Submit</button>
            </div>
            <div className="column">
              <input type="number" className="input" placeholder="Amount" step="0.1" onChange={e => setAmount(e.target.value)} />
              <input type="units" className="input" placeholder="Units" onChange={e => setUnits(e.target.value)}/>
              <Link style={{width: "100%"}} to="/" className="button is-danger is-outlined">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    </article>
  )
}

export default NewActivity;