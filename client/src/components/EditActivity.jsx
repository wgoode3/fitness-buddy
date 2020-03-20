import React, { useState, useEffect } from 'react';
import { Router, Link, navigate } from '@reach/router';
import axios from 'axios';
import moment from 'moment';


const EditActivity = props => {

  const [type, setType] = useState("Running");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);
  const [units, setUnits] = useState("");
  const [errors, setErrors] = useState({});

  const getActivity = () => {
    axios.get(`http://localhost:8000/api/activities/${props._id}`)
      .then( res => {
        console.log(res.data);
        setType(res.data.type);
        setDate(res.data.date);
        setAmount(res.data.amount);
        setUnits(res.data.units);
      }).catch(err => console.log(err));
  }

  useEffect( () => {
    getActivity();
  }, []);

  const updateActivity = e => {
    e.preventDefault();
    const activity = {type, date, amount, units};
    axios.put(`http://localhost:8000/api/activities/${props._id}`, activity)
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
    <article className="message">
      <div className="message-header">
        <p>Update Activity</p>
      </div>
      <div className="message-body">
        <form onSubmit={ updateActivity }>
          <div className="columns">
            <div className="column">
              <div className="select">
                <select className="input" onChange={e => setType(e.target.value)} value={type}>
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
              <input type="date" className="input" onChange={e => setDate(e.target.value)} value={moment(date).format("YYYY-MM-DD")}/>
              {
                errors.date ? 
                <p class="help is-danger">{errors.date.message}</p> :
                ""
              }
              <button style={{width: "100%"}} className="button is-info is-outlined" type="submit">Update</button>
            </div>
            <div className="column">
              <input type="number" className="input" placeholder="Amount" step="0.1" onChange={e => setAmount(e.target.value)} value={amount}/>
              {
                errors.amount ? 
                <p class="help is-danger">{errors.amount.message}</p> :
                ""
              }
              <input type="units" className="input" placeholder="Units" onChange={e => setUnits(e.target.value)} value={units}/>
              {
                errors.units ? 
                <p class="help is-danger">{errors.units.message}</p> :
                ""
              }
              <Link style={{width: "100%"}} to="/" className="button is-danger is-outlined">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    </article>
  )
}

export default EditActivity;