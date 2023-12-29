export function render() {
    const html = `
    <div class="flex flex-col items-center justify-start bg-primary-light">
        <div
        id="nav-bar"
        class="sticky top-4 z-20 -mt-16 flex items-center justify-between gap-16 bg-light-opacity-30 px-12 py-4 drop-shadow-xl"
        >
        <a href="#hero" class="nav-link"><img src="" alt="Logo" /></a>
        <nav class="">
            <a href="#about" class="nav-link">About me</a>
            <a href="#works" class="nav-link">Works</a>
            <a href="#contact" class="nav-link">Contact me</a>
        </nav>
        <div>
            <a href="https://github.com/loganwinnier" class="connect-link">
            <i
                class="bi bi-github mr-2 text-2xl transition-all hover:text-primary-dark-acc"
            ></i>
            </a>
            <a
            href="https://www.linkedin.com/in/logan-winnie-r/"
            class="connect-link"
            >
            <i
                class="bi bi-linkedin mr-2 text-2xl transition-all hover:text-primary-dark-acc"
            ></i>
            </a>
        </div>
        </div>

        <div
        id="hero"
        class="web-section-B -top-8 flex justify-between px-32 pt-32"
        >
        <div id="hero-left" class="mt-24">
            <h1 class="section-title-outline">My name is Logan,</h1>
            <h1 class="section-title">I'm a Software Engineer</h1>
            <nav id="hero-nav" class="mt-4 flex flex-col gap-6">
            <a class="hero-link" href="#about">About me</a>
            <a class="hero-link" href="#works">Works</a>
            <a class="hero-link" href="#contact">Contact me</a>
            </nav>
        </div>

        <div
            id="hero-right"
            class="mx-auto my-24 flex items-start justify-center"
        >
            <div
            id="hero-image"
            class="rounded-3xl border-4 border-secondary-dark-light bg-secondary-light-2 px-80 py-80"
            >
            <img src="" alt="Hero Image" />
            </div>
        </div>
        </div>

        <div id="about" class="web-section-A flex justify-between pl-16 pt-32">
        <div id="about-left" class="ml-16 mt-12">
            <h1 class="section-title">About me</h1>
            <p class="max-w-prose text-wrap font-accent text-lg">
            Software Engineer who recently finished Rithm School's full stack
            development program. Originally graduating with a degree in Psychology
            from Boston University, shifting to field of Software engineering.
            Working in a trauma-informed therapeutic school, excelling at
            cooperation with colleagues as well as creative and decisive decision
            making in tense situations. Since the switch of careers creating
            full-stack applications using but not limited to Python, Javascript,
            React, and Postgres. Including authentication, Amazon S3 integration,
            and end to end testing.
            </p>
            <img src="" alt="Logan running" />
        </div>

        <div id="about-right" class="mx-52 my-16 flex items-start justify-center">
            <div
            id="about-image"
            class="rounded-3xl border-4 border-secondary-dark-dark bg-secondary-light-2 px-80 py-80"
            >
            <img src="" alt="about Image" />
            </div>
        </div>
        </div>

        <div id="works" class="web-section-B">
        <h1 class="section-title-outline mb-20 ml-32 mt-32">Works</h1>
        <div class="flex justify-evenly">
            <div class="card px-4">
            <h3 class="project-name">Share BnB</h3>
            <img src="./public/placeholder.jpg" alt="Card Image" />
            <p class="w-80 text-wrap font-accent">
                A job board application with authentication <br /><br />
            </p>
            <h4 class="font-semibold text-xl -my-4">Made With</h4>
            <div class="flex gap-4 mb-4">
                <img src="./public/react.svg" alt="react" class="w-12">
                <img src="./public/flask.svg" alt="flask" class="w-12">
            </div>
            <div class="flex gap-8">
                <a href="" class="btn-primary">Code</a>
                <a href="" class="btn-primary">Demo</a>
            </div>
            </div>
            <div class="card px-4">
            <h3 class="project-name">+One</h3>
            <img src="./public/placeholder.jpg" alt="Card Image" />
            <p class="w-80 text-wrap font-accent">
                A social app with authentication similar to tinder for matching
                people with events
            </p>
            <h4 class="font-semibold text-xl -my-4">Made With</h4>
            <div class="flex gap-4 mb-4">
                <img src="./public/react.svg" alt="react" class="w-12">
                <img src="./public/flask.svg" alt="flask" class="w-12">
            </div>
            <div class="flex gap-8">
                <a href="" class="btn-primary">Code</a>
                <a href="" class="btn-primary">Demo</a>
            </div>
            </div>
            <div class="card px-4">
            <h3 class="project-name">Saugerties Self Storage</h3>
            <img src="./public/placeholder.jpg" alt="Card Image" />
            <p class="w-80 text-wrap font-accent">
                A live site for local storage company <br />
                &#8205; <br />&#8205;
            </p>
            <h4 class="font-semibold text-xl -my-4">Made With</h4>
            <div class="flex gap-4 mb-4">
                <img src="./public/nextjs-icon.svg" alt="flask" class="w-12">
            </div>
            <div class="flex gap-8">
                <a href="" class="btn-primary">Code</a>
                <a href="" class="btn-primary">Demo</a>
            </div>
            </div>
        </div>
        <img src="" alt="Logan viewing" />
        </div>

        <div id="contact" class="web-section-A -ml-16 flex justify-around">
        <div id="connect-left" class="mt-32">
            <h1 class="section-title">Contact me</h1>
            <form action="" class="form">
            <input type="text" class="field-small" placeholder="Name" />
            <input type="email" class="field-small" placeholder="Email" />
            <textarea
                type="text"
                class="field-large"
                placeholder="message"
            ></textarea>
            <button
            id="send-mail"
                type="button"
                class="btn-primary col-span-1 col-start-4 row-span-1 border-4 border-secondary-dark p-1 font-accent font-semibold"
            >
                Send
            </button>
            </form>
            <img src="" alt="Logan Calling" />
        </div>

        <div id="connect-right" class="mt-60 pr-16">
            <h1 class="section-title">Connect</h1>
            <div class="ml-8 mt-8 flex flex-col items-start gap-8">
            <a href="https://github.com/loganwinnier" class="connect-link">
                <i class="bi bi-github mr-2 text-3xl"></i>Github
            </a>
            <a
                href="https://www.linkedin.com/in/logan-winnie-r/"
                class="connect-link"
            >
                <i class="bi bi-linkedin mr-2 text-3xl"></i> Linked-in
            </a>
            <a href="mailto:loganwinnier@gmail.com" class="connect-link">
                <i class="bi bi-envelope-fill mr-2 text-3xl"></i>
                Loganwinnier@gmail.com
            </a>
            <button
                class="btn-primary border-4 border-secondary-dark px-3 py-1.5 font-accent font-semibold"
            >
                Resume
            </button>
            </div>
        </div>
        </div>
    </div>
  `;
    return { html };
}