// Code Keypad Component Here
import React from 'react';

<<<<<<< HEAD
export default class Keypad extends React.Component {
  handleKeyUp = () => {
=======
class Keypad extends React.Component {
  handleKeyUp = (e) => {
>>>>>>> a91c6a000985d5dc94b9be59bb01017f8bf27580
    console.log('Entering password...');
  }

  render() {
    return (
<<<<<<< HEAD
        <input type="password" onKeyUp={this.handleKeyUp} />
=======
        <input type="password" onKeyUp={handleKeyUp} />
>>>>>>> a91c6a000985d5dc94b9be59bb01017f8bf27580
    );
  }
}
