import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import HeaderPlay from '../components/HeaderPlay';

class Ranking extends Component {
  constructor() {
    super();
    this.state = {
      redirectLogin: false,
      // infoRanking: [],
    };
  }

  // loadingFinalRanking = () => {
  //   const recoverRanking = JSON.parse(localStorage.getItem('ranking'));
  //   this.setState({
  //     infoRanking: recoverRanking,
  //   });
  // };

  playAgain = () => {
    this.setState({
      redirectLogin: true,
    });
  }

  render() {
    const { redirectLogin /* infoRanking */ } = this.state;
    return (
      <div>
        <HeaderPlay />
        <p data-testid="ranking-title">Ranking</p>
        <ol>
          {/* {
          infoRanking.map((info) => (
            <li>
              <img scr="" alt=""/>
           </li>
          ))
        } */}
        </ol>
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ this.playAgain }
        >
          Play Again
        </button>
        {redirectLogin && <Redirect to="/" />}
      </div>
    );
  }
}

export default Ranking;
