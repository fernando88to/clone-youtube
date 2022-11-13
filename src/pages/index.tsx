import * as React from 'react';
import Layout from "../components/Layout";
import {GetServerSideProps} from "next";
import Box from "@mui/material/Box";
import {VideoCard} from "../components/VideoCard";
import {VideoType} from "../types/VideoType";
import {Grid} from "@mui/material";
import {mongoClientServices} from "../databases/mongoClientServices";


export const getServerSideProps: GetServerSideProps = async () => {

    const data: VideoType[] = await mongoClientServices.getAllVideos();
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