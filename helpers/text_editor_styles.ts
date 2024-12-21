import { nunito_font } from "./font";

export const customCodeBlockCSS = `

${nunito_font}

* {
    font-family: 'Nunito';
    color: #ffffff !important; // Force white text everywhere
}

p,h1,h2,h3,h4,h5,h6,li,ul,ol,pre,blockquote {
    color: #ffffff !important; // Ensure paragraphs are white
}

code {
    background-color: #222222; // Darker background for code blocks
    border-radius: 0.25em;
    border-color: #333333;
    border-width: 1px;
    border-style: solid;
    box-decoration-break: clone;
    color: #ffffff;
    font-size: 0.9rem;
    padding: 0.25em;
}`;
