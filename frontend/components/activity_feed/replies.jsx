import React, { Component } from 'react';




class Reply extends Component {



  render () {

    console.log(this.props.reply)

    return  (
      <article className="ec-comment-reply-container">
        <div>
          <div>
            author_email
                </div>
          <div>
            body
                </div>
        </div>

        <aside>
          delete
              </aside>
      </article>
    )
  }
}

export default Reply;