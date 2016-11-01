import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

// Components
import App from '../imports/containers/App.jsx';

Meteor.startup(() => {
  render(<App />, document.getElementById('app'));
});
