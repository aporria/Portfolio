import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 pt-10 pb-0 md:flex-row flex-col items-center justify-center">
                <img class="inline object-cover w-64 h-64 rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
            </div>
            <div className="container mx-auto flex px-10 pt-10 pb-0 md:flex-row flex-col items-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                    Hello, I'm Justin.
                    <br className="hidden lg:inline-block"/>
                    I am a recent graduate from Cal Poly Pomona, currently looking for a software development role.
                </h1>                
                <div className="flex justify-center">
                    <a
                        href="#contact"
                        className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Work With Me
                    </a>
                    <a
                        href="#projects"
                        className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        See My Past Work
                    </a>
                </div>
            </div>
            <div className="container mx-auto flex px-10 pt-5 pb-10 md:flex-row flex-col items-center">
                <p className="mb-8 leading-relaxed">
                    I graduated in December of 2022 with cum laude honors. I love to create projects with a clear vision in mind,
                    where I can utilize my creativity and problem-solving skills to the best of my ability. Adaptive, hard-working, 
                    and passionate, I am currently looking for a full-time, entry-level software engineering/developer role where I
                    can put forth all my efforts into the tasks at hand. I am willing to relocate.
                </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                    className="object-cover object-center rounded"
                    alt="hero"
                    src="./coding.svg"
                />
            </div>
        </section>
    );
}