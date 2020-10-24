import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import qs from 'qs';
import PostList from '../../components/posts/PostList';
import { listPosts } from '../../modules/posts';
import { withRouter } from 'react-router-dom';

const PostsListContainer = ({location, match}) => {
    const dispatch = useDispatch();
    const {posts, error, loading, user} = useSelector(({posts,loading,user})=>({
        posts:posts.posts,
        error:posts.error,
        loading:loading['posts/LIST_POSTS'],
        user:user.user,
    }));

    useEffect(()=>{
        const {username} = match.params;
        const {tag, page} = qs.parse(location.search,{
            ignoreQueryPrefix:true,
        });
        dispatch(listPosts({page,username,tag}));
    },[dispatch,match.params,location.search]);

    return (
        <PostList
            loading={loading}
            error={error}
            posts={posts}
            showWriteButton={user}
        />
    );
};

export default withRouter(PostsListContainer);