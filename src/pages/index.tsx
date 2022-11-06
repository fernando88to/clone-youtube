import * as React from 'react';
import Layout from "../components/Layout";
import {GetServerSideProps} from "next";
import Box from "@mui/material/Box";
import {VideoCard} from "../components/VideoCard";
import {VideoType} from "../types/VideoType";
import {Grid} from "@mui/material";


export const getServerSideProps: GetServerSideProps = async () => {
    const data: VideoType[] = [
        {
            authorName: 'Fernando',
            thumb: '/thumb/next01.png',
            title: 'My vides sfsdfa adfad a adsfasd adfa d adf sdfs sdfa adfa adfa dfsdfadf adfh adjfh akjdfh kajf dhakdhfkadshflsdj flakjds flajsdf ldkjs f',
            authorAvatar: 'sem avatar',
            updateAt: new Date(),
            views: 150
        },
        {
            authorName: 'Fernando',
            thumb: '/thumb/next01.png',
            title: 'My vides2',
            authorAvatar: 'sem avatar',
            updateAt: new Date(),
            views: 150
        },
        {
            authorName: 'Fernando',
            thumb: '/thumb/next01.png',
            title: 'My vides3',
            authorAvatar: 'sem avatar',
            updateAt: new Date(),
            views: 150
        },
        {
            authorName: 'Fernando',
            thumb: '/thumb/next01.png',
            title: 'My vides4',
            authorAvatar: 'sem avatar',
            updateAt: new Date(),
            views: 150
        },
        {
            authorName: 'Fernando',
            thumb: '/thumb/next01.png',
            title: 'My vides5',
            authorAvatar: 'sem avatar',
            updateAt: new Date(),
            views: 150
        },
        {
            authorName: 'Fernando',
            thumb: '/thumb/next01.png',
            title: 'My vides6',
            authorAvatar: 'sem avatar',
            updateAt: new Date(),
            views: 150
        },
        {
            authorName: 'Fernando',
            thumb: '/thumb/next01.png',
            title: 'My vides7',
            authorAvatar: 'sem avatar',
            updateAt: new Date(),
            views: 150
        }
    ]
    return {
        props: {
            data: JSON.parse(JSON.stringify(data))
        },
    }
};

interface PropsHome {
    data: VideoType[]
}

export default function Home(props: PropsHome) {


    return (
        <Layout title="Primeira Pagina">
            <Box p={2}>
                <Grid container spacing={4}>
                    {props.data.map((item) => {
                        return (
                            <Grid key={item.title} item xl={3} lg={3} md={4} sm={6} xs={12}>
                                <VideoCard item={item} />
                            </Grid>

                        );
                    })}

                </Grid>
            </Box>


        </Layout>
    );
}