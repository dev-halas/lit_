import { css } from "lit";

export const InfoBarCSS = css`

    .infoBar {
        padding: 10px 50px;
        background-color: #293342;
        color: #abb1c0;
        font-weight: 300;
        border-radius: 10px;
        position: fixed;
        bottom: 20px;
        transform: translateX(-50%);
        left: 50%;
        text-align: center;
    }


    .hideButton {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: transparent;
        outline: none;
        border: 0;
        cursor: pointer;
    }

`;