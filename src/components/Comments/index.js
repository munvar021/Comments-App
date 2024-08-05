import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {commentsList: [], name: '', comment: ''}

  toggleIsDelete = id => {
    const {commentsList} = this.state

    this.setState({
      commentsList: commentsList.filter(eachComment => eachComment.id !== id),
    })
  }

  toggleIsLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          console.log(id)
          return {...eachComment, isLike: !eachComment.isLike}
        }
        return eachComment
      }),
    }))
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const randomColor = `${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * (initialContainerBackgroundClassNames.length - 1),
        )
      ]
    }`
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: new Date(),
      isLike: false,
      initialClassName: randomColor,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  render() {
    const {commentsList, name, comment} = this.state
    return (
      <div className="app-container">
        <div className="comments-input-container">
          <h1 className="app-heading">Comments</h1>
          <div className="comments-form">
            <form className="form" onSubmit={this.onSubmitForm}>
              <p className="form-info">Say Something about 4.0 Technologies</p>
              <input
                type="text"
                value={name}
                onChange={this.onChangeName}
                className="name-input"
                placeholder="Your Name"
              />
              <textarea
                rows="6"
                value={comment}
                onChange={this.onChangeComment}
                className="comments-input"
                placeholder="Your Comment"
              />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comments-image"
            />
          </div>
          <hr className="line" />
          <p className="sub-heading">
            <span className="comments-count">{commentsList.length}</span>{' '}
            Comments
          </p>
          <ul className="comments-container">
            {commentsList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                commentDetails={eachComment}
                toggleIsLike={this.toggleIsLike}
                toggleIsDelete={this.toggleIsDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
