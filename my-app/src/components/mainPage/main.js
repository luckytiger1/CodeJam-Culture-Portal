import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { TRANSLATE } from "../../assets/translate";

import "./main.css";

import Description from "./description";
import photographersData from '../../assets/photographersData';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.chooseDate = this.chooseDate.bind(this);
    console.log(props);
  }

  chooseDate() {
    const date = new Date();
    const numOfTheAuthor = date.getDay();
    return numOfTheAuthor;
  }

    render() {
      const lang = this.props.lang;
      const nameOfAuthor = photographersData[this.chooseDate()][lang].name;
      const summary = photographersData[this.chooseDate()][lang].summary;
      const photo = photographersData[this.chooseDate()].photo;
      const id = photographersData[this.chooseDate()].id;

      return (
        <Fragment>
          <div className="jumbotron">
            <div>
              <Description lang = {lang}/>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <img className="author-photo-container" src={photo} alt="Photographer"></img>
            </div>
            <div id='info-about-author'>
              <h2>{TRANSLATE[lang].authorOfTheDay}</h2>
              <h5>{nameOfAuthor}</h5> 
              <p>{summary}</p>
              <Link to={`/photographer/${id}`}>
                <p className='border'>
                  <a className="btn btn-default" role="button">{TRANSLATE[lang].buttonContent}</a>
                </p>
              </Link>
            </div>
          </div>
        </Fragment>
      );
    }
  }
  
  export default MainPage;
