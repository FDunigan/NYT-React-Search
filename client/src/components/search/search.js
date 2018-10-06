import React, { Component } from "react";
import "./search.css";
import moment from "moment";

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchParams: {},
      searching: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState(
      {
        searchParams: {
          topic: this.refs.topic.value,
          startDate: this.refs.startYear.value
            ? `&begin_date=${moment(new Date(this.refs.startYear.value)).format(
                "YYYYMMDD"
              )}`
            : "",
          endDate: this.refs.endYear.value
            ? `&end_date=${moment(new Date(this.refs.endYear.value)).format(
                "YYYYMMDD"
              )}`
            : "",
          limit: this.refs.numOfRecords.value
            ? this.refs.numOfRecords.value
            : 10
        }
      },
      function() {
        this.props.newQuery(this.state);
        this.setState(
          {
            searching: true
          },
          () => setTimeout(() => this.setState({ searching: null }), 1200)
        );
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <div className="col s12 m12 l6">
          <div className="card-panel">
            <h2 className="header center">Search for an Article</h2>
            <div className="row">
              <form className="col s12" onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">search</i>
                    <label for="topic">Topic</label>
                    <input
                      type="text"
                      ref="topic"
                      id="topic"
                      required="required"
                      className="validate"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">
                      format_list_numbered
                    </i>
                    <select id="numOfRecords" ref="numOfRecords">
                      <option value="" disabled="disabled" selected="selected">
                        Choose your option
                      </option>
                      <option value="1">1</option>
                      <option value="5">5</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">date_range</i>
                    <label for="startYear">Start Date</label>
                    <input
                      type="text"
                      ref="startYear"
                      className="datepicker"
                      id="startYear"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">date_range</i>
                    <label for="endYear">End Date</label>
                    <input
                      type="date"
                      ref="endYear"
                      className="datepicker"
                      id="endYear"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <button
                      className="btn cyan waves-effect waves-light right"
                      type="submit"
                      name="action"
                    >
                      Submit
                      <i className="mdi-content-send right" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    ); 
  } 
} 
