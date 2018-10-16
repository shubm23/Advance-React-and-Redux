import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('shows a Comment Box', () =>{
  const div = document.createElement('div');

  ReactDOM.render(<App />,div);

  //Look inside the div
  //and checks to see if the CommentBox exist

  expect(div.innerHTML).toContain('Comment Box');

  ReactDOM.unmountComponentAtNode(div);
});
