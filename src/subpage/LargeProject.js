import React from 'react';
import Bio from "../components/Bio"
import { Container } from "react-bootstrap"

function LargeProject(props) {
    return (
        <div>
            <Bio />
            <Container>
                <h3 className="p-2">Projects</h3>
                <Container>
                    <h4>Telegram bot</h4>
                    <div>
                        <p>
                            I made use of the "telepot" module to connect to the telegram api.
                            The bot registers and saves the: email address of the user,
                            twitter username, telegram username, facebook url, user etherum address
                            into a database.
                            It allows for editing of previous entries.
                            It creates a referal system.
                            Export the data into a csv file.
                        </p>
                    </div>
                    <hr />
                </Container>
                <Container>
                    <h4>Url Shortener</h4>
                    <div>
                        <p>
                            It recieves the url in text format, saves 
                            it to the database which generates a unique 
                            code and sends to the user which is copied and 
                            when put into the search bar, it bounces back on 
                            the database and redirects you to webpage you want to go to.
                        </p>
                    </div>
                    <hr />
                </Container>
                <Container>
                    <h4>Django and React Application</h4>
                    <div>
                        <p>
                            It is a Todo Application that show the complete and incomplete
                            task. It allows for editing and deleting of task that has already
                            been completed. The React Application uses the "axios" library 
                            to connect to the backend Django Application.
                        </p>
                    </div>
                    <hr />
                </Container>
                <Container>
                    <h4>Text to speech software</h4>
                    <div>
                        <p>
                            It receives text in utf-8 format and provides option to:
                            play the text, change the speed of the text,
                            select a male or female tone, 
                            and allows to download it as an mp3 file.
                        </p>
                    </div>
                    <hr />
                </Container>
                <Container>
                    <h4>School Website and Blog Interface</h4>
                    <div>
                        <p>
                            #It has the usual school website pages like the Home, 
                            Executives, About, Gallery, Event, a Blog and an Alumni page.
                            The blog interface has and admin page where you can publish your articles,
                            It has a comment and tagging system,
                            The Alumni webpage also has a blogging system and a forum webpage.
                        </p>
                    </div>
                    <hr />
                </Container>
            </Container>
        </div>
    );
}

export default LargeProject;