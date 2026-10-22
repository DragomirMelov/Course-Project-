import React, { useEffect, useState } from 'react'

export default function useFetchApi (url,initialState){
    const [state, setState] = useState(initialState);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(result => setState(result))
            .catch(err => console.error("Fetch error:", err));
    }, [url]);
    return state;
}
