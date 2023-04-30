import { Profile } from "./components/Profile/Profile";
import userdata from "./components/Profile/user.json";
import { Statistics } from "./components/Statistics/Statistics";
import statistics from "./components/Statistics/data.json";

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
      <Statistics title="Upload stats" stats={statistics} />
    </>
  );
}

export default App;
