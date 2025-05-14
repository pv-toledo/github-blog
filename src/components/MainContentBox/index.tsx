import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GithubLink, InfoBar, MainContentBoxContainer, MainContentBoxContent, TextContentContainer, TextHeaderContainer } from "./styles";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";

const user = "pv-toledo"

interface UserDataType {
    userAvatarUrl: string
    userRealName: string
    userGithubUrl: string
    userBio: string
    username: string
    userCompany: string
    userFollowers: number
}

export function MainContentBox() {

    const [userData, setUserData] = useState({} as UserDataType)

    async function getUserData(user: string) {
        const response = await api.get(`/users/${user}`)
        console.log(response.data)
        const { avatar_url, name, html_url, bio, login, company, followers } = response.data
        setUserData(
            {
                userAvatarUrl: avatar_url,
                userRealName: name,
                userGithubUrl: html_url,
                userBio: bio,
                username: login,
                userCompany: company,
                userFollowers: followers
            }
        )
    }
    useEffect(() => {
        getUserData(user)
    }, [])

    return (
        <MainContentBoxContainer>
            <MainContentBoxContent>
                <img src={userData.userAvatarUrl} />
                <TextContentContainer>

                    <TextHeaderContainer>

                        <span>{userData.userRealName}</span>

                        <GithubLink href={userData.userGithubUrl} target="_blank" rel="noopener noreferrer">
                            <span>GITHUB</span>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} id="arrowUp" />
                        </GithubLink>

                    </TextHeaderContainer>

                    <p>{userData.userBio}</p>

                    <InfoBar>
                        <div>
                            <FontAwesomeIcon icon={faGithub} />
                            <span>{userData.username}</span>
                        </div>

                        <div>
                            <FontAwesomeIcon icon={faBuilding} id="building" />
                            <span>{userData.userCompany}</span>
                        </div>

                        <div>
                            <FontAwesomeIcon icon={faUserGroup} id="followers" />
                            <span>{userData.userFollowers} seguidores</span>
                        </div>
                    </InfoBar>

                </TextContentContainer>
            </MainContentBoxContent>
        </MainContentBoxContainer>
    )
}