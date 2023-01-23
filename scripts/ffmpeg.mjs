import { default as ffmpeg } from 'fluent-ffmpeg'
import { v4 } from 'uuid'
import { mkdir } from "fs/promises";

const folder = v4()

await mkdir(folder)


const command = ffmpeg('./test-video.mov')
    .output(`./${folder}/output-video-1080p.mp4`)
    .size("1920x1080")
    .toFormat('mp4')


    .output(`./${folder}/output-video-720.mp4`)
    .size("1280x720")
    .toFormat('mp4')


    .output(`./${folder}/output-video.mp3`)
    .noVideo()
    .format('mp3')

    .run()