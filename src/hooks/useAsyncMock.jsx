import { useEffec, useEffect, useState } from "react";


const useAsyncMock = (mocks) => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    const newMockPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mocks)
        }, 1000);
    })

    useEffect(() => {
      newMockPromise.then((res) => {setData(res), setLoading(false)})
    }, [])
    return {data, loading };
}


export default useAsyncMock; 