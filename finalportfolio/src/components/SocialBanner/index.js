import React from 'react';
import './index.css';

class SocialBanner extends React.Component{
  render(){
    return(
      <div className="grid">
        <div class="grid-item par">
          <div class="grid-item end">
            <h2>Contact Information</h2>
          </div>
          <div class="grid-item end">
            <p>Email: jimmyclement10@gmail.com</p>
            <p>Phone: (407)922-8143</p>
          </div>
        </div>
        <div class="grid-item par">
          <div class="grid-item end">
            <h2>Social Medias</h2>
          </div>
          <div class="grid-item end">
            <a href="https://www.facebook.com/james.clement.104"><p>Facebook: James Clement</p></a>
            <a href="https://www.linkedin.com/in/james-clement-7ab66b194/"><p>LinkedIn: James Clement</p></a>
            <a href="https://twitter.com/Baseball19k"><p>Twitter: Baseball19k</p></a>
            <a href="https://www.instagram.com/baseball19k/"><p>Instagram: Baseball19k</p></a>
            <a href="https://github.com/baseball19k"><p>GitHub: Baseball19k</p></a>
          </div>
        </div>
      </div>
    );
  }
}
export default SocialBanner;
