import { css } from "lit"

export const SearchBarCSS = css`
    .serachWrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 100%;
        height: auto;
        position: relative;
    }

    input {
        width: 500px;
        max-width: 100%;
        padding: 10px 20px;
        height: 50px;
        font-size: 16px;
        box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
        border: 1px solid #cce0ff;
        border-radius: 5px;
    }

    input::placeholder {
        color: #999;
    }

    .list {
        position: absolute;
        z-index: 100;
        width: 500px;
        max-width: 100%;
        max-height: 190px;
        overflow-y: auto;
        background: #ededed;
        top: 55px;
        margin: 0;
        padding: 0;
        list-style: none;
        box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
    }

    ::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 7px;
        background-color: #cce0ff;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background-color: rgba(0, 0, 0, .5);
        box-shadow: 0 0 1px rgba(255, 255, 255, .5);
    }


    li {
        cursor: pointer;
        padding: 0 20px;
        height: 42px;
        display: flex;
        align-items: center;
    }

    li:nth-child(2n + 0) {
        background-color: white;
    }

`