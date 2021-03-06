import React from 'react';
import styled from 'styled-components';

export const HoverData = ({ data, handleTagClick }) => {
    return (
        <HoverContainer className="mask">
            <span className="project-title">{data.title}</span>
            <span className="project-location">{data.location}</span>
            <span className="project-category">{data.category}</span>
            <TagsContainer>
                {data.tags.map(tag => (
                    <Tag key={tag} onClick={(e) => handleTagClick(e, tag)}>{tag}</Tag>
                ))}
            </TagsContainer>
        </HoverContainer>
    );
};

const HoverContainer = styled.div`
    position: absolute;
    top: 0px;
    background: rgba(0, 0, 0, 0.75);
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5% 0;

    .project-title {
        color: ${({ theme }) => theme.red};
        font-size: ${({ theme }) => theme.size3};
        font-weight: 700;
    }

    .project-category {
        color: ${({ theme }) => theme.white};
        font-style: italic;
        font-size: ${({ theme }) => theme.size2};
    }

    .project-location {
        color: ${({ theme }) => theme.white};
        font-size: ${({ theme }) => theme.size2};
    }
`;

const Tag = styled.div`
    color: ${({ theme }) => theme.white};
    background: rgba(255, 0, 0, 1);
    font-size: ${({ theme }) => theme.size1};
    width: auto;
    margin: 5px 7px;
    padding: 5px;
    border-radius: 5px;
    letter-spacing: 0.05rem;
    &:hover {
        transform: scale(1.15);
    }
`;

const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center;
`;
