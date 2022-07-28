import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "m5x7";
        src: url("/fonts/m5x7.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "m5x7";
        src: url("/fonts/m5x7.ttf") format("truetype");
        font-style: normal;
    }


    body,
    html,
    a {
        font-family: 'm5x7';
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #000000;
        overflow-x: hidden;
    }

    a:hover {
        color: #ffffff;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;
        outline: none;
        width: 100%;
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #2e186a 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'm5x7';
        color: #ffffff;
        font-size: 90px;
        line-height: 0.90;
        text-align: center;

        @media only screen and (max-width: 890px) {
          font-size: 60px;
        }

        @media only screen and (max-width: 375px) {
          font-size: 60px;
        }
    }

    p {
        color: #ffffff;
        font-size: 40px;
        line-height: 1.00;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #ffffff;

        :hover {
            color: #ffffff;
        }
    }

    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
`;
