import React, { useState, useEffect } from 'react';

const Comments = ({ project }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (project) {
            fetch(`https://snailshare.xyz/api/getCommentsForProject?project=${project}`)
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                        setError(data.error);
                    } else {
                        setComments(data.comments);
                    }
                })
                .catch(err => {
                    setError('Error fetching comments');
                });
        }
    }, [project]);

    const handlePostComment = () => {
        const passcode = localStorage.getItem('pv');  // Retrieve passcode from local storage

        if (!passcode) {
            setError('Passcode not found in local storage');
            return;
        }

        const packet = {
            author: 'currentUser',  // Replace with actual user info
            passcode: passcode,
            content: newComment,
            project: project
        };

        fetch('https://snailshare.xyz/api/postComment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(packet)
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'success') {
                setComments([{
                    user: packet.author,
                    text: packet.content,
                    replies: [],
                    id: Date.now()
                }, ...comments]);
                setNewComment('');
            } else {
                setError(data.error || 'Error posting comment');
            }
        })
        .catch(err => {
            setError('Error posting comment');
        });
    };

    return (
        <div>
            <h2>Comments</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                {comments.map(comment => (
                    <div key={comment.id}>
                        <p><strong>{comment.user}</strong>: {comment.text}</p>
                        {comment.replies && comment.replies.map(reply => (
                            <div key={reply.id} style={{ marginLeft: '20px' }}>
                                <p><strong>{reply.user}</strong>: {reply.text}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div>
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a comment..."
                ></textarea>
                <button onClick={handlePostComment}>Post Comment</button>
            </div>
        </div>
    );
};

export default Comments;
