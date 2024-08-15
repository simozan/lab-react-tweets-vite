import { ProfileImage } from "./ProfileImage";
import { User } from "./User";
import { Timestamp } from "./Timestamp";
import { Message } from "./Message";
import { Actions } from "./Actions";

function Tweet(Props) {
  return (
    <div className="tweet">
      <ProfileImage image={Props.image} />
      <div className="body">
        <div className="top">
          <User name={Props.name} handle={Props.handle} />
          <Timestamp timestamp={Props.timestamp} />
        </div>
        <Message message={Props.message} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
