import React, { useEffect, useState } from 'react';
import audioList from './AudioList';
import { useDispatch, useSelector } from 'react-redux';
import { getSongselector, playSong } from '../redux/Slice/audioSlice';

const AudioUI = () => {

    const dispatch = useDispatch();
    const [url, setUrl] = useState()
    const playAudio = useSelector(getSongselector)
    const musicUrl = document.getElementById('music');

    useEffect(() => {
        musicUrl.src = '../audio/Bol_Do_Na_Zara.mp3'
        musicUrl.src = url;

    }, [url])

    return (

        <div className='container-fluid'>
            <div className='row' id='audioplayer'>
                <p style={{ textAlign: 'center', fontSize: '2rem', backgroundColor: 'green', color: 'white', width: '100%', margin: 'auto' }}>Audio Player</p>
                <div className='col-4 musicBg' >

                    <div className='song_img' >
                        <img src={audioList[0].img} className=' audio_gif' />
                    </div>

                </div>

                <div className='col-8 '>

                    <div className='row songOverflow' >
                        {
                            audioList.map((ele, index) => {

                                return (

                                    <div className='col-8 songCard' >

                                        <img src={ele.img} className='songImage' />
                                        <span className='songName'>{ele.name}</span>
                                        <button
                                            className='btn btn-primary'
                                            onClick={(e) =>
                                                dispatch(playSong({
                                                    id: ele.id,
                                                    name: ele.name,
                                                    url: setUrl(ele.audioSong),
                                                    music: ele.audioSong
                                                })
                                                )
                                            }

                                            style={{
                                                marginTop: '5px',
                                                width: '20%',
                                                border: 'none', marginLeft: '200px'
                                            }}> play</button>
                                    </div>


                                )
                            })
                        }

                    </div>


                </div>

                {


                    < audio controls autoPlay loop
                        style={{
                            marginTop: '.5rem',
                        }}
                        autoPlayclassName='audioSetting'
                        id='music'
                    ></audio >

                }

            </div>

        </div >

    )
}

export default AudioUI;