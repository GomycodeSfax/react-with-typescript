import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Profile } from './components/Profile';
import LookForAvatar from './components/SearchAvatar';

const response = [
  {
    name: 'Olivia',
    function: 'Designer',
    photoUrl: 'https://www.robohash.org/OliviaOlivia?set=set4'

  },
  {
    name: 'Edward',
    function: 'Developer',
    photoUrl: 'https://www.robohash.org/edward'
  }
]

function showAlert(name: string): void {
  alert(name);
}

const App: React.FC = () => {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>GoMyCode Sfax Team Members</h1>
      <Profile fullName="Rahma Hafi" job="Hackerspace Manager" photoPath="/photos/rahma-hafi.jpg" siblings={2} alert={showAlert} />
      <Profile fullName="Ahmed Fakhfakh" job="PartTime Game Instructor" photoPath="/photos/ahmed-fakhfakh.jpg" siblings={2} alert={showAlert} />
      <Profile fullName="Ahmed Zribi" job="PartTime Web & Mobile Instructor" photoPath="/photos/ahmed-zribi.jpg" siblings={1} alert={showAlert} />
      <Profile fullName="Med Amin Chaari" job="PartTime AI Instructor" photoPath="/photos/med-amin-chaari.jpg" siblings={1} alert={showAlert} />
      <Profile fullName="Badr Gharbi" job="PartTime Web Instructor" photoPath="/photos/badr-gharbi.png" siblings={1} alert={showAlert} />
      <Profile fullName="Imen Siala" job="FullTime Web Instructor" photoPath="/photos/imen-siala.jpg" alert={showAlert} />
      <Profile fullName="Issam Ben Mansour" job="FullTime Web Instructor" photoPath="/photos/issam-ben-mansour.jpg" alert={showAlert} />
      <Profile fullName="Mohamed ELLOUZ" job="Ex FullTime Web Instructor" photoPath="https://www.robohash.org/med-ellouz_" alert={showAlert} />
      <hr />
      {response.map((user) => {
        return (
          <Profile alert={showAlert} fullName={user.name} job={user.function} photoPath={user.photoUrl} />
        )
      })}
      <hr />
      <LookForAvatar />
    </div>
  );
}

export default App;
