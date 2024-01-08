import React from 'react'
import { Stack,Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Videos = ({videosData,direction }) => {
  
if(!videosData?.length) return 'Loading...'
    return (
    <Stack direction={direction || "row"} flexWrap='wrap' justifyContent='start' gap={2}>

    {
        videosData.map((item,idx) => (
            <Box key={idx}>
                {item.id.videoId && <VideoCard video={item}/>}
                {item.id.channelId && <ChannelCard channelDetail={item}/>}
            </Box>
        ))
    }

    </Stack>
  )
}

export default Videos