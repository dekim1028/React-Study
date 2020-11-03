import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';

const PostViewBlock = styled(Responsive)`
    margin-top:4rem;
`;

const PostHead = styled.div`
    border-bottom:1px solid ${palette.gray[2]};
    padding-bottom:3rem;
    margin-bottom:3rem;
    h1{
        font-size:3rem;
        line-height:1.5;
        margin:0;
    }
`;

const PostContent = styled.div`
    font-size:1.3125rem;
    color:${palette.gray[8]};
`;

const PostViewer = ({post,error,loading,actionButtons}) => {
    if(error){
        if(error.response && error.response.status===404){
            return <PostViewBlock>존재하지 않는 포스트입니다.</PostViewBlock>
        }
        return <PostViewBlock>오류 발생!!</PostViewBlock>
    }

    if(loading || !post){
        return null;
    }

    const {title,body,user,publishedData,tags} = post;

    return (
        <PostViewBlock>
            <PostHead>
                <h1>{title}</h1>
                <SubInfo username={user.username} publishedData={publishedData} hasMarginTop/>
                <Tags tags={tags}/>
            </PostHead>
            {actionButtons}
            <PostContent dangerouslySetInnerHTML={{__html:body}}/>
        </PostViewBlock>
    );
};

export default PostViewer;