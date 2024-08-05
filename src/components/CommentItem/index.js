// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleIsLike, toggleIsDelete} = props
  const {id, name, comment, date, isLike, initialClassName} = commentDetails
  console.log(initialClassName)
  const initial = name ? name[0].toUpperCase() : ''
  const likeTextClassName = isLike ? 'active buttons' : 'buttons'
  const postedTime = formatDistanceToNow(date)

  const isLIkeImageUrl = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickLikeButton = () => {
    toggleIsLike(id)
  }

  const onClickDeleteButton = () => {
    toggleIsDelete(id)
  }

  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className={`initial-container ${initialClassName}`}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="username-container">
            <p className="username">{name}</p>
            <p className="time">{postedTime} ago</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="buttons-container">
        <button
          type="button"
          className={likeTextClassName}
          onClick={onClickLikeButton}
          data-testid="like"
        >
          <img src={isLIkeImageUrl} alt="like" className="toggle-images" /> Like
        </button>
        <button
          type="button"
          className="buttons"
          onClick={onClickDeleteButton}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="toggle-images"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}

export default CommentItem
