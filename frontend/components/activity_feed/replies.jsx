import React, { Component } from 'react';


class Reply extends Component {
  constructor(props) {
    super(props)
    this.currentUserId = this.props.authorId;

    this.reply = this.props.reply;
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    return this.props.deleteReply(this.reply.id)
  }

  render () {
    const { author_email, body, id } = this.props.reply;

    // instantiated to develop logic in rendering delete button only for authored sub-activity
    let deleteButtonSub = this.currentUserId === id ?
      <aside onClick={this.handleClick}>
          delete
        </aside> :
      null;

    return  (
      <article className="ec-comment-reply-container">
        <section className="ec-comment-reply-first-section">
          <span className="es-comment-reply-email">
            { author_email }
          </span>

          <span className="es-comment-reply-body">
            { body }
          </span>
        </section>

        { deleteButtonSub }
      </article>
    )
  }
}

export default Reply;