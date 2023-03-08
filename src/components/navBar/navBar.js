const NavBar = ({schedule}) => {
  const today = new Date();
  const upcoming = schedule.filter(event => Date.parse(event.Day) > today)
  return ( 
    <div>
      <h1>{upcoming[0].Name}</h1>
    </div>
   );
}
 
export default NavBar;

