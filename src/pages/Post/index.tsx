import { useParams } from "react-router-dom";
import { PostContent } from "./components/PostContent";
import { PostInfo } from "./components/PostInfo";
import { PostsContainer } from "./styles";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";

export interface IssueType {
    issueHtmlUrl: string
    title: string
    user: {
        login: string
    }
    createdAt: string
    comments: number
    body: string
}

export function Post() {
    const [issue, setIssue] = useState<IssueType>({
        issueHtmlUrl: "",
        title: "",
        user: { login: "" },
        createdAt: new Date().toISOString(), //Inicia o estado com a data atual
        comments: 0,
        body: ""
    })

    const { number } = useParams<{ number: string }>()

    async function getIssue(issueNumber: string) {
        const response = await api.get(`/repos/pv-toledo/github-blog/issues/${issueNumber}`)
        const selectedIssue: IssueType = {
            issueHtmlUrl: response.data.html_url,
            title: response.data.title,
            user: {
                login: response.data.user.login
            },
            createdAt: response.data.created_at,
            comments: response.data.comments,
            body: response.data.body
        }

        setIssue(selectedIssue)
    }

    useEffect(() => {
        if (number) {
            getIssue(number)
        }

    }, [number])

    return (
        <PostsContainer>
            <PostInfo
                issue={issue}
            />
            <PostContent
                body={issue.body}
            />
        </PostsContainer>

    )
}