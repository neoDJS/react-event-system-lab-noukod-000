// Code EyesOnMe Component Here
import React from 'react';

<<<<<<< HEAD
export default class EyesOnMe extends React.Component {
  handleFocus = () => {
    console.log('Good!');
  }

  handleBlur = () => {
=======
class EyesOnMe extends React.Component {
  handleFocus = (e) => {
    console.log('Good!');
  }

  handleBlur = (e) => {
>>>>>>> a91c6a000985d5dc94b9be59bb01017f8bf27580
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
<<<<<<< HEAD
        <button onFocus={this.handleFocus} onBlur={this.handleBlur}></button>
=======
        <button onFocus={handleFocus} onBlur={handleBlur}></button>
>>>>>>> a91c6a000985d5dc94b9be59bb01017f8bf27580
    );
  }
}
