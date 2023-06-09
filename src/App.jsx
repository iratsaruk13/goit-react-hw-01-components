import { Profile } from "./components/Profile/Profile";
import userdata from "./components/Profile/user.json";
import { Statistics } from "./components/Statistics/Statistics";
import statistics from "./components/Statistics/data.json";
import { FriendList } from "./components/FriendList/FriendList";
import friendsdata from "./components/FriendList/friends.json";
import { TransactionHistory } from "./components/Transaction/Transaction";
import transactions from "./components/Transaction/transactions.json";

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
      <FriendList friends={friendsdata} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
