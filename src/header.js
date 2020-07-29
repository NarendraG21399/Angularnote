import React from 'react';
function Navbar() {
return (<header className="w3-display-container w3-content w3-wide" style={{ maxWidth: '1600px',minWidth:'500px'}} >
<img className="w3-image" src="/w3images/hamburger.jpg" alt="Hamburger Catering" width="1600" height="800"/>
<div className="w3-display-bottomleft w3-padding-large w3-opacity">
  <h1 className="w3-xxlarge">Le Catering</h1>
</div>
</header>
)
}
export default Navbar;
