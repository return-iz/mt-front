import React from "react";
import Memes from "../Memes/Memes";
import Styles from "./MemesBlock.module.css";

class MemesBlock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            memes:
            [
                <Memes url="https://c.tenor.com/5Yi3hrIuVLIAAAAC/dog-funny.gif" />,
                <Memes url="https://c.tenor.com/5Yi3hrIuVLIAAAAC/dog-funny.gif" />,
                <Memes url="https://c.tenor.com/5Yi3hrIuVLIAAAAC/dog-funny.gif" />,
                <Memes url="https://c.tenor.com/5Yi3hrIuVLIAAAAC/dog-funny.gif" />,
                <Memes url="https://c.tenor.com/5Yi3hrIuVLIAAAAC/dog-funny.gif" />,
                <Memes url="https://c.tenor.com/5Yi3hrIuVLIAAAAC/dog-funny.gif" />,
            ],
            memesNumber: 0
        }
    }

    render() {
        return(
            <div className={Styles.memesblock}>
                <Memes url="https://c.tenor.com/5Yi3hrIuVLIAAAAC/dog-funny.gif" />
                <Memes url="https://c.tenor.com/5Yi3hrIuVLIAAAAC/dog-funny.gif" />
                <Memes url="https://c.tenor.com/5Yi3hrIuVLIAAAAC/dog-funny.gif" />
                <Memes url="https://c.tenor.com/5Yi3hrIuVLIAAAAC/dog-funny.gif" />
            </div>
        );
    }
}

export default MemesBlock;