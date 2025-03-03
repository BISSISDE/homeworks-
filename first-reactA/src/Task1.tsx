function UserCard (props){

    return (
      <div>
        <h1>
          Hello, My name is {props.name}, I'm {props.age} and I live in {props.city}
        </h1>
      </div>
    );
}

export default UserCard;