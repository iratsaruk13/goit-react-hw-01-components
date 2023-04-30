import { Profile } from "./components/Profile/Profile";
import userdata from "./components/Profile/user.json";

function App() {
  const { username, avatar, tag, location, stats } = userdata;
  return (
    <>
      <Profile
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}
        stats={stats}
      />
    </>
  );
}

export default App;
