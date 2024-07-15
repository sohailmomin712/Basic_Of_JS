import React, { useState } from 'react'

const useMyTimeout = (time) => {


    const [ready, setReady] = useState(false)

    console.log(ready)

    setTimeout(() => {
        setReady(!ready)
    }, time);

    return ready

}

export default useMyTimeout
