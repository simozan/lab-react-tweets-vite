import { ProfileImage } from "./ProfileImage";
import { User } from "./User";
import { Timestamp } from "./Timestamp";

function Tweet(Props) {
  return (
    <div className="tweet">
      <ProfileImage image={Props.image} />

      <div className="body">
        <div className="top">
          <User name={Props.name} handle={Props.handle} />
          <Timestamp timestamp={Props.timestamp}/>

        </div>

        <p className="message">{Props.message}</p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
