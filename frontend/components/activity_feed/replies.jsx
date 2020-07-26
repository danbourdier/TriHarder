import React, { Component } from 'react';


class Reply extends Component {


  render () {
    const { author_email, body } = this.props.reply;

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

        <aside>
          delete
        </aside>
      </article>
    )
  }
}

export default Reply;