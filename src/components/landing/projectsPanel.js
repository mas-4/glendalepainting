import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { HoverData } from './hoverData'
import { breakpoints } from '../../styles/breakpoints'

const TitlePanel = styled.div`
    width: 100%;
    margin-top: 16rem;
    margin-bottom: 10rem;
    a {
        text-decoration: none;
        color: ${({theme}) => theme.black};
    }
    ${breakpoints.vp9} {
        margin-top: 5rem;
        margin-bottom: 5rem;
    }
`;
const Title = styled.h1`
    font-size: 10rem;
    margin: 0 auto;
    text-align: center;
    padding: 2rem;
    width: 40rem;
    line-height: 0.8;
    border: 2rem solid red;
    ${breakpoints.vp13} {
        font-size: 8rem;
    }
    ${breakpoints.vp9} {
        font-size: 6rem;
        padding: 2rem;
        border: 1.5rem solid red;
        width: 30rem;
    }
    ${breakpoints.vp7} {
        font-size: 5rem;
        padding: 1.5rem;
        width: 25rem;
    }
`;
const Panel = styled.div`
    background-color: rgba(41, 41, 41, 0.78);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;
const Project = styled.div`
    width: 33.3333%;
    position: relative;
    overflow: hidden;
    transition: 0.5s linear;

    &:hover .mask {
        opacity: 1;
    }

    .hoverContainer {
        cursor: pointer;
    }
    ${breakpoints.vp9} {
        font-size: 1rem;
    }
    ${breakpoints.vp7} {
        width: 50%;
    }
    ${breakpoints.vp4_2} {
        width: 100%;
    }
`;

export const ProjectsPanel = ({ width }) => {
    const data = useStaticQuery(graphql`
        fragment test on MarkdownRemark {
            frontmatter {
                title
                featuredImage {
                    childImageSharp {
                        fluid(quality: 90) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            fields {
                slug
            }
        }

        query MarkdownFiles(
            $project1: String = "/Westin\/Vue/"
            $project2: String = "/Aria at Park Shore/"
            $project3: String = "/Belle Harbor/"
            $project4: String = "/Sarasota Bay Club/"
            $project5: String = "/Oceanside on Pompano Beach/"
            $project6: String = "/Bermuda at Dolphin Cay/"
            $project7: String = "/Berkman Plaza/"
            $project8: String = "/Beau Rivage, St. Tropez, & Riviera/"
            $project9: String = "/Palm Beach County Convention Center/"
        ) {
            project1: markdownRemark(
                frontmatter: { title: { regex: $project1 } }
            ) {
                ...test
            }
            project2: markdownRemark(
                frontmatter: { title: { regex: $project2 } }
            ) {
                ...test
            }
            project3: markdownRemark(
                frontmatter: { title: { regex: $project3 } }
            ) {
                ...test
            }
            project4: markdownRemark(
                frontmatter: { title: { regex: $project4 } }
            ) {
                ...test
            }
            project5: markdownRemark(
                frontmatter: { title: { regex: $project5 } }
            ) {
                ...test
            }
            project6: markdownRemark(
                frontmatter: { title: { regex: $project6 } }
            ) {
                ...test
            }
            project7: markdownRemark(
                frontmatter: { title: { regex: $project7 } }
            ) {
                ...test
            }
            project8: markdownRemark(
                frontmatter: { title: { regex: $project8 } }
            ) {
                ...test
            }
            project9: markdownRemark(
                frontmatter: { title: { regex: $project9 } }
            ) {
                ...test
            }
        }
    `);
    const dataArr = Object.entries(data);
    if (width < 770) {
        dataArr.splice(7, 1);
    }
    if (width < 421) {
        dataArr.splice(3,4);
    }
    return (
        <>
            <TitlePanel>
                <Link
                    to='/projects'
                >
                    <Title>What We've Done</Title>
                </Link>
            </TitlePanel>
            <Panel>
                {dataArr.map(([key, data]) => {
                    return (
                        <Project key={key}>
                            <Img
                                    fluid={{
                                        ...data.frontmatter.featuredImage
                                            .childImageSharp.fluid,
                                        aspectRatio: 1.1,
                                    }}
                                />
                            <Link to={`${data.fields.slug}`}>
                                <HoverData data={data} />
                            </Link>
                        </Project>
                    );
                })}
            </Panel>
        </>
    );
};
