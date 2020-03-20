import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';


const NewActivity = props => {

  const [type, setType] = useState("Running");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);
  const [units, setUnits] = useState("");
  const [errors, setErrors] = useState({});

  const addActivity = e => {
    e.preventDefault();
    const activity = {type, date, amount, units};
    axios.post("http://localhost:8000/api/activities", activity, {
      withCredentials: true
    })
      .then( res => {
        if(res.data.errors) {
          setErrors(res.data.errors);
        } else {
          navigate("/");
        }
      })
      .catch( err => console.log(err) );
  }

  return (
    <article className="message is-info">
      <div className="message-header">
        <p>Add Activity</p>
      </div>
      <div className="message-body">
        <form onSubmit={ addActivity }>
          <div className="columns">
            <div className="column">
              <label className="label">Activity Type</label>
              <div className="select">
                <select className="input" onChange={e => setType(e.target.value)}>
                  <option>Running</option>
                  <option>Biking</option>
                  <option>Swimming</option>
                  <option>Yoga</option>
                  <option>Rock Climbing</option>
                  <option>Hiking</option>
                </select>
                {
                  errors.type ? 
                  <p class="help is-danger">{errors.type.message}</p> :
                  ""
                }
              </div>
            </div>
            <div className="column">  
              <label className="label">Amount</label>
              <input type="number" className="input" placeholder="Amount" step="0.1" onChange={e => setAmount(e.target.value)} />
              {
                errors.amount ? 
                <p class="help is-danger">{errors.amount.message}</p> :
                ""
              }

            </div>
          </div>
          <div className="columns">
              <div className="column">
                <label className="label">Date</label>
                <input type="date" className="input" onChange={e => setDate(e.target.value+ "T04:00:00Z")}/>
                {
                  errors.date ? 
                  <p class="help is-danger">{errors.date.message}</p> :
                  ""
                }
              </div>
              <div className="column">
                <label className="label">Units</label>
               <input type="units" className="input" placeholder="Units" onChange={e => setUnits(e.target.value)}/>
                {
                  errors.units ? 
                  <p class="help is-danger">{errors.units.message}</p> :
                  ""
                }
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <button style={{width: "100%"}} className="button is-primary is-outlined" type="submit">Submit</button>
              </div>
              <div className="column">
                <Link style={{width: "100%"}} to="/" className="button is-danger is-outlined">Cancel</Link>
              </div>
            </div>
        </form>
      </div>
    </article>
  )
}

export default NewActivity;