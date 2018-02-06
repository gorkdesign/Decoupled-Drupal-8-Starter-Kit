import React from 'react';

import MdRemove from 'react-icons/lib/md/remove-circle-outline';

const HCard = props => {
  return (
    <div className="py-3">
      <div className="card" onClick={() => { props.ctaHandler(props.uuid, props.nid, props.images)}}>
        <div className="row ">

            <div className="col-md-4">
              <img src="https://placeholdit.imgix.net/~text?txtsize=38&amp;txt=400%C3%97400&amp;w=400&amp;h=400" alt="" className="w-100" />
            </div>

            <div className="col-md-8 px-3">
              <div className="card-body px-3">
                <h4 className="card-title">{props.title} {props.nid}</h4>
                {props.hasOwnProperty('body') ? <p className="card-text">{props.body}</p> : null }
                <button className="delete"><MdRemove className="remove" onClick={
                  (event) => {
                    event.stopPropagation();
                    props.deleteHandler(props.nid);
                  }
                }/></button>
              </div>
            </div>
            
        </div>
      </div>
    </div>
  );
}

export default HCard;