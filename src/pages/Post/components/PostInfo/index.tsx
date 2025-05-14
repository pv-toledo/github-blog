import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BottomLinks, BoxHeader, HeaderLink, MainContentBoxPost } from "./styles";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function PostInfo () {
    return (
        <MainContentBoxPost>
            <BoxHeader>
                
                <HeaderLink href="">
                    <FontAwesomeIcon icon={faChevronLeft} id="back" />
                    <span>VOLTAR</span>
                </HeaderLink>

                <HeaderLink href="">
                    <span>VER NO GITHUB</span>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} id="arrowUp" />
                </HeaderLink>

            </BoxHeader>

            <p>
                JavaScript data types and data structures
            </p>

            <BottomLinks>
                <div>
                    <FontAwesomeIcon icon={faGithub} id="githubIcon" />
                    <span>pv-toledo</span>
                </div>

                <div>
                    <FontAwesomeIcon icon={faCalendarDay} id="calendar" />
                    <span>Há 1 dia</span>
                </div>

                <div>
                    <FontAwesomeIcon icon={faComment} id="comment" />
                    <span>5 comentários</span>
                </div>
            </BottomLinks>
        </MainContentBoxPost>
    )
}