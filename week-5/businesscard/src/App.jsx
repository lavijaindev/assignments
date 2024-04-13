import React from 'react';
import { BusinessCard } from './BusinessCard';

function App() {
  return (
    <div>
      <BusinessCard
        name="John Doe"
        description="Software Engineer"
        interests={['Programming', 'Web Development', 'Reading']}
        linkedin="https://www.linkedin.com/in/johndoe/"
        twitter="https://twitter.com/johndoe"
        otherSocialMedia={{
          label: 'Instagram',
          link: 'https://www.instagram.com/johndoe/'
        }}
      />
    </div>
  );
}

export default App;
