import React, { Component } from 'react';

const VideoListItem = ({video}) => {
    const { snippet: { title, thumbnails: { default: { url }} } } = video;
    return (
        <li className="col-md-12 list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={url}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {title}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;