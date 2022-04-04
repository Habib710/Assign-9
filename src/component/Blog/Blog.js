import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className='py-4'>
                <h3 className='py-3'>What is Context API ???</h3>
                <p className='m-1 p-5'>
                The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.Context provides a way to pass data through the component tree without having to pass props down manually at every level.React's context allows you to share information to any component, by storing it in a central place and allowing access to any component.Context provides a way to pass data through the component tree without having to pass props down manually at every level
                </p>


            </section>
            <section className='py-4'>
                <h3 className='py-3'>
                What is meant by semantic tags in HTML???
                </h3>
                <p className='m-1 p-5'>
                A semantic element clearly describes its meaning to both the browser and the develope.Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the code tag is immediately recognized by the browser as some type of coding language.A semantic element clearly describes its meaning to both the browser and the developer.Semantic tags clearly define the purpose of the HTML element. It also describes the type of content that the element should contain.
                </p>
            </section>
            <section className='py-4'>
                <h3 className='py-3'>
                HTML Block and Inline Elements 
                </h3>
                <p className='m-1 p-5'>
                Block-level Elements. A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.A block-level element always starts on a new line and takes up the full width available. An inline element does not start on a new line and it only takes up as much width as necessary,A block element has some whitespace above and below it and does not tolerate any HTML elements next to it. An inline-block element is placed as an inline element (on the same line as adjacent content), but it behaves as a block element.
                </p>
            </section>

            
        </div>
    );
};

export default Blog;