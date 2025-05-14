import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GithubLink, InfoBar, MainContentBoxContainer, MainContentBoxContent, TextContentContainer, TextHeaderContainer } from "./styles";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function MainContentBox() {
    return (
        <MainContentBoxContainer>
            <MainContentBoxContent>
                <img src="https://github.com/pv-toledo.png" />
                <TextContentContainer>

                    <TextHeaderContainer>

                        <span>Paulo Vinícius Toledo</span>

                        <GithubLink href="">
                            <span>GITHUB</span>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} id="arrowUp" />
                        </GithubLink>

                    </TextHeaderContainer>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aliquam veritatis! Ullam amet architecto maiores harum eligendi! Distinctio quam et vero atque aliquid, praesentium labore, eius officiis eligendi ipsam quas.</p>

                    <InfoBar>
                        <div>
                            <FontAwesomeIcon icon={faGithub} />
                            <span>pv-toledo</span>
                        </div>

                        <div>
                            <FontAwesomeIcon icon={faBuilding} id="building" />
                            <span>Rocketseat</span>
                        </div>

                        <div>
                            <FontAwesomeIcon icon={faUserGroup} id="followers" />
                            <span>32 seguidores</span>
                        </div>
                    </InfoBar>

                </TextContentContainer>
            </MainContentBoxContent>
        </MainContentBoxContainer>
    )
}