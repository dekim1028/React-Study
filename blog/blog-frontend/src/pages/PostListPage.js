import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostsListContainer from '../containers/posts/PostsListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';

const PostListPage = () => {
    return (
        <div>
            <HeaderContainer/>
            <PostsListContainer/>
            <PaginationContainer/>
        </div>
    );
};

export default PostListPage;