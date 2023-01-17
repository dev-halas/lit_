import { css } from "lit"


export const CardItemCSS = css`

    :host {
        padding: 60px 20px;
        grid-column: span 1;
        box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
        border-radius: 10px;
        position: relative;
    }

    .cardDelete, .cardRefresh {
        position: absolute;
        top: 20px;
        border: none;
        background-color: #0064ff;
        border-radius: 50%;
        padding: 8px;
        visibility: hidden;
        cursor: pointer;
        transition: all .1s ease-in-out;
        opacity: 0;
    }

    .cardDelete {
        right: 20px;
    }

    .cardRefresh {
        left: 20px;
    }

    :host(:hover) .cardDelete, :host(:hover) .cardRefresh{
        visibility: visible;
        opacity: 1;
        
    }

    h2 {
        margin-top: 0;
        border-bottom: 2px solid #0064ff;
    }

    .cardItem--data {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px 0;
        border-bottom: 1px solid #ededed;
    }

    .cardItem--dataName {
        color: #6f737d;
        font-weight: 300;
    }

    .cardItem--dataValue {
        font-weight: 800;
        text-align: right;
    }

`