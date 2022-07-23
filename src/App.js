import React from "react";
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://seeklogo.com/images/U/ukraine-flag-logo-AB2B1D5F2E-seeklogo.com.png'/>
      </header>
      <nav className='nav'>
        <div>
            <a> Profile</a>
        </div>
          <div>
              <a>Messages</a>
          </div>
          <div>
          <a>News</a>
          </div>
          <div>
                <a>Music</a>
            </div>
          <div>
              <a>Settings</a>
          </div>
      </nav>
        <div className='content'>
<img src='https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg'/>
        <div>
            <div>
                ava + desription
            </div>
            <div>
                My Posts
                </div>
                    <div>
                        New posts
                    </div>
                    <div>
                        post1
                    </div>
                    <div>
                        post2
                    </div>
        </div>
        </div>
        </div>);
}

export default App;
