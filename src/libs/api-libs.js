export const getAnimeResponse = async(resources,query)=>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resources}?${query}`)
    const getAnimeResponse = await response.json()
    return getAnimeResponse
}

export const getNestedAnimeResponse = async(resources,objProp)=>{
    const response = await getAnimeResponse(resources)
    return response.data.flatMap(item=>item[objProp])
}

export const reproduce = (data,gap) =>{
    const first = ~~(Math.random() * (data.length -gap)+1)
    const last = first + gap

    const response = {
        data : data.slice(first,last)
    }
    return response
}