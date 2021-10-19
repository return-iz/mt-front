import React from "react";
import PageTitle from "../PageTitle/PageTitle";
import Styles from "./HomePage.module.css";

class HomePage extends React.Component {

    render() {
        return(
            <div className={Styles.homepage}>
                <PageTitle text="Главная"/>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies integer quis auctor elit sed. Eu lobortis elementum nibh tellus molestie nunc non blandit. Ut tellus elementum sagittis vitae. Vel turpis nunc eget lorem dolor. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Mattis aliquam faucibus purus in massa tempor. Turpis egestas pretium aenean pharetra. Risus pretium quam vulputate dignissim suspendisse. Quisque non tellus orci ac auctor augue mauris.
                </p>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies integer quis auctor elit sed. Eu lobortis elementum nibh tellus molestie nunc non blandit. Ut tellus elementum sagittis vitae. Vel turpis nunc eget lorem dolor. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Mattis aliquam faucibus purus in massa tempor. Turpis egestas pretium aenean pharetra. Risus pretium quam vulputate dignissim suspendisse. Quisque non tellus orci ac auctor augue mauris.
                </p>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies integer quis auctor elit sed. Eu lobortis elementum nibh tellus molestie nunc non blandit. Ut tellus elementum sagittis vitae. Vel turpis nunc eget lorem dolor. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Mattis aliquam faucibus purus in massa tempor. Turpis egestas pretium aenean pharetra. Risus pretium quam vulputate dignissim suspendisse. Quisque non tellus orci ac auctor augue mauris.
                </p>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies integer quis auctor elit sed. Eu lobortis elementum nibh tellus molestie nunc non blandit. Ut tellus elementum sagittis vitae. Vel turpis nunc eget lorem dolor. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Mattis aliquam faucibus purus in massa tempor. Turpis egestas pretium aenean pharetra. Risus pretium quam vulputate dignissim suspendisse. Quisque non tellus orci ac auctor augue mauris.
                </p>
                
                <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/dMeQKQEsXxU" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
            </div>
        );
    }

}

export default HomePage;