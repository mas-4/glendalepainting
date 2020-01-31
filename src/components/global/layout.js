import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import * as reset from '../styles/reset.css'
import * as global from '../styles/global.css';
import Header from './header';


const GlobalStyle = createGlobalStyle`     
    ${reset}
    ${global}
`;

const Main = styled.main`
    display: grid;
    grid-template-rows: 9.6rem auto;
`;

const Footer = styled.footer`
    height: 8rem;
`;

export const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <GlobalStyle />
            <Header siteTitle={data.site.siteMetadata.title} />
            <Main>
                <div />
                {children}
            </Main>
            <Footer>
                © {new Date().getFullYear()} Glendale Painting Corporation,{` `}
                Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
            </Footer>
        </>
    );
};
