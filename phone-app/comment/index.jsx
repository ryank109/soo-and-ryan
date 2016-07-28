import classNames from 'classnames';
import { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'phone/components/button';
import { post } from 'phone/comment/actions';

const selector = state => {
    return {
        hasCommentError: state.app.hasCommentError,
        hasNameError: state.app.hasNameError,
        screenWidth: state.app.screenWidth
    };
};

class CommentPage extends Component {
    render() {
        const style = {
            width: `${this.props.screenWidth}px`
        };

        const className = classNames('page', this.props.className);
        const inputNameClass = classNames({
            input: true,
            'input--error': this.props.hasNameError
        });
        const commentClass = classNames({
            input: true,
            textarea: true,
            'input--error': this.props.hasCommentError
        });

        return (
            <div className={className} style={style}>
                <div className="page-block">
                    <div className="page-block__inner title">
                        <div>Comments</div>
                    </div>
                </div>
                <div className="page-block">
                    <div className="page-block__inner form form-content">
                        <div className="form-section">
                            <input className={inputNameClass} type="text" placeholder="Your Name" ref="name"/>
                        </div>
                        <div className="form-section form-section--last">
                            <textarea className={commentClass} placeholder="Say something!" rows={7} ref="comment" />
                        </div>
                    </div>
                </div>
                <div className="page-block">
                    <div className="page-block__inner form form-footer">
                        <div className="form-buttons">
                            <Button
                                label="Post"
                                className="page__button page__button__left"
                                onClick={this.post.bind(this)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    post() {
        this.props.post(this.refs.name.value, this.refs.comment.value);
    }
}

export default connect(selector, { post })(CommentPage);
