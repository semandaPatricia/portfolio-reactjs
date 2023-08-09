import profilepic from '../assets/blackmaninsuit.jpg'

function Profile() {
    return (
      <div className='fixed mt-[90px]'>
          <img src={profilepic}
          className='h-screen object-cover w-screen'/>
      </div>
    )
  }
  
  export default Profile