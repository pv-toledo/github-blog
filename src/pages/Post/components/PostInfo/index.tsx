import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BottomLinks, BoxHeader, HeaderLink, MainContentBoxPost } from "./styles";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import type { IssueType } from "../..";
import { dateFormatter } from "../../../../utils/formatter";

interface PostInfoProps {
    issue: IssueType
}

export function PostInfo ({issue}: PostInfoProps) {
    return (
        <MainContentBoxPost>
            <BoxHeader>
                
                <HeaderLink href="/">
                    <FontAwesomeIcon icon={faChevronLeft} id="back" />
                    <span>VOLTAR</span>
                </HeaderLink>

                <HeaderLink href={issue.issueHtmlUrl}>
                    <span>VER NO GITHUB</span>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} id="arrowUp" />
                </HeaderLink>

            </BoxHeader>

            <p>
                {issue.title}
            </p>

            <BottomLinks>
                <div>
                    <FontAwesomeIcon icon={faGithub} id="githubIcon" />
                    <span>{issue.user.login}</span>
                </div>

                <div>
                    <FontAwesomeIcon icon={faCalendarDay} id="calendar" />
                    <span>{dateFormatter(issue.createdAt)}</span>
                </div>

                <div>
                    <FontAwesomeIcon icon={faComment} id="comment" />
                    <span>{issue.comments} comentários</span>
                </div>
            </BottomLinks>
        </MainContentBoxPost>
    )
}