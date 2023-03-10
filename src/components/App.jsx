import user from "../data/user.json";
import data from "../data/data.json";
import friends from '../data/friends.json';
import transactionHistory from "../data/transactions.json"
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./Friends/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory"
import "./App.css";

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory transactions={transactionHistory} />
    </>
  );
}

export default App;
