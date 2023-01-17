import { css } from "lit";

export const CardsWrapperCSS = css`
    .cardsWrapper {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
        gap: 20px;
        margin-top: 50px;
    }
`;