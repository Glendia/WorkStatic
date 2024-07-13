<template>
      <div class="container">
          <header class="header">
                <h1>Build Your SaaS in Seconds</h1>
                      <p>This template demonstrates most of Nuxt UI Pro's components. It's a great starting point to build your own SaaS.</p>
                            <button @click="$router.push('/get-started')">Get Started</button>
                                  <button @click="$router.push('/use-this-template')">Use This Template</button>
                                      </header>

                                          <section class="features">
                                                <h2>The Power of Our Service</h2>
                                                      <ul>
                                                              <li>Easy to Use</li>
                                                                      <li>Reliable</li>
                                                                              <li>Secure</li>
                                                                                      <li>Fast</li>
                                                                                              <li>Affordable</li>
                                                                                                      <li>Scalable</li>
                                                                                                            </ul>
                                                                                                                </section>

                                                                                                                    <section class="why-choose-us">
                                                                                                                          <h2>Why Choose Our Service?</h2>
                                                                                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                                                                                                    </section>

                                                                                                                                        <section class="testimonials">
                                                                                                                                              <h2>Testimonials</h2>
                                                                                                                                                    <blockquote>
                                                                                                                                                            <p>Proident sunt exercitation minim laborum enim laboris labore esse.</p>
                                                                                                                                                                    <footer>Rose Roberson, CEO at Company</footer>
                                                                                                                                                                          </blockquote>
                                                                                                                                                                                <blockquote>
                                                                                                                                                                                        <p>Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor. Esse incididunt cillum nostrud esse do quis amet labore amet nulla eiusmod amet nulla Lorem. Incididunt ex voluptate irure officia laboris ea proident est qui.</p>
                                                                                                                                                                                                <footer>Chace Rodgers, CEO at Company</footer>
                                                                                                                                                                                                      </blockquote>
                                                                                                                                                                                                            <blockquote>
                                                                                                                                                                                                                    <p>Velit consectetur in adipisicing culpa eiusmod commodo eu ex dolore. Officia irure nisi dolor dolore velit fugiat. Aliqua sint aliqua aute elit eu sunt.</p>
                                                                                                                                                                                                                            <footer>Cornelius Sheppard, CEO at Company</footer>
                                                                                                                                                                                                                                  </blockquote>
                                                                                                                                                                                                                                      </section>

                                                                                                                                                                                                                                          <footer class="footer">
                                                                                                                                                                                                                                                <p>Get started today</p>
                                                                                                                                                                                                                                                      <button @click="$router.push('/buy-now')">Buy Now</button>
                                                                                                                                                                                                                                                          </footer>
                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                            </template>

                                                                                                                                                                                                                                                            <script setup>
                                                                                                                                                                                                                                                            import { useRouter } from 'vue-router';

                                                                                                                                                                                                                                                            const router = useRouter();

                                                                                                                                                                                                                                                            // Example route push for demonstration purposes
                                                                                                                                                                                                                                                            function goToPage(routeName) {
                                                                                                                                                                                                                                                              router.push({ name: routeName });
                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                              </script>

                                                                                                                                                                                                                                                              <style scoped>
                                                                                                                                                                                                                                                              .container {
                                                                                                                                                                                                                                                                max-width: 960px;
                                                                                                                                                                                                                                                                  margin: 0 auto;
                                                                                                                                                                                                                                                                    padding: 20px;
                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                    .header {
                                                                                                                                                                                                                                                                      text-align: center;
                                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                                      .features ul {
                                                                                                                                                                                                                                                                        list-style-type: none;
                                                                                                                                                                                                                                                                          padding: 0;
                                                                                                                                                                                                                                                                            display: flex;
                                                                                                                                                                                                                                                                              flex-wrap: wrap;
                                                                                                                                                                                                                                                                                justify-content: space-around;
                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                .features li {
                                                                                                                                                                                                                                                                                  flex-basis: calc(100% / 6);
                                                                                                                                                                                                                                                                                    text-align: center;
                                                                                                                                                                                                                                                                                      margin-bottom: 1em;
                                                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                                                      .testimonials blockquote {
                                                                                                                                                                                                                                                                                        border-left: 4px solid #ccc;
                                                                                                                                                                                                                                                                                          padding: 1em;
                                                                                                                                                                                                                                                                                            margin: 1em 0;
                                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                            .testimonials footer {
                                                                                                                                                                                                                                                                                              color: #888;
                                                                                                                                                                                                                                                                                                font-size: 0.8em;
                                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                                @media (max-width: 600px) {
                                                                                                                                                                                                                                                                                                  .features li {
                                                                                                                                                                                                                                                                                                      flex-basis: 100%;
                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                        </style>