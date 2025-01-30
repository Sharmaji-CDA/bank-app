import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIn = { firstName: 'Ashutosh', lastName: 'Sharma', email: '1234sharmaas@gmail.com' };
  return (
    <section className = 'home'>
      <div className = 'home-content'>
        <header className = 'home-header'>
          <HeaderBox type = "greeting" title = "Welcome" user = {loggedIn?.firstName || 'Guest'} subtext = "Access and manage your account and transections effeciently" />
          <TotalBalanceBox accounts = {[]} totalBanks = {1} totalCurrentBalance = {1260.24}></TotalBalanceBox>
        </header>

        RECENT TRANSECTIONS
      </div>

      <RightSidebar user={loggedIn} transactions={[]} banks={[{ currentBalance: 1102.20 }, { currentBalance: 2302.50 }]} />
    </section>
  )
}

export default Home