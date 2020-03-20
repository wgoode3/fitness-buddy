import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import moment from 'moment';


const Home = props => {

  const [activities, setActivities] = useState([]);

  const fetchActivities = () => {
    axios.get("http://localhost:8000/api/activities", {
      withCredentials: true
    })
      .then( res => setActivities(res.data) )
      .catch( err => {
        if(!err.response.data.verified) {
          navigate("/sign_in");
        } else {
          console.log(err);
        }
      });
  }

  useEffect( () => {
    fetchActivities();
  }, []);

  function isPast(date) {
    return new Date(date) < new Date( new Date().toDateString() );
  }

  const remove =_id => {
    axios.delete(`http://localhost:8000/api/activities/${_id}`, {
      withCredentials: true
    })
      .then( res => {
        fetchActivities();
      }).catch( err => console.log(err) );
  }

  return (
    <div className="columns">
      <div className="column">
        <h1 className="title">Past activities</h1>
        {
          activities
            .filter( a => isPast(a.date) )
            .map( a => 
              <article className="message is-info" key={a._id}>
                <div className="message-header">
                  <p>{a.type}</p>
                  <span>
                    <Link to={"/edit/"+a._id}>Edit</Link>
                    {" | "}
                    <a href="#" onClick={e => remove(a._id) }>Remove</a>
                  </span>
                </div>
                <div className="message-body">
                  <p>On: {moment(a.date).format("MM/DD/YYYY")}</p>
                  <p>For: {a.amount} {a.units}</p>
                </div>
              </article>
            )
        }
      </div>
      <div className="column">
        <h1 className="title">Today's Activities</h1>
        {
          activities
            .filter( a => !isPast(a.date) )
            .map( a => 
              <article className="message is-primary" key={a._id}>
                <div className="message-header">
                  <p>{a.type}</p>
                  <span>
                    <Link to={"/edit/"+a._id}>Edit</Link>
                    {" | "}
                    <a href="#" onClick={e => remove(a._id) }>Remove</a>
                  </span>
                </div>
                <div className="message-body">
                  <p>On: {moment(a.date).format("MM/DD/YYYY")}</p>
                  <p>For: {a.amount} {a.units}</p>
                </div>
              </article>
            )
        }
      </div>
    </div>
  )
}

export default Home;