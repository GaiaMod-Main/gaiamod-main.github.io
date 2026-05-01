const user = {
    name: 'Me_rudy',
    imageUrl: 'https://trampoline.turbowarp.org/avatars/by-username/Mr_rudy',
    imageSize: 90,
  };
  
  export default function Profile() {
    return (
      <>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Profile of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  }