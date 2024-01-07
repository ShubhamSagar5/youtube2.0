import React from 'react'
import { Stack,Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Videos = ({videosData}) => {
  

    return (
    <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>

    {
        videosData.map((item,idx) => (
            <Box key={idx}>
                {item.id.videoId && <VideoCard video={item}/>}
                {/* {item.id.channelId && <ChannelCard channelDetail={item}/>} */}
            </Box>
        ))
    }

    </Stack>
  )
}

export default Videos