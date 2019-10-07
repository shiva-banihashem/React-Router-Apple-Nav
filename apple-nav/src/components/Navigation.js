import React from 'react';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <div>
      <div className="headerWrap">
        
        <nav>
          
          <Link  to="/"><img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg"></img></Link>
          <Link  to="/mac">Mac</Link>
          <Link  to="/ipad">ipad</Link>
          <Link  to="/iphone">iPhone</Link>
          <Link  to="/watch">Watch</Link>
          <Link  to="/tv">Music</Link>
          <Link  to="/support">Support</Link>
          <Link  to="/search"><img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg"></img></Link>
          <Link  to="/bag"><img src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg"></img></Link>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
