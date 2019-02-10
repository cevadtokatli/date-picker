import React from 'react';
import {findDOMNode} from 'react-dom';
import {bindOnce} from 'dom-display-detector';

export default class FeatureItem extends React.Component {
    componentDidMount() {
        bindOnce(findDOMNode(this).querySelector('.feature-item'), e => {
            e.target.classList.add('active');
        });
    }

    render() {
        let {id, icon, title, description} = this.props.item;
    
        return(
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="feature-item">
                    <div id={id} className="icon-container"><i className={icon} aria-hidden="true"></i></div>
                    <h5>{title}</h5>
                    { typeof description === 'string'
                        ? <p>{description}</p>
                        : description
                    }
                </div>
            </div>
        );
    }
}