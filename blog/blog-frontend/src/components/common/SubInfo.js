import React from 'react';
import {Link} from 'react-router-dom';
import styled, {css} from 'styled-components';
import palette from '../../lib/styles/palette';

const SubInfoBlock = styled.div`
    ${props=>
        props.hasMarginTop &&
        css`
            margin-top:1rem;
        `}
    color:${palette.gray[6]};

    span+span:before{
        color:${palette.gray[4]};
        padding-left:0.25rem;
        padding-right:0.25rem;
        content:'\\B7';
    }
`;

const SubInfo = ({username,publishedData,hasMarginTop}) => {
    return (
        <SubInfoBlock hasMarginTop={hasMarginTop}>
            <span>
               <Link to={`/@${username}`}>{username}</Link>
            </span>
            <span>{new Date(publishedData).toLocaleDateString()}</span>
        </SubInfoBlock>
    );
};

export default SubInfo;